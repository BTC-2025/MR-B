import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/5 py-4 px-8 lg:px-16 flex justify-between items-center">
      <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
        <span className="text-white text-xl font-bold tracking-wider">Mr. B</span>
      </div>
      
      <div className="flex gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`relative text-sm tracking-[0.2em] uppercase font-light transition-colors py-1 ${
              currentPage === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            {item.label}
            {currentPage === item.id && (
              <motion.div
                layoutId="activeNav"
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
