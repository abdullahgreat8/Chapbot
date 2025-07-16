// import React, { useState } from "react";
// import { LogOut, MoreVertical, Settings, User } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const CustomChatHeader = ({ avatar, name, status }) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     navigate("/login");
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Close dropdown when clicking outside
//   React.useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownOpen && !event.target.closest('.dropdown-container')) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [dropdownOpen]);

//   return (
//     <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shadow-sm" style={{ backgroundColor: 'rgb(240, 242, 245)' }}>
//       {/* User Avatar and Info */}
//       <div className="flex items-center flex-1">
//         <div className="relative mr-3">
//           <img
//             src={avatar || "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"}
//             alt={name}
//             className="w-11 h-11 rounded-full object-cover border-2 border-gray-200"
//           />
//           {/* Online status indicator */}
//           <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
//         </div>
        
//         <div>
//           <div className="font-semibold text-gray-900 text-base leading-tight">
//             {name || "Alice"}
//           </div>
//           <div className="flex items-center gap-1 text-sm text-gray-600">
//             <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
//             {status || "Online"}
//           </div>
//         </div>
//       </div>

//       {/* Actions Menu */}
//       <div className="dropdown-container relative">
//         <button
//           onClick={toggleDropdown}
//           className="flex items-center justify-center w-9 h-9 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
//         >
//           <MoreVertical size={20} />
//         </button>

//         {/* Dropdown Menu */}
//         {dropdownOpen && (
//           <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg min-w-44 z-50 overflow-hidden">
//             <div className="py-2">
//               <button
//                 onClick={() => {
//                   setDropdownOpen(false);
//                   // Handle profile action
//                 }}
//                 className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 text-sm text-gray-700 transition-colors"
//               >
//                 <User size={16} />
//                 Profile
//               </button>
              
//               <button
//                 onClick={() => {
//                   setDropdownOpen(false);
//                   // Handle settings action
//                 }}
//                 className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 text-sm text-gray-700 transition-colors"
//               >
//                 <Settings size={16} />
//                 Settings
//               </button>

//               <div className="h-px bg-gray-200 my-2"></div>

//               <button
//                 onClick={() => {
//                   setDropdownOpen(false);
//                   handleLogout();
//                 }}
//                 className="w-full px-4 py-3 text-left hover:bg-red-50 flex items-center gap-3 text-sm text-red-600 transition-colors"
//               >
//                 <LogOut size={16} />
//                 Logout
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomChatHeader;

// import React, { useState } from "react";
// import { LogOut, MoreVertical, Settings, User } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const CustomChatHeader = ({ avatar, name, status }) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     navigate("/login");
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Close dropdown when clicking outside
//   React.useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownOpen && !event.target.closest('.dropdown-container')) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [dropdownOpen]);

//   return (
//     <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shadow-sm" style={{ backgroundColor: 'rgb(240, 242, 245)' }}>
//       {/* User Avatar and Info */}
//       <div className="flex items-center flex-1">
//         <div className="relative mr-3">
//           <img
//             src={avatar || "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"}
//             alt={name}
//             className="w-11 h-11 rounded-full object-cover border-2 border-gray-200"
//           />
//           {/* Online status indicator */}
//           <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
//         </div>
        
//         <div>
//           <div className="font-semibold text-gray-900 text-base leading-tight">
//             {name || "Alice"}
//           </div>
//           <div className="flex items-center gap-1 text-sm text-gray-600">
//             <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
//             {status || "Online"}
//           </div>
//         </div>
//       </div>

//       {/* Actions Menu */}
//       <div className="dropdown-container relative">
//         <button
//           onClick={toggleDropdown}
//           className="flex items-center justify-center w-9 h-9 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
//         >
//           <MoreVertical size={20} />
//         </button>

//         {/* Dropdown Menu */}
//         {dropdownOpen && (
//           <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg min-w-44 z-50 overflow-hidden">
//             <div className="py-2">
//               <button
//                 onClick={() => {
//                   setDropdownOpen(false);
//                   // Handle profile action
//                 }}
//                 className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 text-sm text-gray-700 transition-colors"
//               >
//                 <User size={16} />
//                 Profile
//               </button>
              
//               <button
//                 onClick={() => {
//                   setDropdownOpen(false);
//                   // Handle settings action
//                 }}
//                 className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 text-sm text-gray-700 transition-colors"
//               >
//                 <Settings size={16} />
//                 Settings
//               </button>

