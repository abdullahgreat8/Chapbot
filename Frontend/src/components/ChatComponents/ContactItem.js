// // import React from "react";
// // import { Conversation, Avatar } from "@chatscope/chat-ui-kit-react";

// // const ContactItem = ({ contact, isActive, onClick, lastMessage }) => (
// //   <Conversation
// //     name={contact.name}
// //     info={lastMessage.text}
// //     lastActivityTime={lastMessage.timestamp}
// //     active={isActive}
// //     onClick={onClick}
// //     style={{
// //       backgroundColor: isActive ? "#e6f2ff" : "transparent",
// //       color: "#333",
// //       cursor: "pointer",
// //       padding: "12px 15px",
// //       borderBottom: "1px solid #eee",
// //     }}
// //   >
// //     <Avatar src={contact.avatar} name={contact.name} />
// //   </Conversation>
// // );

// // export default ContactItem;



// import React from "react";
// import { Conversation, Avatar } from "@chatscope/chat-ui-kit-react";

// const ContactItem = ({ contact, isActive, onClick, lastMessage, index }) => (
//   <div
//     style={{
//       position: "relative",
//       animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
//     }}
//   >
//     <Conversation
//       name={contact.name}
//       info={lastMessage.text}
//       lastActivityTime={lastMessage.timestamp}
//       active={isActive}
//       onClick={onClick}
//       style={{
//         backgroundColor: isActive 
//           ? "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)"
//           : "transparent",
//         color: isActive ? "#e2e8f0" : "#94a3b8",
//         cursor: "pointer",
//         padding: "16px 20px",
//         borderBottom: "1px solid rgba(71, 85, 105, 0.2)",
//         transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//         position: "relative",
//         overflow: "hidden",
//         "&:hover": {
//           backgroundColor: "rgba(71, 85, 105, 0.1)",
//           transform: "translateX(4px)",
//         }
//       }}
//       className="contact-item"
//     >
//       <Avatar 
//         src={contact.avatar} 
//         name={contact.name}
//         style={{
//           border: isActive ? "2px solid #6366f1" : "2px solid transparent",
//           transition: "all 0.3s ease",
//           boxShadow: isActive ? "0 0 20px rgba(99, 102, 241, 0.5)" : "0 4px 12px rgba(0, 0, 0, 0.3)",
//         }}
//       />
      
//       {/* Subtle highlight effect */}
//       {isActive && (
//         <div style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: "linear-gradient(90deg, rgba(99, 102, 241, 0.1) 0%, transparent 100%)",
//           pointerEvents: "none",
//         }} />
//       )}
//     </Conversation>
    
//     <style jsx>{`
//       @keyframes fadeInUp {
//         from {
//           opacity: 0;
//           transform: translateY(20px);
//         }
//         to {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       }
      
//       .contact-item:hover {
//         background: rgba(71, 85, 105, 0.15) !important;
//         transform: translateX(4px);
//       }
//     `}</style>
//   </div>
// );

// export default ContactItem;



// import React from "react";
// import { Conversation, Avatar } from "@chatscope/chat-ui-kit-react";

// const ContactItem = ({ contact, isActive, onClick, lastMessage, index }) => (
//   <div
//     style={{
//       position: "relative",
//       animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
//     }}
//   >
//     <Conversation
//       name={contact.name}
//       info={lastMessage.text}
//       lastActivityTime={lastMessage.timestamp}
//       active={isActive}
//       onClick={onClick}
//       style={{
//         backgroundColor: isActive 
//           ? "linear-gradient(135deg, rgba(29, 78, 216, 0.4) 0%, rgba(30, 64, 175, 0.4) 100%)"
//           : "transparent",
//         color: "#ffffff",
//         cursor: "pointer",
//         padding: "16px 20px",
//         borderBottom: "1px solid rgba(71, 85, 105, 0.2)",
//         transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//         position: "relative",
//         overflow: "hidden",
//         "--cs-conversation-content-color": "#ffffff",
//         "--cs-conversation-info-color": "#cbd5e1",
//         "--cs-conversation-last-activity-time-color": "#ffffff",
//         "&:hover": {
//           backgroundColor: "rgba(71, 85, 105, 0.1)",
//           transform: "translateX(4px)",
//         }
//       }}
//       className="contact-item"
//     >
//       <Avatar 
//         src={contact.avatar} 
//         name={contact.name}
//         style={{
//           border: isActive ? "2px solid #1d4ed8" : "2px solid transparent",
//           transition: "all 0.3s ease",
//           boxShadow: isActive ? "0 0 20px rgba(29, 78, 216, 0.6)" : "0 4px 12px rgba(0, 0, 0, 0.3)",
//         }}
//       />
      
