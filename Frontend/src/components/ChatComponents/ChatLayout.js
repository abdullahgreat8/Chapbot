import React from "react";
import { MainContainer } from "@chatscope/chat-ui-kit-react";
import ChatSidebar from "./ChatSidebar";
import MessagePanel from "./MessagePanel";

const ChatLayout = ({
  contacts,
  selectedContactId,
  setSelectedContactId,
  searchTerm,
  setSearchTerm,
  messages,
  handleSend,
  handleServiceClick,
}) => {
  const selectedContact = contacts.find((c) => c.id === selectedContactId);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        position: "relative",
      }}
    >
      {/* Animated background elements */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)
        `,
        animation: "float 6s ease-in-out infinite",
      }} />
      
      <div
        style={{
          height: "92%",
          width: "92%",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)",
          display: "flex",
          backgroundColor: "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Subtle inner glow */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "20px",
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)",
          pointerEvents: "none",
        }} />

        <MainContainer responsive style={{ display: "flex", flexGrow: 1, position: "relative", zIndex: 2 }}>
          <ChatSidebar
            contacts={contacts}
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
            messages={messages}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <MessagePanel
            contact={selectedContact}
            messages={messages[selectedContactId] || []}
            onSend={handleSend}
            onServiceSelect={handleServiceClick}
          />
        </MainContainer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default ChatLayout;


