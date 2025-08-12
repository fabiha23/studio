import React from 'react';
import { FiAlertTriangle, FiHome, FiMail } from 'react-icons/fi';
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#cec0a7] flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Animated Error Icon */}
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-[#cec0a7]/10 animate-ping"></div>
        <FiAlertTriangle className="text-6xl md:text-8xl text-[#cec0a7] relative z-10" />
      </div>

      {/* Error Message */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-medium mb-6">Page Not Found</h2>
      <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
        The page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#cec0a7] text-[#0f0f0f] hover:bg-[#e0e0d8] transition-colors duration-300"
        >
          <FiHome /> Return Home
        </Link>
        {/* <a
          href="mailto:fabiha.amatullah@gmail.com"
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#3f3f3f] hover:bg-[#1a1a1a] transition-colors duration-300"
        >
          <FiMail /> Contact Support
        </a> */}
      </div>
    </div>
  );
};

export default Error;