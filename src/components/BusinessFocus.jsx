import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGlobe, FiTrendingUp } from 'react-icons/fi';
import { FaBuilding, FaRocket, FaHandshake, FaLightbulb } from 'react-icons/fa';

const BusinessFocus = ({ setCurrentPage }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  const focuses = [
    {
      title: 'Enterprise Software',
      icon: FaBuilding,
      desc: 'Designing scalable software solutions that streamline operations and maximize efficiency for large organizations.',
      color: 'from-blue-500 to-indigo-500',
      hasLink: true,
      linkTarget: 'services'
    },
    {
      title: 'Product Innovation',
      icon: FaLightbulb,
      desc: 'Transforming complex ideas into polished, user-centric digital products that stand out in the market.',
      color: 'from-amber-500 to-orange-500',
      hasLink: true,
      linkTarget: 'services'
    },
    {
      title: 'Digital Transformation',
      icon: FiGlobe,
      desc: 'Modernizing legacy systems and processes with next-generation cloud and automation solutions.',
      color: 'from-cyan-500 to-teal-500',
      hasLink: false
    },
    {
      title: 'Technology Strategy',
      icon: FiTrendingUp,
      desc: 'Aligning business objectives with robust technology roadmaps to drive growth and future scalability.',
      color: 'from-emerald-500 to-green-500',
      hasLink: false
    },
    {
      title: 'Startup Growth',
      icon: FaRocket,
      desc: 'Supporting early-stage founders with technical architecture and leadership to help them scale rapidly.',
      color: 'from-purple-500 to-pink-500',
      hasLink: false
    },
    {
      title: 'Leadership & Collaboration',
      icon: FaHandshake,
      desc: 'Building, mentoring, and scaling highly collaborative product and engineering teams.',
      color: 'from-rose-500 to-red-500',
      hasLink: false
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-[#050505] py-28 overflow-hidden border-t border-white/5">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/10 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4 block">Focus</span>
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6">
            Business <span className="font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Focus</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed text-balance">
            Building innovative solutions that drive growth, solve real-world challenges, and create lasting value.
          </p>
        </div>

        {/* Focus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {focuses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:border-white/15 rounded-3xl p-8 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[220px]"
            >
              {/* Card Hover Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl -z-10`} />

              <div>
                {/* Header info (Icon & Title) */}
                <div className="flex items-center gap-5 mb-6">
                  {/* Icon wrapper */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} p-[1.5px] relative group-hover:scale-105 transition-transform duration-300 shrink-0`}>
                    <div className="w-full h-full bg-[#0a0a0a] rounded-[14px] flex items-center justify-center text-white">
                      <item.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed font-light mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Action Button/Link if available */}
              {item.hasLink && (
                <div className="mt-auto">
                  <button
                    onClick={() => setCurrentPage(item.linkTarget)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 group/link"
                  >
                    <span className="text-indigo-400 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                    <span className="font-medium">
                      Learn More
                    </span>
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessFocus;
