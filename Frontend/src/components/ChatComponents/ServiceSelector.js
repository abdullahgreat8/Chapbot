// // === components/ServiceSelector.js ===
// import React from "react";

// const ServiceSelector = ({ services, onSelect, avatar, contactName }) => {
//   return (
//     <div
//       style={{
        
//         display: "flex",
//         gap: "10px",
//         alignItems: "flex-start",
//       }}
//     >
//       {/* Avatar */}
//       <img
//         src={avatar}
//         alt={contactName}
//         style={{
//           width: "40px",
//           height: "40px",
//           borderRadius: "50%",
//           objectFit: "cover",
//           // Adjust this margin-top to align the avatar with the "Select a Service" text
//           // This value might need slight tweaking based on font sizes and line heights
//           marginTop: "0px", // Changed from 5px to 0px for better alignment
//         }}
//       />

//       {/* Service Buttons */}
//       <div>
//         <div
//           style={{
//             fontWeight: "600",
//             fontSize: "16px",
//             marginBottom: "10px",
//             color: "#333",
//             // You might need to add a line-height here if the text still looks off-center
//             // For example: lineHeight: "40px" (if the avatar height is 40px)
//           }}
//         >
//           Select a Service
//         </div>

//         <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//           {services.map((service, index) => (
//   <button
//     key={index}
//     onClick={() => onSelect(service)} // Pass full service object
//     style={{
//       backgroundColor: "#1e3a8a",
//       color: "white",
//       border: "none",
//       borderRadius: "10px",
//       padding: "10px 15px",
//       cursor: "pointer",
//       fontSize: "14px",
//       textAlign: "left",
//       width: "200px",
//     }}
//   >
//     {service.name}
//   </button>
// ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceSelector;


// import React from "react";

// const ServiceSelector = ({ services, onSelect, avatar, contactName }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         gap: "16px",
//         alignItems: "flex-start",
//         padding: "20px",
//         background: "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)",
//         borderRadius: "18px",
//         border: "1px solid rgba(59, 130, 246, 0.2)",
//         backdropFilter: "blur(15px)",
//         boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Subtle animated background gradient */}
//       <div style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         background: `
//           radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
//           radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
//         `,
//         animation: "pulse 4s ease-in-out infinite",
//         pointerEvents: "none",
//       }} />

//       {/* Avatar with enhanced styling */}
//       <div style={{
//         position: "relative",
//         zIndex: 2,
//         flexShrink: 0,
//       }}>
//         <img
//           src={avatar}
//           alt={contactName}
//           style={{
//             width: "48px",
//             height: "48px",
//             borderRadius: "50%",
//             objectFit: "cover",
//             border: "2px solid rgba(59, 130, 246, 0.4)",
//             boxShadow: "0 4px 16px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
//             transition: "all 0.3s ease",
//           }}
//         />
//         {/* Online indicator */}
//         <div style={{
//           position: "absolute",
//           bottom: "2px",
//           right: "2px",
//           width: "12px",
//           height: "12px",
//           backgroundColor: "#10b981",
//           borderRadius: "50%",
//           border: "2px solid rgba(15, 23, 42, 0.8)",
//           boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)",
//           animation: "pulse 2s ease-in-out infinite",
//         }} />
//       </div>

//       {/* Service Buttons Container */}
//       <div style={{ 
//         flex: 1,
//         position: "relative",
//         zIndex: 2,
//       }}>
//         {/* Header */}
//         <div
//           style={{
//             fontWeight: "600",
//             fontSize: "16px",
//             marginBottom: "16px",
//             color: "#e2e8f0",
//             textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
//             display: "flex",
//             alignItems: "center",
//             gap: "8px",
//           }}
//         >
//           <span style={{
//             fontSize: "20px",
//             filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
//           }}>⚡</span>
//           Select a Service
//         </div>

//         {/* Service Buttons Grid */}
//         <div style={{ 
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//           gap: "12px",
//           maxWidth: "300px",
//         }}>
//           {services.map((service, index) => (
//             <button
//               key={index}
//               onClick={() => onSelect(service)}
//               style={{
//                 background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
//                 color: "white",
//                 border: "1px solid rgba(59, 130, 246, 0.3)",
//                 borderRadius: "12px",
//                 padding: "14px 18px",
//                 cursor: "pointer",
//                 fontSize: "14px",
//                 fontWeight: "500",
//                 textAlign: "left",
//                 transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                 position: "relative",
//                 overflow: "hidden",
//                 boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)",
//                 backdropFilter: "blur(10px)",
//                 animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
//                 minHeight: "52px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = "translateY(-2px) scale(1.02)";
//                 e.target.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.4)";
//                 e.target.style.background = "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = "translateY(0) scale(1)";
//                 e.target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.2)";
//                 e.target.style.background = "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)";
//               }}
//               onMouseDown={(e) => {
//                 e.target.style.transform = "translateY(0) scale(0.98)";
//               }}
//               onMouseUp={(e) => {
//                 e.target.style.transform = "translateY(-2px) scale(1.02)";
//               }}
//             >
//               {/* Button ripple effect overlay */}
//               <div style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)",
//                 pointerEvents: "none",
//               }} />
              
