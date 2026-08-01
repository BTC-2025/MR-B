import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MissionVision = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section ref={containerRef} className="relative bg-[#0a0a0a] py-28 overflow-hidden border-t border-white/5">
      {/* Glow elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-3xl p-10 hover:border-white/15 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10" />
            
            <span className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4 block">Purpose</span>
            <h3 className="text-3xl font-extralight text-white mb-6">
              Our <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Mission</span>
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              To design secure, lightweight, and unified SaaS products that enable corporate teams to communicate, sync databases, and manage mailboxes without friction or security boundaries.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-3xl p-10 hover:border-white/15 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10" />
            
            <span className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4 block">Future</span>
            <h3 className="text-3xl font-extralight text-white mb-6">
              Our <span className="font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Vision</span>
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              To set the global standard for next-generation workspace communications, protected by absolute auth protocols and real-time state synchronization.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