//               <div className="h-px bg-gray-200 my-2"></div>

//               <button
//                 onClick={() => {
//                   setDropdownOpen(false);
//                   handleLogout();
//                 }}
//                 className="w-full px-4 py-3 text-left hover:bg-red-50 flex items-center gap-3 text-sm text-red-600 transition-colors"
//               >
//                 <LogOut size={16} />
//                 Logout
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomChatHeader;


import React, { useState } from "react";
import { LogOut, MoreVertical, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CustomChatHeader = ({ avatar, name, status }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      // Clear authentication token
      localStorage.removeItem("authToken");
      
      // Also clear any other auth-related items that might exist
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      sessionStorage.clear();
      
      // Close dropdown first
      setDropdownOpen(false);
      
      // Add a small delay to ensure cleanup completes
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 100);
    } catch (error) {
      console.error("Logout error:", error);
      // Force navigation even if there's an error
      navigate("/login", { replace: true });
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest('.dropdown-container')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div 
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        borderBottom: "1px solid rgba(75, 85, 99, 0.3)",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
        background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* User Avatar and Info */}
      <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <div style={{ position: "relative", marginRight: "16px" }}>
          <img
            src={avatar || "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"}
            alt={name}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #3b82f6",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3), 0 0 0 4px rgba(59, 130, 246, 0.2)",
            }}
          />
          {/* Online status indicator with glow */}
          <div 
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              width: "14px",
              height: "14px",
              backgroundColor: "#10b981",
              borderRadius: "50%",
              border: "2px solid #1e293b",
              boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)",
              animation: "pulse 2s infinite",
            }}
          />
        </div>
        
        <div>
          <div style={{ 
            fontWeight: "600", 
            color: "#f3f4f6", 
            fontSize: "18px", 
            lineHeight: "1.2",
            marginBottom: "4px"
          }}>
            {name || "Alice"}
          </div>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "8px", 
            fontSize: "14px", 
            color: "#d1d5db" 
          }}>
            <div style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#10b981",
              borderRadius: "50%",
              animation: "pulse 2s infinite"
            }} />
            {status || "Online"}
          </div>
        </div>
      </div>

      {/* Actions Menu */}
      <div className="dropdown-container" style={{ position: "relative" }}>
        <button
          onClick={toggleDropdown}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            color: "#9ca3af",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            transform: dropdownOpen ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#f3f4f6";
            e.target.style.backgroundColor = "#475569";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#9ca3af";
            e.target.style.backgroundColor = "transparent";
          }}
        >
          <MoreVertical size={20} />
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div style={{
            position: "absolute",
            top: "100%",
            right: "0",
            marginTop: "8px",
            backgroundColor: "#1e293b",
            border: "1px solid rgba(75, 85, 99, 0.5)",
            borderRadius: "12px",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
            minWidth: "192px",
            zIndex: 50,
            overflow: "hidden",
            backdropFilter: "blur(8px)",
          }}>
            <div style={{ padding: "8px 0" }}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDropdownOpen(false);
                  // Handle profile action
                }}
                className="dropdown-menu-item"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  textAlign: "left",
                  backgroundColor: "transparent",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "14px",
                  color: "#d1d5db",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <User size={16} />
                Profile
              </button>
              
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDropdownOpen(false);
                  // Handle settings action
                }}
                className="dropdown-menu-item"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  textAlign: "left",
                  backgroundColor: "transparent",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "14px",
                  color: "#d1d5db",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <Settings size={16} />
                Settings
              </button>

              <div style={{ 
                height: "1px", 
                backgroundColor: "rgba(75, 85, 99, 0.5)", 
                margin: "8px 0" 
              }} />

              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log("Logout clicked!"); // Debug log
                  handleLogout();
                }}
                className="dropdown-menu-item logout-item"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  textAlign: "left",
                  backgroundColor: "transparent",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "14px",
                  color: "#f87171",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* CSS Animation for pulse effect */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          
          .dropdown-menu-item:hover {
            background-color: #475569 !important;
            color: #f3f4f6 !important;
          }
          
          .logout-item:hover {
            background-color: rgba(239, 68, 68, 0.1) !important;
            color: #fca5a5 !important;
          }
        `}
      </style>
    </div>
  );
};

export default CustomChatHeader;