//               <span style={{ position: "relative", zIndex: 1 }}>
//                 {service.name}
//               </span>
              
//               {/* Arrow indicator */}
//               <span style={{
//                 position: "relative",
//                 zIndex: 1,
//                 fontSize: "16px",
//                 opacity: 0.8,
//                 transition: "all 0.3s ease",
//               }}>
//                 →
//               </span>
//             </button>
//           ))}
//         </div>

//         {/* Services count indicator */}
//         <div style={{
//           marginTop: "16px",
//           fontSize: "12px",
//           color: "#94a3b8",
//           display: "flex",
//           alignItems: "center",
//           gap: "6px",
//         }}>
//           <div style={{
//             width: "6px",
//             height: "6px",
//             backgroundColor: "#10b981",
//             borderRadius: "50%",
//             boxShadow: "0 0 6px rgba(16, 185, 129, 0.6)",
//           }} />
//           {services.length} service{services.length !== 1 ? 's' : ''} available
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.8;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ServiceSelector;



//Final code
import React from "react";

const ServiceSelector = ({ services, onSelect, avatar, contactName }) => {
  return (
    // 🔽 Added wrapper to limit the width and center the component
    <div style={{
      maxWidth: "590px", // You can adjust this value to fit your design
      margin: "0 ",  // Center horizontally
    }}>
      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "flex-start",
          padding: "20px",
          background: "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)",
          borderRadius: "18px",
          border: "1px solid rgba(59, 130, 246, 0.2)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle animated background gradient */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
          `,
          animation: "pulse 4s ease-in-out infinite",
          pointerEvents: "none",
        }} />

        {/* Avatar Section */}
        <div style={{
          position: "relative",
          zIndex: 2,
          flexShrink: 0,
        }}>
          <img
            src={avatar}
            alt={contactName}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid rgba(59, 130, 246, 0.4)",
              boxShadow: "0 4px 16px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              transition: "all 0.3s ease",
            }}
          />
          {/* Online indicator */}
          <div style={{
            position: "absolute",
            bottom: "2px",
            right: "2px",
            width: "12px",
            height: "12px",
            backgroundColor: "#10b981",
            borderRadius: "50%",
            border: "2px solid rgba(15, 23, 42, 0.8)",
            boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)",
            animation: "pulse 2s ease-in-out infinite",
          }} />
        </div>

        {/* Services Section */}
        <div style={{
          flex: 1,
          position: "relative",
          zIndex: 2,
        }}>
          <div style={{
            fontWeight: "600",
            fontSize: "16px",
            marginBottom: "16px",
            color: "#e2e8f0",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}>
            <span style={{
              fontSize: "20px",
              filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
            }}>⚡</span>
            Select a Service
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "12px",
            maxWidth: "400px",
          }}>
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => onSelect(service)}
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                  color: "white",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  borderRadius: "12px",
                  padding: "14px 18px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "500",
                  textAlign: "left",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)",
                  backdropFilter: "blur(10px)",
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                  minHeight: "52px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px) scale(1.02)";
                  e.target.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.4)";
                  e.target.style.background = "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.2)";
                  e.target.style.background = "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)";
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = "translateY(0) scale(0.98)";
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = "translateY(-2px) scale(1.02)";
                }}
              >
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)",
                  pointerEvents: "none",
                }} />

                <span style={{ position: "relative", zIndex: 1 }}>
                  {service.name}
                </span>

                <span style={{
                  position: "relative",
                  zIndex: 1,
                  fontSize: "16px",
                  opacity: 0.8,
                  transition: "all 0.3s ease",
                }}>
                  →
                </span>
              </button>
            ))}
          </div>

          <div style={{
            marginTop: "16px",
            fontSize: "12px",
            color: "#94a3b8",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}>
            <div style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#10b981",
              borderRadius: "50%",
              boxShadow: "0 0 6px rgba(16, 185, 129, 0.6)",
            }} />
            {services.length} service{services.length !== 1 ? 's' : ''} available
          </div>
        </div>

        <style jsx>{`
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

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.8;
            }
          }
        `}</style>
      </div>
    </div> // 🔼 End of wrapper with reduced width
  );
};

export default ServiceSelector;





