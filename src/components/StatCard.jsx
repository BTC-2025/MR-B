// components/StatCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ value, label, delay, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 
                 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="text-3xl font-bold text-blue-400 mb-2">{value}</div>
      <div className="text-gray-400">{label}</div>
    </motion.div>
  );
};

export default StatCard;