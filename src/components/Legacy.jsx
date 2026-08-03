import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const Legacy = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section ref={containerRef} className="relative bg-[#070707] py-32 overflow-hidden border-t border-white/5">
      {/* Background glow element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4 block">Impact</span>
          <h2 className="text-5xl md:text-6xl font-extralight text-white">
            The Legacy <span className="font-bold bg-gradient-to-r from-amber-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">I'm Building</span>
          </h2>
        </div>

        {/* Legacy Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:border-white/12 rounded-3xl p-10 md:p-16 text-center transition-all duration-500 overflow-hidden"
          >
            {/* Card Hover Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-rose-500/10 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl -z-10" />

            {/* Stars accent */}
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -30 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
                >
                  <FiStar className="w-6 h-6 text-amber-400 fill-amber-400/20" />
                </motion.div>
              ))}
            </div>

            {/* Lead Subtitle/Quote */}
            <h3 className="text-2xl md:text-3xl font-light text-white mb-6 leading-relaxed max-w-2xl mx-auto group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
              "Instead of talking about the past, talk about the impact you want to leave."
            </h3>

            {/* Connecting line spacer */}
            <div className="w-16 h-px bg-gradient-to-r from-amber-500/50 to-rose-500/50 mx-auto mb-8" />

            {/* Main Statement Content */}
            <p className="text-gray-400 text-lg md:text-xl font-extralight leading-relaxed max-w-3xl mx-auto">
              I aspire to build more than successful businesses. My goal is to create opportunities, inspire innovation, and develop solutions that make a lasting difference for future generations.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Legacy;
