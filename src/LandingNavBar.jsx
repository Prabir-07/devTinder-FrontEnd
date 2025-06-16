import React from 'react'
import { Link } from 'react-router-dom'

const LandingNavBar = () => {
  return (
    <div className="bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 shadow-lg px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section: Logo + Brand */}
        <div className="flex items-center gap-3">
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/986/484/original/tinder-app-logo-tinder-app-logo-transparent-tinder-app-icon-transparent-free-free-png.png"
            alt="DevTinder Logo"
            className="w-10 h-10 object-contain rounded-xl hover:scale-105 transition-transform duration-200"
          />
          <Link to="/" className="hover:opacity-80 transition-opacity duration-200">
            <span className="text-2xl font-bold text-cyan-400">DevTinder</span>
          </Link>
        </div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
            How it Works
          </a>
          <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
            Features
          </a>
          <Link to="/feed" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
            Browse Developers
          </Link>
        </div>

        {/* Right Section: Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingNavBar;