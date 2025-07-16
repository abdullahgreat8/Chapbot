// import React, { useEffect, useRef } from "react";
// import {
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
//   Avatar,
// } from "@chatscope/chat-ui-kit-react";
// import CustomChatHeader from "./CustomChatHeader";
// import ServiceSelector from "./ServiceSelector";

// const MessagePanel = ({
//   contact,
//   messages,
//   onSend,
//   services,
//   onServiceSelect,
// }) => {
//   const messageListRef = useRef(null);

//   // Scroll to bottom when messages or services change
//   useEffect(() => {
//     if (messageListRef.current) {
//       const node = messageListRef.current;
//       node.scrollTop = node.scrollHeight;
//     }
//   }, [messages, services]);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         flexGrow: 1,
//         height: "100%",
//       }}
//     >
//       {/* Header */}
//       {contact && (
//         <CustomChatHeader
//           avatar={contact.avatar}
//           name={contact.name}
//           status="Online"
//         />
//       )}

//       <ChatContainer
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           flexGrow: 1,
//           height: "100%",
//           overflow: "hidden",
//         }}
//       >
//         {/* Scrollable area with messages and services */}
//         <MessageList
//           ref={messageListRef}
//           scrollBehavior="smooth"
//           style={{
//             flexGrow: 1,
//             padding: "20px",
//             overflowY: "auto",
//             backgroundColor: "#f9fbfd",
//             backgroundImage: `url('https://www.transparenttextures.com/patterns/clean-textile.png')`,
//             backgroundRepeat: "repeat",
//           }}
//         >
//           {/* Render all messages */}
//           {messages?.length === 0 ? (
//             <Message
//               model={{
//                 direction: "incoming",
//                 message: "Hi, how can I help you today?",
//                 position: "normal",
//               }}
//             />
//           ) : (
//             messages.map((msg, idx) => (
//               <Message
//                 key={idx}
//                 model={{
//                   direction: msg.direction,
//                   message: msg.message,
//                   position: "normal",
//                 }}
//                 style={{
//                   marginBottom: "10px",
//                   maxWidth: "75%",
//                   paddingLeft: "0px",
//                   alignSelf:
//                     msg.direction === "outgoing" ? "flex-end" : "flex-start",
//                 }}
//               >
//                 <Message.Footer
//                   sender={msg.direction === "incoming" ? contact.name : "You"}
//                   timestamp={msg.timestamp}
//                   style={{
//                     fontSize: "0.75em",
//                     opacity: 0.7,
//                     marginTop: "5px",
//                     textAlign:
//                       msg.direction === "outgoing" ? "right" : "left",
//                   }}
//                 />
//                 <Avatar
//                   src={
//                     msg.direction === "incoming"
//                       ? contact.avatar
//                       : "https://i.pravatar.cc/150?img=6"
//                   }
//                   name={
//                     msg.direction === "incoming" ? contact.name : "You"
//                   }
//                 />
//               </Message>
//             ))
//           )}

//           {/* Render services below messages if verified */}
//           {services?.length > 0 && (
//             <div style={{ marginTop: "20px" }}>
//               <ServiceSelector
//                 services={services}
//                 onSelect={onServiceSelect}
//                 avatar={contact?.avatar}
//                 contactName={contact?.name}
//               />
//             </div>
//           )}
//         </MessageList>

//         {/* Input bar */}
//         <MessageInput
//           placeholder="Type your message..."
//           onSend={onSend}
//           attachButton={false}
//           style={{
//             backgroundColor: "#ffffff",
//             borderTop: "1px solid #e0e0e0",
//             padding: "15px 20px",
//             boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.05)",
//           }}
//         />
//       </ChatContainer>
//     </div>
//   );
// };

// export default MessagePanel;


// import React, { useEffect, useRef } from "react";
// import {
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
//   Avatar,
// } from "@chatscope/chat-ui-kit-react";
// import CustomChatHeader from "./CustomChatHeader";
// import ServiceSelector from "./ServiceSelector";

