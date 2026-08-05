import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiTrendingUp, FiGlobe } from 'react-icons/fi';
import { FaRocket, FaHandshake } from 'react-icons/fa';

const Milestones = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  const milestonesList = [
    {
      number: '01',
      title: 'Vision Created',
      icon: FaRocket,
      desc: 'Every successful business begins with a bold idea and a clear purpose.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Business Established',
      icon: FiBriefcase,
      desc: 'Turned vision into reality by launching the first venture and building a strong foundation.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Building Partnerships',
      icon: FaHandshake,
      desc: 'Collaborated with clients, teams, and partners to deliver meaningful solutions.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      number: '04',
      title: 'Growth & Expansion',
      icon: FiTrendingUp,
      desc: 'Expanded services, strengthened expertise, and reached new milestones through continuous innovation.',
      color: 'from-rose-500 to-orange-500'
    },
    {
      number: '05',
      title: 'Future Vision',
      icon: FiGlobe,
      desc: 'Focused on creating sustainable businesses that inspire innovation and make a global impact.',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-[#030303] py-28 overflow-hidden border-t border-white/5">
      {/* Background glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4 block">Progress</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-white">
            Vision<span className="font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"> in Motion</span>
          </h2>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {milestonesList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:border-white/15 rounded-3xl p-6 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Card Hover Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl -z-10`} />

              <div className="relative z-10">
                {/* Icon wrapper */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} p-[1.5px] mb-6 relative group-hover:scale-105 transition-transform duration-300`}>
                  <div className="w-full h-full bg-[#0a0a0a] rounded-[14px] flex items-center justify-center text-white">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed font-light mb-8">
                  {item.desc}
                </p>
              </div>

              {/* Decorative giant step number */}
              <div className="absolute right-6 bottom-4 text-7xl font-extrabold text-white/[0.02] select-none group-hover:text-white/[0.06] transition-colors duration-500 pointer-events-none">
                {item.number}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
