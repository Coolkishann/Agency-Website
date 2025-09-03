"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu with ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const menuLinks = [
    { label: "About us", number: "01" },
    { label: "Our work", number: "02" },
    { label: "Services", number: "03" },
    { label: "Blog", number: "04" },
    { label: "Contact us", number: "05" },
  ];

  const socials = ["Instagram", "LinkedIn", "X/Twitter", "Awwwards"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-xl ml-10 font-bold text-white">
          CodeStudios
        </a>

        {/* Menu button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative flex flex-col items-center justify-center w-10 h-10 z-[60]" // <- ensure above overlay
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="block w-6 h-0.5 bg-white mb-1"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="block w-6 h-0.5 bg-white mb-1"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            className="block w-6 h-0.5 bg-white"
          />
        </button>
      </div>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 text-white flex flex-col items-center justify-center z-50"
          >
            <ul className="space-y-6 text-center">
              {menuLinks.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-3xl font-semibold relative group"
                >
                  <a
                    href="#"
                    onClick={() => setIsOpen(false)} // close menu when link clicked
                  >
                    {item.label}
                    <span className="ml-2 text-gray-400 text-lg">
                      {item.number}
                    </span>
                  </a>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all"></span>
                </motion.li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-12 flex space-x-6">
              {socials.map((s, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  onClick={() => setIsOpen(false)} // close when clicking socials too
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="text-lg hover:underline"
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