// const MessagePanel = ({
//   contact,
//   messages,
//   onSend,
//   services,
//   onServiceSelect,
// }) => {
//   const messageListRef = useRef(null);

//   // Scroll to bottom when messages or services change
//   useEffect(() => {
//     if (messageListRef.current) {
//       const node = messageListRef.current;
//       node.scrollTop = node.scrollHeight;
//     }
//   }, [messages, services]);

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
//       {/* Global styles to override ChatScope defaults */}
//       <style>
//         {`
//           /* Override ChatScope default styles */
//           .cs-chat-container {
//             background: transparent !important;
//           }
          
//           .cs-message-list {
//             background: transparent !important;
//           }
          
//           .cs-message-input {
//             background: #1e293b !important;
//             border-top: 1px solid rgba(75, 85, 99, 0.3) !important;
//           }
          
//           .cs-message-input__content-editor {
//             background: rgba(30, 41, 59, 0.8) !important;
//             border: 1px solid rgba(75, 85, 99, 0.4) !important;
//             border-radius: 12px !important;
//             color: #f3f4f6 !important;
//             backdrop-filter: blur(8px) !important;
//           }
          
//           .cs-message-input__content-editor:focus {
//             border-color: #4f46e5 !important;
//             box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2) !important;
//           }
          
//           .cs-message-input__content-editor::placeholder {
//             color: #94a3b8 !important;
//           }
          
//           .cs-button--send {
//             background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%) !important;
//             border: none !important;
//             border-radius: 10px !important;
//             color: white !important;
//             transition: all 0.3s ease !important;
//             box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3) !important;
//           }
          
//           .cs-button--send:hover {
//             transform: translateY(-2px) !important;
//             box-shadow: 0 6px 16px rgba(79, 70, 229, 0.4) !important;
//           }
          
//           .cs-button--send:active {
//             transform: translateY(0) !important;
//           }
          
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

//       <ChatContainer
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
//         {/* Scrollable area with messages and services */}
//         <MessageList
//           ref={messageListRef}
//           scrollBehavior="smooth"
//           style={{
//             flexGrow: 1,
//             padding: "20px",
//             overflowY: "auto",
//             background: "transparent",
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
//               <div
//                 key={idx}
//                 style={{
//                   display: "flex",
//                   justifyContent: msg.direction === "outgoing" ? "flex-end" : "flex-start",
//                   marginBottom: "12px",
//                   animation: `slideIn 0.3s ease-out ${idx * 0.05}s both`,
//                 }}
//               >
//                 <div
//                   style={{
//                     maxWidth: "75%",
//                     background: msg.direction === "outgoing" 
//                       ? "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"
//                       : "linear-gradient(135deg, #374151 0%, #4b5563 100%)",
//                     color: "#f3f4f6",
//                     borderRadius: "16px",
//                     boxShadow: msg.direction === "outgoing"
//                       ? "0 4px 12px rgba(79, 70, 229, 0.3)"
//                       : "0 4px 12px rgba(0, 0, 0, 0.2)",
//                     border: "1px solid rgba(255, 255, 255, 0.1)",
//                     backdropFilter: "blur(8px)",
//                     padding: "12px 16px",
//                     position: "relative",
//                   }}
//                 >
//                   <div style={{ marginBottom: "8px" }}>
//                     {msg.message}
//                   </div>
//                   <div
//                     style={{
//                       fontSize: "0.75em",
//                       opacity: 0.7,
//                       color: "#cbd5e1",
//                       textAlign: msg.direction === "outgoing" ? "right" : "left",
//                     }}
//                   >
//                     {msg.direction === "incoming" ? contact.name : "You"} • {msg.timestamp}
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}

//           {/* Render services below messages if verified */}
//           {services?.length > 0 && (
//             <div style={{ marginTop: "20px" }}>
//               <ServiceSelector
//                 services={services}
//                 onSelect={onServiceSelect}
//                 avatar={contact?.avatar}
//                 contactName={contact?.name}
//               />
//             </div>
//           )}
//         </MessageList>

