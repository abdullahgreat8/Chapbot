// React: inside useEffect of GoogleLoginSuccess.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleLoginSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get("token");

    if (token) {
      localStorage.setItem("authToken", token);
      navigate("/chat"); // or wherever
    }
  }, []);

  return <div>Logging you in with Google...</div>;
};

export default GoogleLoginSuccess;