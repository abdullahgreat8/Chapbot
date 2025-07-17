// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Chat from "./components/chatLight";
// import Login from "./components/Login";
// import Signup from "./components/SignUp";
// import ProtectedRoute from "./components/ProtectedRoute";
// import GuestRoute from "./components/GuestRoute";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Public routes only when NOT logged in */}
//         <Route
//           path="/login"
//           element={
//             <GuestRoute>
//               <Login />
//             </GuestRoute>
//           }
//         />
//         <Route
//           path="/signup"
//           element={
//             <GuestRoute>
//               <Signup />
//             </GuestRoute>
//           }
//         />

//         {/* Protected /chat route */}
//         <Route
//           path="/chat"
//           element={
//             <ProtectedRoute>
//               <Chat />
//             </ProtectedRoute>
//           }
//         />

//         {/* Default route */}
//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Chat from "./components/chatLight";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";
import BusinessChatLanding from "./components/BusinessChatLanding"; // Import the landing page
import GoogleLoginSuccess from "./components/GoogleLoginSuccess";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing page route */}
        <Route
          path="/"
          element={
            <GuestRoute>
              <BusinessChatLanding />
            </GuestRoute>
          }
        />

        <Route path="/google-login-success" element={<GoogleLoginSuccess />} />

        {/* Public routes only when NOT logged in */}
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <GuestRoute>
              <Signup />
            </GuestRoute>
          }
        />

        {/* Protected /chat route */}
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />

        {/* Default route - redirect to landing page instead of login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;