//         {/* Input bar */}
//         <MessageInput
//           placeholder="Type your message..."
//           onSend={onSend}
//           attachButton={false}
//           style={{
//             backgroundColor: "#1e293b",
//             borderTop: "1px solid rgba(75, 85, 99, 0.3)",
//             padding: "15px 20px",
//             boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.2)",
//           }}
//         />
//       </ChatContainer>
//     </div>
//   );
// };

// export default MessagePanel;


// import React, { useEffect, useRef } from "react";
// import {
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
//   Avatar,
// } from "@chatscope/chat-ui-kit-react";
// import CustomChatHeader from "./CustomChatHeader";
// import ServiceSelector from "./ServiceSelector";

// const MessagePanel = ({
//   contact,
//   messages,
//   onSend,
//   services,
//   onServiceSelect,
// }) => {
//   const messageListRef = useRef(null);

//   // Scroll to bottom when messages or services change
//   useEffect(() => {
//     if (messageListRef.current) {
//       const node = messageListRef.current;
//       node.scrollTop = node.scrollHeight;
//     }
//   }, [messages, services]);

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
//       {/* Global styles to override ChatScope defaults */}
//       <style>
//         {`
//           /* Override ChatScope default styles */
//           .cs-chat-container {
//             background: transparent !important;
//           }
          
//           .cs-message-list {
//             background: transparent !important;
//           }
          
//           .cs-message-input {
//             background: #1e293b !important;
//             border-top: 1px solid rgba(75, 85, 99, 0.3) !important;
//           }
          
//           .cs-message-input__content-editor {
//             background: #334155 !important;
//             border: 1px solid rgba(100, 116, 139, 0.5) !important;
//             border-radius: 24px !important;
//             color: #f1f5f9 !important;
//             padding: 12px 16px !important;
//             font-size: 14px !important;
//             min-height: 44px !important;
//             backdrop-filter: blur(8px) !important;
//           }
          
//           .cs-message-input__content-editor:focus {
//             border-color: #6366f1 !important;
//             box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2) !important;
//             outline: none !important;
//           }
          
//           .cs-message-input__content-editor::placeholder {
//             color: #94a3b8 !important;
//             opacity: 0.8 !important;
//           }
          
//           .cs-button--send {
//             background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%) !important;
//             border: none !important;
//             border-radius: 10px !important;
//             color: white !important;
//             transition: all 0.3s ease !important;
//             box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3) !important;
//           }
          
//           .cs-button--send:hover {
//             transform: translateY(-2px) !important;
//             box-shadow: 0 6px 16px rgba(79, 70, 229, 0.4) !important;
//           }
          
//           .cs-button--send:active {
//             transform: translateY(0) !important;
//           }
          
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

//       <ChatContainer
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
//         {/* Scrollable area with messages and services */}
//         <MessageList
//           ref={messageListRef}
//           scrollBehavior="smooth"
//           style={{
//             flexGrow: 1,
//             padding: "20px",
//             overflowY: "auto",
//             background: "transparent",
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
//               <div
//                 key={idx}
//                 style={{
//                   display: "flex",
//                   justifyContent: msg.direction === "outgoing" ? "flex-end" : "flex-start",
//                   marginBottom: "12px",
//                   animation: `slideIn 0.3s ease-out ${idx * 0.05}s both`,
//                 }}
//               >
//                 <div
//                   style={{
//                     maxWidth: "75%",
//                     background: msg.direction === "outgoing" 
//                       ? "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"
//                       : "linear-gradient(135deg, #374151 0%, #4b5563 100%)",
//                     color: "#f3f4f6",
//                     borderRadius: "16px",
//                     boxShadow: msg.direction === "outgoing"
//                       ? "0 4px 12px rgba(79, 70, 229, 0.3)"
//                       : "0 4px 12px rgba(0, 0, 0, 0.2)",
//                     border: "1px solid rgba(255, 255, 255, 0.1)",
//                     backdropFilter: "blur(8px)",
//                     padding: "12px 16px",
//                     position: "relative",
//                   }}
//                 >
//                   <div style={{ marginBottom: "8px" }}>
//                     {msg.message}
//                   </div>
//                   <div
//                     style={{
//                       fontSize: "0.75em",
//                       opacity: 0.7,
//                       color: "#cbd5e1",
//                       textAlign: msg.direction === "outgoing" ? "right" : "left",
//                     }}
//                   >
//                     {msg.direction === "incoming" ? contact.name : "You"} • {msg.timestamp}
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}

