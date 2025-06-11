import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar bg-base-200 shadow-sm px-4">
      {/* Left Section: Logo + Brand */}
      <div className="flex items-center gap-1 mx-2">
        <img
          src="https://static.vecteezy.com/system/resources/previews/023/986/484/original/tinder-app-logo-tinder-app-logo-transparent-tinder-app-icon-transparent-free-free-png.png"
          alt="DevTinder Logo"
          className="w-10 h-10 object-contain rounded-xl"
        />
        <span className="text-xl font-bold text-white">DevTinder</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right Section: Search + Profile */}
      <div className="flex items-center gap-6 mx-4">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-28 md:w-48"
        />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://logodix.com/logo/1070634.png"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow z-10"
          >
            <li>
              <a className="justify-between">
                Profile <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
 