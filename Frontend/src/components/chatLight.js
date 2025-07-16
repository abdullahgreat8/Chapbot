import React, { useEffect, useState } from "react";
import ChatLayout from "./ChatComponents/ChatLayout";
import api from "../api/axios";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

const ChatLight = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContactId, setSelectedContactId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState({});
  const [services, setServices] = useState([]);
  const [pinVerified, setPinVerified] = useState({});
  const [waitingForServiceSelection, setWaitingForServiceSelection] = useState({});

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const res = await api.get("/buisness/get_all_buisness");
        const data = res.data.buisness.map((b, idx) => ({
          id: String(b.id),
          name: b.name,
          avatar: `https://i.pravatar.cc/150?img=${idx + 1}`,
        }));

        setContacts(data);

        const initialMsgs = {};
        const initialPinStates = {};
        const initialWaitingStates = {};

        data.forEach((c) => {
          initialMsgs[c.id] = [{
            direction: "incoming",
            message: "Welcome! Please enter your PIN to proceed.",
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            type: "message"
          }];
          initialPinStates[c.id] = false;
          initialWaitingStates[c.id] = false;
        });

        setMessages(initialMsgs);
        setPinVerified(initialPinStates);
        setWaitingForServiceSelection(initialWaitingStates);

        if (data.length) setSelectedContactId(data[0].id);
      } catch (err) {
        console.error("Error fetching businesses", err);
      }
    };

    fetchBusinesses();
  }, []);

  const saveMessageToBackend = async (businessId, sender, message) => {
    try {
      await api.post("/chat/add", {
        business_id: businessId,
        sender,
        message
      });
    } catch (err) {
      console.error("Failed to save message:", err);
    }
  };

  const fetchServices = async (businessId, parentServiceId = null) => {
    try {
      const response = await api.get("/service/get_all_services", {
        params: {
          buisness_id: businessId,
          parent_service_id: parentServiceId ?? null,
        },
      });

      const data = response.data;

      if (Array.isArray(data.services)) {
        const serviceObjects = data.services.map((s) => ({
          name: s.name,
          id: s.id,
        }));

        const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        const newMsgs = [
          {
            direction: "incoming",
            message: "Please select a service:",
            timestamp,
            type: "message"
          },
          {
            direction: "incoming",
            services: serviceObjects,
            timestamp,
            type: "services"
          }
        ];

        setMessages((prev) => ({
          ...prev,
          [businessId]: [
            ...(prev[businessId] || []),
            ...newMsgs
          ],
        }));

        await saveMessageToBackend(businessId, "bot", "Please select a service:");

        setWaitingForServiceSelection(prev => ({
          ...prev,
          [businessId]: true
        }));
      } else if (data.message) {
        const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        setMessages((prev) => ({
          ...prev,
          [businessId]: [
            ...(prev[businessId] || []),
            {
              direction: "incoming",
              message: data.message,
              timestamp,
              type: "message"
            },
          ],
        }));

        await saveMessageToBackend(businessId, "bot", data.message);
      }
    } catch (err) {
      console.error("Failed to fetch services:", err);
    }
  };

  const handleSend = async (text) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    if (waitingForServiceSelection[selectedContactId] && pinVerified[selectedContactId]) {
      const warningMsg = "Please select a service from above.";

      setMessages((prev) => ({
        ...prev,
        [selectedContactId]: [
          ...(prev[selectedContactId] || []),
          { direction: "outgoing", message: text, timestamp, type: "message" },
          { direction: "incoming", message: warningMsg, timestamp, type: "message" },
        ],
      }));

      await saveMessageToBackend(selectedContactId, "user", text);
      await saveMessageToBackend(selectedContactId, "bot", warningMsg);
      return;
    }

    setMessages((prev) => ({
      ...prev,
      [selectedContactId]: [
        ...(prev[selectedContactId] || []),
        { direction: "outgoing", message: text, timestamp, type: "message" },
      ],
    }));

    await saveMessageToBackend(selectedContactId, "user", text);

    if (!pinVerified[selectedContactId]) {
      try {
        const res = await api.post("/user/verifypin", { pin: text });

        if (res.data.message === "pin verified") {
          setPinVerified(prev => ({
            ...prev,
            [selectedContactId]: true
          }));

          const successMsg = "PIN verified! You can now use the available services.";

          setMessages((prev) => ({
            ...prev,
            [selectedContactId]: [
              ...prev[selectedContactId],
              { direction: "incoming", message: successMsg, timestamp, type: "message" },
            ],
          }));

          await saveMessageToBackend(selectedContactId, "bot", successMsg);

          await fetchServices(selectedContactId);
        } else {
          const invalidMsg = "Invalid PIN. Please try again.";

          setMessages((prev) => ({
            ...prev,
            [selectedContactId]: [
              ...prev[selectedContactId],
              { direction: "incoming", message: invalidMsg, timestamp, type: "message" },
            ],
          }));

          await saveMessageToBackend(selectedContactId, "bot", invalidMsg);
        }
      } catch (error) {
        console.error("PIN verification error", error);
      }
    }
  };

  const handleServiceClick = async (service) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    setMessages((prev) => ({
      ...prev,
      [selectedContactId]: [
        ...(prev[selectedContactId] || []),
        { direction: "outgoing", message: service.name, timestamp, type: "message" },
      ],
    }));

    await saveMessageToBackend(selectedContactId, "user", service.name);

    setWaitingForServiceSelection(prev => ({
      ...prev,
      [selectedContactId]: false
    }));

    try {
      const response = await api.get("/service/get_all_services", {
        params: {
          buisness_id: selectedContactId,
          parent_service_id: service.id,
        },
      });

      const data = response.data;

      if (Array.isArray(data.services)) {
        const newServices = data.services.map((s) => ({
          name: s.name,
          id: s.id,
        }));

        setMessages((prev) => ({
          ...prev,
          [selectedContactId]: [
            ...(prev[selectedContactId] || []),
            {
              direction: "incoming",
              message: "Please select a service:",
              timestamp,
              type: "message"
            },
            {
              direction: "incoming",
              services: newServices,
              timestamp,
              type: "services"
            }
          ],
        }));

        await saveMessageToBackend(selectedContactId, "bot", "Please select a service:");

        setWaitingForServiceSelection(prev => ({
          ...prev,
          [selectedContactId]: true
        }));
      } else if (data.message) {
        setMessages((prev) => ({
          ...prev,
          [selectedContactId]: [
            ...(prev[selectedContactId] || []),
            {
              direction: "incoming",
              message: data.message,
              timestamp,
              type: "message"
            },
          ],
        }));

        await saveMessageToBackend(selectedContactId, "bot", data.message);

        setWaitingForServiceSelection(prev => ({
          ...prev,
          [selectedContactId]: false
        }));
      }
    } catch (err) {
      console.error("Failed to fetch sub-services", err);
    }
  };

  return (
    <ChatLayout
      contacts={contacts}
      services={[]}
      selectedContactId={selectedContactId}
      setSelectedContactId={setSelectedContactId}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      messages={messages}
      handleSend={handleSend}
      handleServiceClick={handleServiceClick}
    />
  );
};

export default ChatLight;