//           {/* Render services below messages if verified */}
//           {services?.length > 0 && (
//             <div style={{ marginTop: "20px" }}>
//               <ServiceSelector
//                 services={services}
//                 onSelect={onServiceSelect}
//                 avatar={contact?.avatar}
//                 contactName={contact?.name}
//               />
//             </div>
//           )}
//         </MessageList>

//         {/* Input bar */}
//         <MessageInput
//           placeholder="Type your message..."
//           onSend={onSend}
//           attachButton={false}
//           style={{
//             backgroundColor: "#1e293b",
//             borderTop: "1px solid rgba(75, 85, 99, 0.3)",
//             padding: "15px 20px",
//             boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.2)",
//           }}
//         />
//       </ChatContainer>
//     </div>
//   );
// };

// export default MessagePanel;


// import React, { useEffect, useRef } from "react";
// import {
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
//   Avatar,
// } from "@chatscope/chat-ui-kit-react";
// import CustomChatHeader from "./CustomChatHeader";
// import ServiceSelector from "./ServiceSelector";

// const MessagePanel = ({
//   contact,
//   messages,
//   onSend,
//   services,
//   onServiceSelect,
// }) => {
//   const messageListRef = useRef(null);

//   // Scroll to bottom when messages or services change
//   useEffect(() => {
//     if (messageListRef.current) {
//       const node = messageListRef.current;
//       node.scrollTop = node.scrollHeight;
//     }
//   }, [messages, services]);

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
//       {/* Global styles to override ChatScope defaults */}
//       <style>
//         {`
//           /* Override ChatScope default styles */
//           .cs-chat-container {
//             background: transparent !important;
//           }
          
//           .cs-message-list {
//             background: transparent !important;
//           }
          
//           .cs-message-input {
//             background: transparent !important;
//             border-top: none !important;
//           }
          
//           .cs-message-input__content-editor {
//             background: transparent !important;
//             border: 1px solid rgba(100, 116, 139, 0.3) !important;
//             border-radius: 24px !important;
//             color: #f1f5f9 !important;
//             padding: 12px 16px !important;
//             font-size: 14px !important;
//             min-height: 44px !important;
//             backdrop-filter: blur(8px) !important;
//           }
          
//           .cs-message-input__content-editor:focus {
//             border-color: #6366f1 !important;
//             box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2) !important;
//             outline: none !important;
//           }
          
//           .cs-message-input__content-editor::placeholder {
//             color: #94a3b8 !important;
//             opacity: 0.8 !important;
//           }
          
//           .cs-button--send {
//             background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%) !important;
//             border: none !important;
//             border-radius: 10px !important;
//             color: white !important;
//             transition: all 0.3s ease !important;
//             box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3) !important;
//           }
          
//           .cs-button--send:hover {
//             transform: translateY(-2px) !important;
//             box-shadow: 0 6px 16px rgba(79, 70, 229, 0.4) !important;
//           }
          
//           .cs-button--send:active {
//             transform: translateY(0) !important;
//           }
          
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

