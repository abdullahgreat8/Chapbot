// import React from "react";
// import { Sidebar, ConversationList } from "@chatscope/chat-ui-kit-react";
// import CustomSearchBar from "./CustomSearchBar";
// import ContactItem from "./ContactItem";

// const ChatSidebar = ({
//   contacts,
//   selectedContactId,
//   setSelectedContactId,
//   messages,
//   searchTerm,
//   setSearchTerm,
// }) => {
//   const filteredContacts = contacts.filter((c) =>
//     c.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const getLastMessage = (contactId) => {
//     const msgs = messages[contactId];
//     if (!msgs?.length) return { text: "No messages yet.", timestamp: "" };
//     const last = msgs[msgs.length - 1];
//     return { text: last.message, timestamp: last.timestamp || "" };
//   };

//   return (
//     <Sidebar
//       position="left"
//       scrollable
//       style={{
//         backgroundColor: "#f0f2f5",
//         minWidth: "280px",
//         maxWidth: "350px",
//         borderRight: "1px solid #e0e0e0",
//       }}
//     >
//       <div
//         style={{
//           height: "70.5px",
//           padding: "20px 25px",
//           fontSize: "24px",
//           fontWeight: "bold",
//           color: "#1e3a8a",
//           borderBottom: "1px solid #e0e0e0",
//           display: "flex",
//           alignItems: "center",
//           gap: "10px",
//         }}
//       >
//         💬 Support Assistant
//       </div>

//       <div style={{ padding: "15px" }}>
//         <CustomSearchBar value={searchTerm} onChange={setSearchTerm} />
//       </div>

//       <ConversationList>
//         {filteredContacts.map((contact) => (
//           <ContactItem
//             key={contact.id}
//             contact={contact}
//             isActive={selectedContactId === contact.id}
//             onClick={() => setSelectedContactId(contact.id)}
//             lastMessage={getLastMessage(contact.id)}
//           />
//         ))}
//       </ConversationList>
//     </Sidebar>
//   );
// };

// export default ChatSidebar;


import React from "react";
import { Sidebar, ConversationList } from "@chatscope/chat-ui-kit-react";
import CustomSearchBar from "./CustomSearchBar";
import ContactItem from "./ContactItem";

const ChatSidebar = ({
  contacts,
  selectedContactId,
  setSelectedContactId,
  messages,
  searchTerm,
  setSearchTerm,
}) => {
  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getLastMessage = (contactId) => {
    const msgs = messages[contactId];
    if (!msgs?.length) return { text: "No messages yet.", timestamp: "" };
    const last = msgs[msgs.length - 1];
    return { text: last.message, timestamp: last.timestamp || "" };
  };

  return (
    <Sidebar
      position="left"
      scrollable
      style={{
        background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        minWidth: "320px",
        maxWidth: "380px",
        borderRight: "1px solid rgba(55, 65, 81, 0.5)",
        position: "relative",
      }}
    >
      {/* Header with gradient and glow effect */}
      <div
        style={{
          height: "80px",
          padding: "20px 25px",
          background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
          fontSize: "22px",
          fontWeight: "bold",
          color: "white",
          borderBottom: "1px solid rgba(55, 65, 81, 0.5)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          position: "relative",
          boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
        }}
      >
        <div style={{
          fontSize: "28px",
          filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
        }}>💬</div>
        <span style={{
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
          letterSpacing: "0.5px",
        }}>
          Support Assistant
        </span>
      </div>

      {/* Search bar section */}
      <div style={{ 
        padding: "20px 20px 15px 20px",
        background: "rgba(15, 23, 42, 0.5)",
        borderBottom: "1px solid rgba(55, 65, 81, 0.3)",
      }}>
        <CustomSearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>

      {/* Contacts list */}
      <div style={{ 
        background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        height: "100%",
        overflowY: "auto",
      }}>
        <ConversationList>
          {filteredContacts.map((contact, index) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              isActive={selectedContactId === contact.id}
              onClick={() => setSelectedContactId(contact.id)}
              lastMessage={getLastMessage(contact.id)}
              index={index}
            />
          ))}
        </ConversationList>
      </div>
    </Sidebar>
  );
};

export default ChatSidebar;