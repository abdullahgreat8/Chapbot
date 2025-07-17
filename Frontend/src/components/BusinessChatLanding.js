import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MessageCircle,
  Shield,
  Clock,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Headphones,
  Building
} from 'lucide-react';

const BusinessChatLanding = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const handleGetStarted = () => {
    navigate('/login');
  };

  useEffect(() => {
    setIsVisible(true);

    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin-slow {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
      }
      .animate-spin-slow {
        animation: spin-slow 20s linear infinite;
      }
    `;
    document.head.appendChild(style);

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(interval);
      document.head.removeChild(style);
    };
  }, []);

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Direct Business Chat',
      description: 'Connect instantly with verified businesses for quick resolution'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Private',
      description: 'End-to-end encrypted conversations with enterprise-grade security'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Availability',
      description: 'Get support anytime with our round-the-clock business network'
    }
  ];

  const businessCategories = [
    { name: 'E-commerce', count: '500+' },
    { name: 'Banking', count: '150+' },
    { name: 'Healthcare', count: '300+' },
    { name: 'Telecom', count: '200+' },
    { name: 'Insurance', count: '100+' },
    { name: 'Travel', count: '250+' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      text: 'Resolved my payment dispute in under 10 minutes. Game-changer!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Customer',
      text: "Finally, a direct line to businesses that actually works.",
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Entrepreneur',
      text: "The best customer service platform I've ever used.",
      rating: 5
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-[100dvh] relative overflow-x-hidden">
      {/* Animated Background - Fixed positioning with proper z-index */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow" style={{ transform: 'translate(-50%, -50%)' }}></div>
      </div>

      {/* Page Content - Scrollable container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`px-6 py-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">ConnectHub</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-blue-400 transition-colors cursor-pointer">Features</a>
              <a href="#businesses" className="hover:text-blue-400 transition-colors cursor-pointer">Businesses</a>
              <a href="#testimonials" className="hover:text-blue-400 transition-colors cursor-pointer">Reviews</a>
              <button onClick={handleGetStarted} className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">Get Started</button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-20 text-center">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Connect with <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">Businesses</span><br />Instantly
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Chat directly with verified businesses to resolve complaints, get services, and receive support faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={handleGetStarted} className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                <span>Start Chatting</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="px-6 py-20">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">ConnectHub</span></h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Experience the future of business communication with our cutting-edge platform</p>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-500 transform hover:scale-105 ${activeFeature === index ? 'ring-2 ring-blue-500/50 shadow-2xl' : ''}`}>
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Business Categories */}
        <section id="businesses" className="px-6 py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">1000+</span> Businesses</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Connect with verified businesses across multiple industries</p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {businessCategories.map((category, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <Building className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p className="text-blue-400 font-bold">{category.count}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="px-6 py-20">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Users <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Say</span></h2>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Business Communication?</span></h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of users who trust ConnectHub for instant business communication</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={handleGetStarted} className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                <span>Get Started Free</span>
                <CheckCircle className="w-5 h-5" />
              </button>
              <button className="border border-gray-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <Headphones className="w-5 h-5" />
                <span>Contact Sales</span>
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 bg-gray-900 border-t border-gray-800 text-center">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">ConnectHub</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400">
            <p>&copy; 2025 ConnectHub. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BusinessChatLanding;

