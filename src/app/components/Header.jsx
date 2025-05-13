"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white border-b-4 border-black fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative">
        <h1 className="text-2xl font-bold tracking-wider">Mika Geshan</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 font-mono text-lg">
            {["Home", "About", "Projects"].map((text, i) => (
              <li key={i}>
                <a
                  href={`/${
                    text.toLowerCase() === "home" ? "" : text.toLowerCase()
                  }`}
                  className="hover:underline"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none relative w-8 h-8"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="x-icon"
                initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="menu-icon"
                initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Menu size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 8 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 20,
              }}
              className="absolute top-full left-0 w-full bg-blue-800 border-t border-black shadow-lg overflow-hidden"
            >
              <div className="px-6 pt-4 pb-6">
                <ul className="flex flex-col gap-4 font-mono text-lg">
                  {["Home", "About", "Projects"].map((text, i) => (
                    <li key={i}>
                      <a
                        href={`/${
                          text.toLowerCase() === "home"
                            ? ""
                            : text.toLowerCase()
                        }`}
                        className="hover:underline"
                        onClick={() => setIsOpen(false)}
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
