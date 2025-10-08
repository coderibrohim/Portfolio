import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-lg">
      <div className="navbar container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 tracking-wide"
        >
          Ibrohimjon
        </NavLink>

        {/* Links */}
        <ul className="flex gap-4">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium transition ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
