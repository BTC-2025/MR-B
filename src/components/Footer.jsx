// components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 lg:mb-0"
          >
            <h3 className="text-2xl font-bold mb-2">Mr. B</h3>
            <p className="text-gray-400">Entrepreneur & Startup Founder</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-right"
          >
            <p className="text-gray-400 mb-2">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Building the future, one venture at a time.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <div className="flex justify-center space-x-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;