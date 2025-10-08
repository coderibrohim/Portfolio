import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // iconlar uchun

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 tracking-wide"
          onClick={closeMenu}
        >
          Ibrohimjon
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-medium transition text-sm ${
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

        {/* Hamburger icon (mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#121224]/95 backdrop-blur-lg border-t border-white/10 py-4">
          <ul className="flex flex-col items-center gap-3">
            {navItems.map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg font-medium transition text-base ${
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
      )}
    </nav>
  );
}

export default Navbar;
