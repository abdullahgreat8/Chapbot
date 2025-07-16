// import React from "react";

// const CustomSearchBar = ({ value, onChange }) => {
//   return (
//     <input
//       type="text"
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       placeholder="Search contacts..."
//       style={{
//         width: "100%",
//         padding: "10px 15px",
//         borderRadius: "20px",
//         border: "1px solid #d0d0d0",
//         backgroundColor: "#ffffff",
//         fontSize: "14px",
//         outline: "none",
//         boxSizing: "border-box",
//       }}
//     />
//   );
// };

// export default CustomSearchBar;


import React, { useState } from "react";

const CustomSearchBar = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{
      position: "relative",
      width: "100%",
    }}>
      {/* Search icon */}
      <div style={{
        position: "absolute",
        left: "16px",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "18px",
        color: isFocused ? "#6366f1" : "#64748b",
        transition: "color 0.3s ease",
        zIndex: 1,
      }}>
        🔍
      </div>
      
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search contacts..."
        style={{
          width: "100%",
          padding: "14px 16px 14px 48px",
          borderRadius: "16px",
          border: isFocused 
            ? "2px solid #6366f1" 
            : "2px solid rgba(71, 85, 105, 0.3)",
          backgroundColor: isFocused 
            ? "rgba(30, 41, 59, 0.8)" 
            : "rgba(30, 41, 59, 0.6)",
          color: "#e2e8f0",
          fontSize: "15px",
          outline: "none",
          boxSizing: "border-box",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          backdropFilter: "blur(10px)",
          boxShadow: isFocused 
            ? "0 0 0 4px rgba(99, 102, 241, 0.1), 0 8px 25px rgba(0, 0, 0, 0.3)" 
            : "0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
      />
      
      {/* Clear button */}
      {value && (
        <button
          onClick={() => onChange("")}
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            fontSize: "16px",
            color: "#64748b",
            cursor: "pointer",
            padding: "4px",
            borderRadius: "50%",
            transition: "all 0.2s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(71, 85, 105, 0.3)";
            e.target.style.color = "#e2e8f0";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#64748b";
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default CustomSearchBar;