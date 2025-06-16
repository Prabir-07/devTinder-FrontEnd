import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="bg-slate-800 border-b border-slate-700 shadow-lg px-4 py-3">
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

        {/* Right Section: Search + Profile */}
        <div className="flex items-center gap-6">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search developers..."
              className="bg-slate-700 border border-slate-600 text-white placeholder-gray-400 rounded-lg px-4 py-2 w-48 md:w-64 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Profile Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer bg-slate-700 hover:bg-slate-600 rounded-lg p-2 transition-colors duration-200">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-cyan-400">
                <img
                  alt="User avatar"
                  src="https://logodix.com/logo/1070634.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-56 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <Link
                  to="/profile"
                  className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Profile
                </Link>
                <Link
                  to="/feed"
                  className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Feeds
                </Link>
                <Link
                  to="/connections"
                  className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  My Connections
                </Link>
                <Link
                  to="/requests"
                  className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  Requests
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">2</span>
                </Link>
                <div className="border-t border-slate-700 my-2"></div>
                <Link
                  to="/logout"
                  className="flex items-center gap-3 px-4 py-2 text-red-400 hover:text-red-300 hover:bg-slate-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar