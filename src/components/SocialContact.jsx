// components/SocialContact.jsx
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FiInstagram, FiTwitter, FiFacebook, FiArrowUpRight } from 'react-icons/fi';

const SocialContact = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const socials = [
    {
      name: 'Instagram',
      icon: FiInstagram,
      handle: '@mr_b_officials',
      color: 'from-purple-500 via-pink-500 to-orange-400',
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
      url: 'https://www.instagram.com/mr_b_officials/'
    },
    {
      name: 'X',
      icon: FiTwitter,
      handle: '@Mr_B_officials',
      color: 'from-gray-200 to-gray-400',
      bgColor: 'bg-gradient-to-br from-gray-500/20 to-gray-700/20',
      url: 'https://x.com/Mr_B_officials/'
    },
    {
      name: 'Facebook',
      icon: FiFacebook,
      handle: 'Mr B',
      color: 'from-blue-600 to-blue-400',
      bgColor: 'bg-gradient-to-br from-blue-600/20 to-blue-400/20',
      url: 'https://www.facebook.com/profile.php?id=61585176428335'
    },
  ];

  return (
    <section ref={containerRef} className="relative bg-[#030303] py-32 overflow-hidden">

      {/* Animated background shapes */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -150]) }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm tracking-[0.3em] uppercase block mb-4"
          >
            Stay Connected
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6">
            Let's be{' '}
            <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Social
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-px bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
          />
        </motion.div>

        {/* Social Cards - Horizontal Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 80, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex-1 min-w-[280px]"
            >
              {/* Card */}
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.02 : 1,
                  y: hoveredIndex === index ? -10 : 0
                }}
                transition={{ duration: 0.3 }}
                className={`relative ${social.bgColor} backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 overflow-hidden
                           hover:border-white/20 transition-all duration-500`}
              >
                {/* Glow effect on hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1.5 : 0.8
                  }}
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${social.color} rounded-full blur-3xl`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-6 shadow-xl`}
                  >
                    <social.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-2xl font-semibold text-white mb-2">{social.name}</h3>

                  {/* Handle */}
                  <p className="text-gray-400 text-sm mb-6">{social.handle}</p>

                  {/* Follow link */}
                  <motion.div
                    className={`inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${social.color} bg-clip-text text-transparent`}
                  >
                    <span>Follow</span>
                    <motion.div
                      animate={{ x: hoveredIndex === index ? 5 : 0, rotate: hoveredIndex === index ? 45 : 0 }}
                    >
                      <FiArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Bottom gradient line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${social.color} origin-left rounded-b-3xl`}
                />
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/[0.02] border border-white/5 rounded-full">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-400"
            />
            <span className="text-gray-400 text-sm">Available for collaborations</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SocialContact;