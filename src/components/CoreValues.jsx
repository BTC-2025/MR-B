import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiHeart, FiStar, FiUsers } from 'react-icons/fi';
import { FaRocket, FaHandshake, FaLeaf } from 'react-icons/fa';

const CoreValues = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  const values = [
    {
      title: 'Innovation',
      icon: FaRocket,
      desc: 'Building the future through creativity and technology. We embrace new ideas, challenge conventional thinking, and continuously develop innovative solutions that create lasting value for businesses and communities.',
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'bg-blue-500/5'
    },
    {
      title: 'Integrity',
      icon: FaHandshake,
      desc: 'Doing the right thing, every time. Trust is the foundation of every successful relationship. We conduct our business with honesty, transparency, and accountability, ensuring ethical decisions in everything we do.',
      color: 'from-emerald-500 to-teal-500',
      glowColor: 'bg-emerald-500/5'
    },
    {
      title: 'Customer First',
      icon: FiHeart,
      desc: "Our customers inspire every decision we make. We prioritize understanding our customers' needs and delivering solutions that exceed expectations, creating meaningful experiences and long-term partnerships.",
      color: 'from-pink-500 to-rose-500',
      glowColor: 'bg-pink-500/5'
    },
    {
      title: 'Excellence',
      icon: FiStar,
      desc: 'Committed to quality without compromise. We strive for excellence in every project by maintaining the highest standards of performance, precision, and continuous improvement.',
      color: 'from-amber-500 to-orange-500',
      glowColor: 'bg-amber-500/5'
    },
    {
      title: 'Collaboration',
      icon: FiUsers,
      desc: 'Great achievements are built together. We believe that teamwork, open communication, and diverse perspectives drive innovation and lead to exceptional outcomes for our clients and partners.',
      color: 'from-purple-500 to-indigo-500',
      glowColor: 'bg-purple-500/5'
    },
    {
      title: 'Sustainability',
      icon: FaLeaf,
      desc: 'Creating value with long-term responsibility. We build businesses that balance innovation with social and environmental responsibility, ensuring sustainable growth for future generations.',
      color: 'from-green-500 to-emerald-500',
      glowColor: 'bg-green-500/5'
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-[#070707] py-28 overflow-hidden border-t border-white/5">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/10 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4 block">Foundations</span>
          <h2 className="text-5xl md:text-6xl font-extralight text-white">
            The Way <span className="font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"> We Work</span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:border-white/15 rounded-3xl p-8 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Card Hover Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${val.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl -z-10`} />

              <div>
                {/* Icon wrapper */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${val.color} p-[1.5px] mb-6 relative group-hover:scale-105 transition-transform duration-300`}>
                  <div className="w-full h-full bg-[#0a0a0a] rounded-[14px] flex items-center justify-center text-white">
                    <val.icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {val.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed font-light">
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
