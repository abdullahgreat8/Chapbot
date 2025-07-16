// import React, { useEffect, useRef, useState } from "react";
// import CustomChatHeader from "./CustomChatHeader";
// import ServiceSelector from "./ServiceSelector";

// const MessagePanel = ({
//   contact,
//   messages,
//   onSend,
//   onServiceSelect,
// }) => {
//   const messageListRef = useRef(null);
//   const [inputValue, setInputValue] = useState("");

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     if (messageListRef.current) {
//       const node = messageListRef.current;
//       node.scrollTop = node.scrollHeight;
//     }
//   }, [messages]);

//   const handleSend = () => {
//     if (inputValue.trim() && onSend) {
//       onSend(inputValue);
//       setInputValue("");
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         flexGrow: 1,
//         height: "100%",
//         background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Minimal CSS - only what's needed */}
//       <style>
//         {`
//           .cs-message {
//             background: transparent !important;
//             border: none !important;
//             margin-bottom: 12px !important;
//           }
          
//           .cs-message__content {
//             background: transparent !important;
//             border: none !important;
//             border-radius: 16px !important;
//             overflow: hidden !important;
//           }
          
//           .cs-message__content-wrapper {
//             background: transparent !important;
//             border: none !important;
//           }
          
//           .cs-message-list::-webkit-scrollbar {
//             width: 6px;
//           }
          
//           .cs-message-list::-webkit-scrollbar-track {
//             background: rgba(30, 41, 59, 0.3);
//             border-radius: 3px;
//           }
          
//           .cs-message-list::-webkit-scrollbar-thumb {
//             background: linear-gradient(to bottom, #4f46e5, #7c3aed);
//             border-radius: 3px;
//           }
          
//           .cs-message-list::-webkit-scrollbar-thumb:hover {
//             background: linear-gradient(to bottom, #6366f1, #8b5cf6);
//           }
          
//           @keyframes slideIn {
//             from {
//               opacity: 0;
//               transform: translateY(15px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
          
//           @keyframes pulse {
//             0%, 100% { transform: scale(1); opacity: 1; }
//             50% { transform: scale(1.05); opacity: 0.8; }
//           }
//         `}
//       </style>

//       {/* Animated background particles */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: `
//             radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
//             radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
//             radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)
//           `,
//           pointerEvents: "none",
//           zIndex: 0,
//         }}
//       />

//       {/* Header */}
//       {contact && (
//         <CustomChatHeader
//           avatar={contact.avatar}
//           name={contact.name}
//           status="Online"
//         />
//       )}

//       {/* Messages Container */}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           flexGrow: 1,
//           height: "100%",
//           overflow: "hidden",
//           position: "relative",
//           zIndex: 1,
//           background: "transparent",
//         }}
//       >
//         {/* Scrollable Messages Area */}
//         <div
//           ref={messageListRef}
//           style={{
//             flexGrow: 1,
//             padding: "20px",
//             overflowY: "auto",
//             background: "transparent",
//             scrollBehavior: "smooth",
//           }}
//         >
//           {/* Render all messages */}
//           {messages?.length === 0 ? (
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 minHeight: "200px",
//                 flexDirection: "column",
//                 gap: "20px",
//               }}
//             >
//               <div
//                 style={{
//                   width: "60px",
//                   height: "60px",
//                   borderRadius: "50%",
//                   background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   boxShadow: "0 8px 25px rgba(79, 70, 229, 0.3)",
//                   animation: "pulse 2s infinite",
//                 }}
//               >
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="white"
//                   strokeWidth="2"
//                 >
//                   <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
//                 </svg>
//               </div>
//               <div
//                 style={{
//                   background: "linear-gradient(135deg, #374151 0%, #4b5563 100%)",
//                   border: "1px solid rgba(75, 85, 99, 0.3)",
//                   borderRadius: "16px",
//                   color: "#f3f4f6",
//                   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
//                   backdropFilter: "blur(8px)",
//                   padding: "12px 16px",
//                   maxWidth: "75%",
//                 }}
//               >
//                 Hi, how can I help you today?
//               </div>
//             </div>
//           ) : (
//             messages.map((msg, idx) => (
//               <div key={idx} style={{ marginBottom: "16px" }}>
//                 {msg.type === "message" ? (
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: msg.direction === "outgoing" ? "flex-end" : "flex-start",
//                       animation: `slideIn 0.3s ease-out ${idx * 0.05}s both`,
//                     }}
//                   >
//                     <div
//                       style={{
//                         maxWidth: "75%",
//                         background: msg.direction === "outgoing" 
//                           ? "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"
//                           : "linear-gradient(135deg, #374151 0%, #4b5563 100%)",
//                         color: "#f3f4f6",
//                         borderRadius: "16px",
//                         boxShadow: msg.direction === "outgoing"
//                           ? "0 4px 12px rgba(79, 70, 229, 0.3)"
//                           : "0 4px 12px rgba(0, 0, 0, 0.2)",
//                         border: "1px solid rgba(255, 255, 255, 0.1)",
//                         backdropFilter: "blur(8px)",
//                         padding: "12px 16px",
//                         position: "relative",
//                       }}
//                     >
//                       <div style={{ marginBottom: "8px" }}>
//                         {msg.message}
//                       </div>
//                       <div
//                         style={{
//                           fontSize: "0.75em",
//                           opacity: 0.7,
//                           color: "#cbd5e1",
//                           textAlign: msg.direction === "outgoing" ? "right" : "left",
//                         }}
//                       >
//                         {msg.direction === "incoming" ? contact.name : "You"} • {msg.timestamp}
//                       </div>
//                     </div>
//                   </div>
//                 ) : msg.type === "services" ? (
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "flex-start",
//                       animation: `slideIn 0.3s ease-out ${idx * 0.05}s both`,
//                     }}
//                   >
//                     <ServiceSelector
//                       services={msg.services}
//                       onSelect={onServiceSelect}
//                       avatar={contact?.avatar}
//                       contactName={contact?.name}
//                     />
//                   </div>
//                 ) : null}
//               </div>
//             ))
//           )}
//         </div>

//         {/* Custom Message Input */}
//         <div
//           style={{
//             backgroundColor: "#1e293b",
//             borderTop: "1px solid rgba(75, 85, 99, 0.3)",
//             padding: "20px",
//             boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.2)",
//             position: "relative",
//             zIndex: 999,
//             flexShrink: 0,
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               alignItems: "flex-end",
//               gap: "12px",
//               width: "100%",
//             }}
//           >
//             <div
//               style={{
//                 flexGrow: 1,
//                 position: "relative",
//               }}
//             >
//               <textarea
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Type your message..."
//                 style={{
//                   width: "100%",
//                   minHeight: "44px",
//                   maxHeight: "120px",
//                   padding: "12px 16px",
//                   backgroundColor: "#334155",
//                   border: "1px solid rgba(100, 116, 139, 0.4)",
//                   borderRadius: "20px",
//                   color: "#f1f5f9",
//                   fontSize: "14px",
//                   fontFamily: "inherit",
//                   resize: "none",
//                   outline: "none",
//                   transition: "all 0.3s ease",
//                   backdropFilter: "blur(8px)",
//                   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//                   boxSizing: "border-box",
//                 }}
//                 onFocus={(e) => {
//                   e.target.style.borderColor = "#6366f1";
//                   e.target.style.boxShadow = "0 0 0 3px rgba(99, 102, 241, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15)";
//                 }}
//                 onBlur={(e) => {
//                   e.target.style.borderColor = "rgba(100, 116, 139, 0.4)";
//                   e.target.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
//                 }}
//               />
//             </div>
//             <button
//               onClick={handleSend}
//               disabled={!inputValue.trim()}
//               style={{
//                 width: "44px",
//                 height: "44px",
//                 borderRadius: "50%",
//                 border: "none",
//                 background: inputValue.trim() 
//                   ? "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"
//                   : "rgba(100, 116, 139, 0.3)",
//                 color: "white",
//                 cursor: inputValue.trim() ? "pointer" : "not-allowed",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 transition: "all 0.3s ease",
//                 boxShadow: inputValue.trim() 
//                   ? "0 4px 12px rgba(79, 70, 229, 0.3)"
//                   : "none",
//                 transform: "translateY(0)",
//                 flexShrink: 0,
//               }}
//               onMouseEnter={(e) => {
//                 if (inputValue.trim()) {
//                   e.target.style.transform = "translateY(-2px)";
//                   e.target.style.boxShadow = "0 6px 16px rgba(79, 70, 229, 0.4)";
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = "translateY(0)";
//                 e.target.style.boxShadow = inputValue.trim() 
//                   ? "0 4px 12px rgba(79, 70, 229, 0.3)"
//                   : "none";
//               }}
//               onMouseDown={(e) => {
//                 if (inputValue.trim()) {
//                   e.target.style.transform = "translateY(0)";
//                 }
//               }}
//             >
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 style={{
//                   transition: "transform 0.2s ease",
//                 }}
//               >
//                 <path d="M22 2L11 13" />
//                 <path d="M22 2L15 22L11 13L2 9L22 2Z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MessagePanel;


import React, { useEffect, useRef, useState } from "react";
import CustomChatHeader from "./CustomChatHeader";
import ServiceSelector from "./ServiceSelector";

const MessagePanel = ({
  contact,
  messages,
  onSend,
  onServiceSelect,
}) => {
  const messageListRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messageListRef.current) {
      const node = messageListRef.current;
      node.scrollTop = node.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim() && onSend) {
      onSend(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        height: "100%",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Enhanced CSS with beautiful scrollbar */}
      <style>
        {`
          .cs-message {
            background: transparent !important;
            border: none !important;
            margin-bottom: 12px !important;
          }
          
          .cs-message__content {
            background: transparent !important;
            border: none !important;
            border-radius: 16px !important;
            overflow: hidden !important;
          }
          
          .cs-message__content-wrapper {
            background: transparent !important;
            border: none !important;
          }
          
          /* Beautiful Custom Scrollbar */
          .cs-message-list::-webkit-scrollbar {
            width: 10px;
          }
          
          .cs-message-list::-webkit-scrollbar-track {
            background: rgba(15, 23, 42, 0.4);
            border-radius: 12px;
            border: 1px solid rgba(30, 41, 59, 0.3);
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
          }
          
          .cs-message-list::-webkit-scrollbar-thumb {
            background: linear-gradient(
              45deg,
              #4f46e5 0%,
              #7c3aed 35%,
              #ec4899 70%,
              #06b6d4 100%
            );
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 
              0 2px 8px rgba(79, 70, 229, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
            position: relative;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .cs-message-list::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(
              45deg,
              #6366f1 0%,
              #8b5cf6 35%,
              #f472b6 70%,
              #22d3ee 100%
            );
            box-shadow: 
              0 4px 16px rgba(79, 70, 229, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
            transform: scaleY(1.1);
          }
          
          .cs-message-list::-webkit-scrollbar-thumb:active {
            background: linear-gradient(
              45deg,
              #4338ca 0%,
              #7c2d12 35%,
              #be185d 70%,
              #0891b2 100%
            );
            box-shadow: 
              0 2px 8px rgba(79, 70, 229, 0.5),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
            transform: scaleY(0.95);
          }
          
          .cs-message-list::-webkit-scrollbar-corner {
            background: transparent;
          }
          
          /* Scrollbar with glowing effect */
          .cs-message-list::-webkit-scrollbar-thumb::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, 
              rgba(79, 70, 229, 0.3) 0%,
              rgba(124, 58, 237, 0.3) 50%,
              rgba(236, 72, 153, 0.3) 100%
            );
            border-radius: 12px;
            filter: blur(2px);
            z-index: -1;
          }
          
          /* Firefox scrollbar */
          .cs-message-list {
            scrollbar-width: thin;
            scrollbar-color: #4f46e5 rgba(15, 23, 42, 0.4);
          }
          
          /* Webkit scrollbar animation */
          @keyframes scrollbarGlow {
            0% {
              box-shadow: 
                0 2px 8px rgba(79, 70, 229, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
            }
            50% {
              box-shadow: 
                0 4px 16px rgba(79, 70, 229, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
            }
            100% {
              box-shadow: 
                0 2px 8px rgba(79, 70, 229, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
            }
          }
          
          .cs-message-list:hover::-webkit-scrollbar-thumb {
            animation: scrollbarGlow 2s ease-in-out infinite;
          }
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
          }
        `}
      </style>

      {/* Animated background particles */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)
          `,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Header */}
      {contact && (
        <CustomChatHeader
          avatar={contact.avatar}
          name={contact.name}
          status="Online"
        />
      )}

      {/* Messages Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          height: "100%",
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
          background: "transparent",
        }}
      >
        {/* Scrollable Messages Area */}
        <div
          ref={messageListRef}
          className="cs-message-list"
          style={{
            flexGrow: 1,
            padding: "20px",
            overflowY: "auto",
            background: "transparent",
            scrollBehavior: "smooth",
          }}
        >
          {/* Render all messages */}
          {messages?.length === 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "200px",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 25px rgba(79, 70, 229, 0.3)",
                  animation: "pulse 2s infinite",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div
                style={{
                  background: "linear-gradient(135deg, #374151 0%, #4b5563 100%)",
                  border: "1px solid rgba(75, 85, 99, 0.3)",
                  borderRadius: "16px",
                  color: "#f3f4f6",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(8px)",
                  padding: "12px 16px",
                  maxWidth: "75%",
                }}
              >
                Hi, how can I help you today?
              </div>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div key={idx} style={{ marginBottom: "16px" }}>
                {msg.type === "message" ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: msg.direction === "outgoing" ? "flex-end" : "flex-start",
                      animation: `slideIn 0.3s ease-out ${idx * 0.05}s both`,
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "75%",
                        background: msg.direction === "outgoing" 
                          ? "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"
                          : "linear-gradient(135deg, #374151 0%, #4b5563 100%)",
                        color: "#f3f4f6",
                        borderRadius: "16px",
                        boxShadow: msg.direction === "outgoing"
                          ? "0 4px 12px rgba(79, 70, 229, 0.3)"
                          : "0 4px 12px rgba(0, 0, 0, 0.2)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(8px)",
                        padding: "12px 16px",
                        position: "relative",
                      }}
                    >
                      <div style={{ marginBottom: "8px" }}>
                        {msg.message}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75em",
                          opacity: 0.7,
                          color: "#cbd5e1",
                          textAlign: msg.direction === "outgoing" ? "right" : "left",
                        }}
                      >
                        {msg.direction === "incoming" ? contact.name : "You"} • {msg.timestamp}
                      </div>
                    </div>
                  </div>
                ) : msg.type === "services" ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      animation: `slideIn 0.3s ease-out ${idx * 0.05}s both`,
                    }}
                  >
                    <ServiceSelector
                      services={msg.services}
                      onSelect={onServiceSelect}
                      avatar={contact?.avatar}
                      contactName={contact?.name}
                    />
                  </div>
                ) : null}
              </div>
            ))
          )}
        </div>

        {/* Custom Message Input */}
        <div
          style={{
            backgroundColor: "#1e293b",
            borderTop: "1px solid rgba(75, 85, 99, 0.3)",
            padding: "20px",
            boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.2)",
            position: "relative",
            zIndex: 999,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "12px",
              width: "100%",
            }}
          >
            <div
              style={{
                flexGrow: 1,
                position: "relative",
              }}
            >
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                style={{
                  width: "100%",
                  minHeight: "44px",
                  maxHeight: "120px",
                  padding: "12px 16px",
                  backgroundColor: "#334155",
                  border: "1px solid rgba(100, 116, 139, 0.4)",
                  borderRadius: "20px",
                  color: "#f1f5f9",
                  fontSize: "14px",
                  fontFamily: "inherit",
                  resize: "none",
                  outline: "none",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#6366f1";
                  e.target.style.boxShadow = "0 0 0 3px rgba(99, 102, 241, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(100, 116, 139, 0.4)";
                  e.target.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
                }}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "none",
                background: inputValue.trim() 
                  ? "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"
                  : "rgba(100, 116, 139, 0.3)",
                color: "white",
                cursor: inputValue.trim() ? "pointer" : "not-allowed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                boxShadow: inputValue.trim() 
                  ? "0 4px 12px rgba(79, 70, 229, 0.3)"
                  : "none",
                transform: "translateY(0)",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                if (inputValue.trim()) {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 16px rgba(79, 70, 229, 0.4)";
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = inputValue.trim() 
                  ? "0 4px 12px rgba(79, 70, 229, 0.3)"
                  : "none";
              }}
              onMouseDown={(e) => {
                if (inputValue.trim()) {
                  e.target.style.transform = "translateY(0)";
                }
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  transition: "transform 0.2s ease",
                }}
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePanel;
