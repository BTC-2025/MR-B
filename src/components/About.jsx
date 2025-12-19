// components/About.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue, useAnimationControls } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [hoveredMetric, setHoveredMetric] = useState(null);

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.05);
        mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.05);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const metrics = [
    { value: '10', suffix: '+', label: 'Years of Leadership', color: 'blue' },
    { value: '5', suffix: '+', label: 'Countries Impacted', color: 'purple' },
    { value: '20k', suffix: '+', label: 'Lives Touched', color: 'pink' },
  ];

  // Text reveal animation - word by word
  const sentence = "To make the world kinder, safer, and more equal for everyone.";
  const words = sentence.split(' ');

  // Character scramble effect component
  const ScrambleText = ({ text, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    const [isScrambling, setIsScrambling] = useState(true);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    useEffect(() => {
      if (!isInView) return;

      let iteration = 0;
      const targetText = text.toUpperCase();

      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setDisplayText(
            targetText
              .split('')
              .map((char, idx) => {
                if (char === ' ') return ' ';
                if (idx < iteration) return targetText[idx];
                return chars[Math.floor(Math.random() * chars.length)];
              })
              .join('')
          );

          if (iteration >= targetText.length) {
            clearInterval(interval);
            setIsScrambling(false);
          }
          iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }, [isInView, text, delay]);

    return <span className={isScrambling ? 'text-gray-500' : 'text-white'}>{displayText || text.toUpperCase()}</span>;
  };

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#030303] overflow-hidden py-32 lg:py-40">

      {/* Animated floating shapes */}
      <motion.div style={{ y: y1, rotate: rotate1, x: smoothMouseX }}
        className="absolute top-20 right-20 w-64 h-64 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-xl"
        />
      </motion.div>

      <motion.div style={{ y: y2, x: smoothMouseY }}
        className="absolute bottom-40 left-20 w-48 h-48 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full bg-gradient-to-br from-pink-600/10 to-orange-600/10 rounded-full blur-2xl"
        />
      </motion.div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 8, delay: i * 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"
            style={{ top: `${20 + i * 20}%`, width: '100%' }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">

        {/* Section Label with line animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-8 flex items-center gap-4"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 48 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-blue-500 to-purple-500"
          />
          <span className="text-gray-500 text-sm tracking-[0.3em] uppercase font-light">
            <ScrambleText text="About" delay={800} />
          </span>
        </motion.div>

        {/* Main headline with staggered word reveal */}
        <div className="mb-16 overflow-hidden">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-white leading-[1.1]"
          >
            {['Guiding', 'companies', 'with'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 100, opacity: 0, rotateX: -90 }}
                animate={isInView ? { y: 0, opacity: 1, rotateX: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block font-medium bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              one unwavering mission
            </motion.span>
          </motion.h2>
        </div>

        {/* Animated word-by-word reveal */}
        <motion.div
          ref={textRef}
          className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light leading-relaxed mb-20 max-w-4xl"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{
                duration: 0.6,
                delay: 1 + i * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`inline-block mr-2 ${['kinder,', 'safer,', 'equal'].includes(word)
                  ? 'text-white font-medium'
                  : ''
                }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left - Text content with reveal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            className="space-y-8"
          >
            <p className="text-lg text-gray-400 leading-relaxed">
              My work is driven by the belief that progress has meaning only when it uplifts
              people across borders, cultures, and communities. I am committed to building
              organizations that operate with purpose—where innovation, responsibility,
              and humanity go hand in hand.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Through my ventures, I strive to create a society where individuals from
              every country are treated with dignity and equality, free from discrimination
              and division.
            </p>

            {/* Animated quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 2 }}
              className="relative"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: '100%' } : {}}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"
              />
              <p className="pl-6 text-lg text-white/90 italic">
                "This vision is not just an idea; it is the foundation on which
                every company I lead is built."
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Right - Metrics with magnetic hover */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 1.7 }}
            className="space-y-12"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
                onHoverStart={() => setHoveredMetric(index)}
                onHoverEnd={() => setHoveredMetric(null)}
                whileHover={{ x: 20 }}
                className="group cursor-default relative"
              >
                {/* Hover background */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredMetric === index ? 1 : 0 }}
                  className={`absolute inset-0 -left-4 bg-gradient-to-r from-${metric.color}-500/10 to-transparent origin-left rounded-lg`}
                />

                <div className="relative flex items-baseline gap-6">
                  {/* Animated counter effect */}
                  <div className="flex items-baseline">
                    <motion.span
                      className="text-6xl md:text-7xl font-extralight text-white tracking-tight"
                      animate={hoveredMetric === index ? { scale: 1.05 } : { scale: 1 }}
                    >
                      {metric.value}
                    </motion.span>
                    <motion.span
                      className={`text-3xl font-light text-${metric.color}-400`}
                      animate={hoveredMetric === index ? { y: -5 } : { y: 0 }}
                    >
                      {metric.suffix}
                    </motion.span>
                  </div>
                  <span className="text-gray-500 text-sm uppercase tracking-widest">
                    {metric.label}
                  </span>
                </div>

                {/* Animated underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredMetric === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`h-px w-32 bg-gradient-to-r from-${metric.color}-500 to-transparent mt-4 origin-left`}
                />
              </motion.div>
            ))}

            {/* Animated values orbit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 2.5 }}
              className="relative w-56 h-56 mx-auto lg:mx-0 mt-12"
            >
              {/* Pulsing center */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl"
              />

              {/* Spinning rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-white/5"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-white/10"
              />

              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-3xl text-white/80"
                >
                  ∞
                </motion.span>
              </div>

              {/* Orbiting dots */}
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20 + i * 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0"
                  style={{ rotate: deg }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981'][i]
                        }, transparent)`
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;