// 


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff, Mail, Lock, User, Shield, ArrowRight, CheckCircle } from "lucide-react";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", pin: "" });
  const [pinError, setPinError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate=useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
    // console.log("Navigate to login");
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // Clear pin error when user starts typing
    if (e.target.name === "pin") {
      setPinError("");
    }

    // Check password strength
    if (e.target.name === "password") {
      setPasswordStrength(checkPasswordStrength(e.target.value));
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // ✅ Validate 6-digit PIN
  //   const pinRegex = /^\d{6}$/;
  //   if (!pinRegex.test(form.pin)) {
  //     setPinError("PIN must be exactly 6 digits.");
  //     return;
  //   }

  //   setIsLoading(true);
    
  //   // Simulate API call
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     console.log("Signup submitted:", form);
  //     // navigate("/login");
  //   }, 2000);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
     // ✅ Validate 6-digit PIN
    const pinRegex = /^\d{6}$/;
    if (!pinRegex.test(form.pin)) {
      setPinError("PIN must be exactly 6 digits.");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/user/signup", form);
      localStorage.setItem("authToken", res.data.token);
      navigate("/chat"); // 🔁 Redirect to /chat
    } catch (err) {
      console.error(err);
      alert("Login failed.");
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return "bg-red-500";
    if (passwordStrength <= 3) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return "Weak";
    if (passwordStrength <= 3) return "Medium";
    return "Strong";
  };

  const handleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Signup Card */}
      <div className="relative bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        {/* Glassmorphism effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
            <p className="text-gray-400">Join us and start your journey</p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your full name"
                  required
                  className={`w-full pl-12 pr-4 py-3 bg-gray-700/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 ${
                    focusedField === 'name' 
                      ? 'border-green-500 shadow-lg shadow-green-500/25 bg-gray-700/80' 
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your email"
                  required
                  className={`w-full pl-12 pr-4 py-3 bg-gray-700/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 ${
                    focusedField === 'email' 
                      ? 'border-blue-500 shadow-lg shadow-blue-500/25 bg-gray-700/80' 
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Create a strong password"
                  required
                  className={`w-full pl-12 pr-12 py-3 bg-gray-700/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 ${
                    focusedField === 'password' 
                      ? 'border-purple-500 shadow-lg shadow-purple-500/25 bg-gray-700/80' 
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {/* Password Strength Indicator */}
              {form.password && (
                <div className="mt-2">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-600 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                        style={{ width: `${(passwordStrength / 5) * 100}%` }}
                      ></div>
                    </div>
                    <span className={`text-xs font-medium ${
                      passwordStrength <= 2 ? 'text-red-400' : 
                      passwordStrength <= 3 ? 'text-yellow-400' : 'text-green-400'
                    }`}>
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* PIN Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-2">Security PIN</label>
              <div className="relative">
                <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPin ? "text" : "password"}
                  name="pin"
                  value={form.pin}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('pin')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter 6-digit PIN"
                  required
                  maxLength="6"
                  className={`w-full pl-12 pr-12 py-3 bg-gray-700/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 ${
                    pinError ? 'border-red-500 shadow-lg shadow-red-500/25' :
                    focusedField === 'pin' 
                      ? 'border-yellow-500 shadow-lg shadow-yellow-500/25 bg-gray-700/80' 
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {showPin ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {pinError && (
                <p className="text-red-400 text-sm mt-2 flex items-center space-x-1">
                  <span>⚠️</span>
                  <span>{pinError}</span>
                </p>
              )}
              {form.pin && form.pin.length === 6 && !pinError && (
                <p className="text-green-400 text-sm mt-2 flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>PIN is valid</span>
                </p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-3 text-sm">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-gray-300">
                I agree to the{" "}
                <button className="text-blue-400 hover:text-blue-300 underline">
                  Terms of Service
                </button>{" "}
                and{" "}
                <button className="text-blue-400 hover:text-blue-300 underline">
                  Privacy Policy
                </button>
              </label>
            </div>

            {/* Signup Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                isLoading
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transform hover:-translate-y-0.5'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800/50 text-gray-400">Or sign up with</span>
            </div>
          </div>

          {/* Social Signup Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button onClick={handleLogin} className="flex items-center justify-center px-4 py-2 border border-gray-600 rounded-xl text-gray-300 hover:bg-gray-700/50 transition-colors">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-600 rounded-xl text-gray-300 hover:bg-gray-700/50 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-gray-400">
            Already have an account?{" "}
            <button 
              onClick={navigateToLogin}
              className="text-green-400 hover:text-green-300 font-medium transition-colors"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;