//       {/* Subtle highlight effect */}
//       {isActive && (
//         <div style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: "linear-gradient(90deg, rgba(29, 78, 216, 0.2) 0%, transparent 100%)",
//           pointerEvents: "none",
//         }} />
//       )}
//     </Conversation>
    
//     <style jsx>{`
//       @keyframes fadeInUp {
//         from {
//           opacity: 0;
//           transform: translateY(20px);
//         }
//         to {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       }
      
//       .contact-item:hover {
//         background: rgba(71, 85, 105, 0.15) !important;
//         transform: translateX(4px);
//       }
      
//       .contact-item :global(.cs-conversation__content) {
//         color: #ffffff !important;
//       }
      
//       .contact-item :global(.cs-conversation__info) {
//         color: #cbd5e1 !important;
//       }
      
//       .contact-item :global(.cs-conversation__last-activity-time) {
//         color: #ffffff !important;
//       }
      
//       .contact-item :global(.cs-conversation__content-wrapper) {
//         color: #ffffff !important;
//       }
      
//       .contact-item :global(.cs-conversation__content-wrapper *) {
//         color: #ffffff !important;
//       }
//     `}</style>
//   </div>
// );

// export default ContactItem;



import React from "react";
import { Conversation, Avatar } from "@chatscope/chat-ui-kit-react";

const ContactItem = ({ contact, isActive, onClick, lastMessage, index }) => (
  <>
    <style>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .contact-item:hover {
        background: rgba(71, 85, 105, 0.15) !important;
        transform: translateX(4px);
      }
      
      .contact-item .cs-conversation__content {
        color: #ffffff !important;
      }
      
      .contact-item .cs-conversation__info {
        color: #cbd5e1 !important;
      }
      
      .contact-item .cs-conversation__last-activity-time {
        color: #ffffff !important;
      }
      
      .contact-item .cs-conversation__content-wrapper {
        color: #ffffff !important;
      }
      
      .contact-item .cs-conversation__content-wrapper * {
        color: #ffffff !important;
      }
      
      .contact-item .cs-conversation {
        color: #ffffff !important;
      }
      
      .contact-item .cs-conversation * {
        color: #ffffff !important;
      }
      
      .contact-item .cs-conversation__info {
        color: #cbd5e1 !important;
      }
    `}</style>
    
    <div
      style={{
        position: "relative",
        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
      }}
    >
      <div
        style={{
          backgroundColor: isActive 
            ? "linear-gradient(135deg, rgba(29, 78, 216, 0.4) 0%, rgba(30, 64, 175, 0.4) 100%)"
            : "transparent",
          color: "#ffffff",
          cursor: "pointer",
          padding: "16px 20px",
          borderBottom: "1px solid rgba(71, 85, 105, 0.2)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "relative",
          overflow: "hidden",
        }}
        className="contact-item"
        onClick={onClick}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Avatar 
            src={contact.avatar} 
            name={contact.name}
            style={{
              border: isActive ? "2px solid #1d4ed8" : "2px solid transparent",
              transition: "all 0.3s ease",
              boxShadow: isActive ? "0 0 20px rgba(29, 78, 216, 0.6)" : "0 4px 12px rgba(0, 0, 0, 0.3)",
            }}
          />
          
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ 
              color: "#ffffff", 
              fontSize: "16px", 
              fontWeight: "500",
              marginBottom: "4px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}>
              {contact.name}
            </div>
            <div style={{ 
              color: "#cbd5e1", 
              fontSize: "14px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}>
              {lastMessage.text}
            </div>
          </div>
          
          <div style={{ 
            color: "#ffffff", 
            fontSize: "12px",
            whiteSpace: "nowrap"
          }}>
            {lastMessage.timestamp}
          </div>
        </div>
        
        {/* Subtle highlight effect */}
        {isActive && (
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(90deg, rgba(29, 78, 216, 0.2) 0%, transparent 100%)",
            pointerEvents: "none",
          }} />
        )}
      </div>
    </div>
  </>
);

export default ContactItem;