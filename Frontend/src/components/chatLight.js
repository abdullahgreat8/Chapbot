import React, { useEffect, useState } from "react";
import ChatLayout from "./ChatComponents/ChatLayout";
import axios from "axios";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

const ChatLight = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContactId, setSelectedContactId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState({});
  const [services, setServices] = useState([]);
  // Change this to track PIN verification per contact
  const [pinVerified, setPinVerified] = useState({});
  // Change this to track waiting state per contact
  const [waitingForServiceSelection, setWaitingForServiceSelection] = useState({});

  const getAuthHeader = () => {
    const token = localStorage.getItem("authToken");
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  // Fetch businesses
  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/buisness/get_all_buisness");
        const data = res.data.buisness.map((b, idx) => ({
          id: String(b.id),
          name: b.name,
          avatar: `https://i.pravatar.cc/150?img=${idx + 1}`,
        }));

        setContacts(data);

        // Initialize messages with a PIN request
        const initialMsgs = {};
        const initialPinStates = {};
        const initialWaitingStates = {};
        
        data.forEach((c) => {
          initialMsgs[c.id] = [
            {
              direction: "incoming",
              message: "Welcome! Please enter your PIN to proceed.",
              timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              type: "message"
            },
          ];
          // Initialize PIN verification state for each contact
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

  // Fetch services
  const fetchServices = async (businessId, parentServiceId = null) => {
    try {
      const response = await axios.get("http://localhost:5000/service/get_all_services", {
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
        
        // Add services to chat history
        const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        setMessages((prev) => ({
          ...prev,
          [businessId]: [
            ...(prev[businessId] || []),
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
          ],
        }));
        
        // Update waiting state for this specific contact
        setWaitingForServiceSelection(prev => ({
          ...prev,
          [businessId]: true
        }));
      } else if (data.message) {
        setMessages((prev) => ({
          ...prev,
          [businessId]: [
            ...(prev[businessId] || []),
            {
              direction: "incoming",
              message: data.message,
              timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              type: "message"
            },
          ],
        }));
      }
    } catch (err) {
      console.error("Failed to fetch services:", err);
    }
  };

  // Handle user input (PIN or message)
  const handleSend = async (text) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    // Check waiting state for the current contact
    if (waitingForServiceSelection[selectedContactId] && pinVerified[selectedContactId]) {
      setMessages((prev) => ({
        ...prev,
        [selectedContactId]: [
          ...(prev[selectedContactId] || []),
          { direction: "outgoing", message: text, timestamp, type: "message" },
          {
            direction: "incoming",
            message: "Please select a service from above.",
            timestamp,
            type: "message"
          },
        ],
      }));
      return;
    }

    setMessages((prev) => ({
      ...prev,
      [selectedContactId]: [
        ...(prev[selectedContactId] || []),
        { direction: "outgoing", message: text, timestamp, type: "message" },
      ],
    }));

    // Check PIN verification for the current contact
    if (!pinVerified[selectedContactId]) {
      try {
        const res = await axios.post("http://localhost:5000/user/verifypin", { pin: text }, getAuthHeader());
        if (res.data.message === "pin verified") {
          // Update PIN verification for this specific contact
          setPinVerified(prev => ({
            ...prev,
            [selectedContactId]: true
          }));
          
          setMessages((prev) => ({
            ...prev,
            [selectedContactId]: [
              ...prev[selectedContactId],
              {
                direction: "incoming",
                message: "PIN verified! You can now use the available services.",
                timestamp,
                type: "message"
              },
            ],
          }));
          await fetchServices(selectedContactId);
        } else {
          setMessages((prev) => ({
            ...prev,
            [selectedContactId]: [
              ...prev[selectedContactId],
              {
                direction: "incoming",
                message: "Invalid PIN. Please try again.",
                timestamp,
                type: "message"
              },
            ],
          }));
        }
      } catch (error) {
        console.error("PIN verification error", error);
      }
    }
  };

  // Handle service click
  const handleServiceClick = async (service) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    // Add user selection to messages
    setMessages((prev) => ({
      ...prev,
      [selectedContactId]: [
        ...(prev[selectedContactId] || []),
        { direction: "outgoing", message: service.name, timestamp, type: "message" },
      ],
    }));

    // Reset waiting state for this specific contact
    setWaitingForServiceSelection(prev => ({
      ...prev,
      [selectedContactId]: false
    }));

    // Fetch sub-services
    try {
      const response = await axios.get("http://localhost:5000/service/get_all_services", {
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
        
        // Add new services to chat history
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
        
        // Update waiting state for this specific contact
        setWaitingForServiceSelection(prev => ({
          ...prev,
          [selectedContactId]: true
        }));
      } else if (data.message) {
        // If no services found, show fallback message
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
        
        // Update waiting state for this specific contact
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
      services={[]} // No longer passing services as separate prop
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