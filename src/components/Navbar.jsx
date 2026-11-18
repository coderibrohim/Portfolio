import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = ["Home", "About", "Projects", "Contact"];

  const getPath = (item) => (item === "Home" ? "/" : `/${item.toLowerCase()}`);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#080b14]/80 backdrop-blur-2xl border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Code2 size={21} className="text-white" />
            </div>

            <div>
              <span className="block text-lg sm:text-xl font-bold tracking-tight text-white">
                Ibrohimjon<span className="text-indigo-400">.</span>
              </span>
              <span className="block text-[10px] text-gray-500 tracking-[0.2em] uppercase">
                Frontend Developer
              </span>
            </div>
          </NavLink>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-1 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            {navItems.map((item) => (
              <li key={item}>
                <NavLink
                  to={getPath(item)}
                  className={({ isActive }) =>
                    `relative block px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-white bg-indigo-500/15"
                        : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-indigo-400"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right CTA */}
          <NavLink
            to="/contact"
            className="hidden md:flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </NavLink>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden w-11 h-11 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-gray-300 hover:text-white hover:border-indigo-400/40 transition-all"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={23} /> : <Menu size={23} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-white/[0.07] bg-[#080b14]/95 backdrop-blur-2xl"
          >
            <div className="max-w-7xl mx-auto px-5 py-6">
              <ul className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <NavLink
                      to={getPath(item)}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-5 py-4 rounded-xl font-medium transition-all ${
                          isActive
                            ? "bg-indigo-500/15 text-indigo-300 border border-indigo-400/20"
                            : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                        }`
                      }
                    >
                      {item}
                      <ArrowUpRight size={17} />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-5 pt-5 border-t border-white/[0.07]">
                <p className="text-xs text-gray-500 text-center">
                  © {new Date().getFullYear()} Ibrohimjon Mamayusupov
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