//       <ChatContainer
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
//         {/* Scrollable area with messages and services */}
//         <MessageList
//           ref={messageListRef}
//           scrollBehavior="smooth"
//           style={{
//             flexGrow: 1,
//             padding: "20px",
//             overflowY: "auto",
//             background: "transparent",
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
//               <div
//                 key={idx}
//                 style={{
//                   display: "flex",
//                   justifyContent: msg.direction === "outgoing" ? "flex-end" : "flex-start",
//                   marginBottom: "12px",
//                   animation: `slideIn 0.3s ease-out ${idx * 0.05}s both`,
//                 }}
//               >
//                 <div
//                   style={{
//                     maxWidth: "75%",
//                     background: msg.direction === "outgoing" 
//                       ? "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"
//                       : "linear-gradient(135deg, #374151 0%, #4b5563 100%)",
//                     color: "#f3f4f6",
//                     borderRadius: "16px",
//                     boxShadow: msg.direction === "outgoing"
//                       ? "0 4px 12px rgba(79, 70, 229, 0.3)"
//                       : "0 4px 12px rgba(0, 0, 0, 0.2)",
//                     border: "1px solid rgba(255, 255, 255, 0.1)",
//                     backdropFilter: "blur(8px)",
//                     padding: "12px 16px",
//                     position: "relative",
//                   }}
//                 >
//                   <div style={{ marginBottom: "8px" }}>
//                     {msg.message}
//                   </div>
//                   <div
//                     style={{
//                       fontSize: "0.75em",
//                       opacity: 0.7,
//                       color: "#cbd5e1",
//                       textAlign: msg.direction === "outgoing" ? "right" : "left",
//                     }}
//                   >
//                     {msg.direction === "incoming" ? contact.name : "You"} • {msg.timestamp}
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}

//           {/* Render services below messages if verified */}
//           {services?.length > 0 && (
//             <div style={{ marginTop: "20px" }}>
//               <ServiceSelector
//                 services={services}
//                 onSelect={onServiceSelect}
//                 avatar={contact?.avatar}
//                 contactName={contact?.name}
//               />
//             </div>
//           )}
//         </MessageList>

//         {/* Input bar */}
//         <MessageInput
//           placeholder="Type your message..."
//           onSend={onSend}
//           attachButton={false}
//           style={{
//             backgroundColor: "#1e293b",
//             borderTop: "1px solid rgba(75, 85, 99, 0.3)",
//             padding: "15px 20px",
//             boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.2)",
//           }}
//         />
//       </ChatContainer>
//     </div>
//   );
// };

// export default MessagePanel;

//Final code
import React, { useEffect, useRef, useState } from "react";
import {
  ChatContainer,
  MessageList,
  Message,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import CustomChatHeader from "./CustomChatHeader";
import ServiceSelector from "./ServiceSelector";

const MessagePanel = ({
  contact,
  messages,
  onSend,
  services,
  onServiceSelect,
}) => {
  const messageListRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  // Scroll to bottom when messages or services change
  useEffect(() => {
    if (messageListRef.current) {
      const node = messageListRef.current;
      node.scrollTop = node.scrollHeight;
    }
  }, [messages, services]);

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
      {/* Minimal CSS - only what's needed */}
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
          
          .cs-message-list::-webkit-scrollbar {
            width: 6px;
          }
          
          .cs-message-list::-webkit-scrollbar-track {
            background: rgba(30, 41, 59, 0.3);
            border-radius: 3px;
          }
          
          .cs-message-list::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #4f46e5, #7c3aed);
            border-radius: 3px;
          }
          
          .cs-message-list::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #6366f1, #8b5cf6);
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
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: msg.direction === "outgoing" ? "flex-end" : "flex-start",
                  marginBottom: "12px",
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
            ))
          )}

          {/* Render services below messages if verified */}
          {services?.length > 0 && (
            <div style={{ marginTop: "20px" }}>
              <ServiceSelector
                services={services}
                onSelect={onServiceSelect}
                avatar={contact?.avatar}
                contactName={contact?.name}
              />
            </div>
          )}
        </div>

        {/* Custom Message Input - OUTSIDE of ChatContainer */}
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



