import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Timeline = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const timelineItems = [
    {
      year: 'Planning Phase',
      title: 'Redefining Enterprise Software',
      desc: 'Beta was established in Tiruvallur, India, by a core team of 5 engineers aiming to redefine enterprise software.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2024',
      title: 'Execution Phase',
      desc: 'Released our collaborative email dashboard concept, securing our first 100 enterprise clients.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2025',
      title: 'Brand Launch',
      desc: 'Secured $12M in Series A funding to expand our security-first auth frameworks and database clustering.',
      color: 'from-pink-500 to-orange-500'
    },
    {
      year: '2026',
      title: 'Global Footprint',
      desc: 'Now powering 1.2M+ active corporate connections globally across 500+ major companies.',
      color: 'from-orange-500 to-amber-500'
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-[#030303] py-32 overflow-hidden border-t border-white/5">
      {/* Background glow elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4 block">Journey</span>
          <h2 className="text-5xl md:text-6xl font-extralight text-white">
            Our <span className="font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Timeline</span>
          </h2>
        </div>

        {/* Timeline Path & Items */}
        <div className="relative border-l border-white/10 max-w-3xl mx-auto pl-8 sm:pl-12 space-y-16">
          
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                className={`absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-gradient-to-br ${item.color} p-[2px] shadow-lg border border-black z-20`}
              >
                <div className="w-full h-full bg-black rounded-full" />
              </motion.div>

              {/* Glowing Background card */}
              <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:border-white/15 transition-all duration-500 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl`} />
                
                {/* Year / Phase Badge */}
                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-gradient-to-r ${item.color} text-black mb-4`}>
                  {item.year}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
