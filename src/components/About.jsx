// components/About.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue } from 'framer-motion';
import { FiLinkedin, FiCpu, FiTrendingUp } from 'react-icons/fi';


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
            <ScrambleText text="About" delay={800} isInView={isInView} />
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

        {/* LinkedIn Insights Section */}
        <div className="mt-32 pt-20 border-t border-white/5 relative overflow-hidden flex flex-col items-center w-full">

          {/* Ambient background glows */}
          <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />
          <div className="absolute bottom-1/3 right-1/4 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none z-0" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0 opacity-40" />

          {/* SVG Constellation background */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12%" cy="45%" r="2" fill="#818CF8" />
            <circle cx="22%" cy="75%" r="3" fill="#6366F1" />
            <circle cx="82%" cy="35%" r="3" fill="#6366F1" />
            <circle cx="92%" cy="65%" r="2" fill="#818CF8" />
            <line x1="12%" y1="45%" x2="22%" y2="75%" stroke="#4F46E5" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="82%" y1="35%" x2="92%" y2="65%" stroke="#4F46E5" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-8 relative z-10"
          >
            <span className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4 block">Updates</span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white">
              LinkedIn <span className="font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Insights</span>
            </h3>

            {/* Tagline Subtitle */}
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mt-4 text-gray-400 text-sm md:text-base font-light tracking-wide">
              <span>Ideas</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
              <span>Entrepreneurship</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60" />
              <span>Technology</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500/60" />
              <span>Leadership</span>
            </div>

            {/* Descriptive Text */}
            <p className="text-gray-400 text-sm md:text-base font-light max-w-2xl mx-auto mt-6 px-4 leading-relaxed">
              Discover recent takeaways and reflections on startup growth, system architecture, tech trends, and leadership practices shared directly on my feed.
            </p>
          </motion.div>

          {/* Glassmorphic Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-10 my-12 max-w-2xl mx-auto py-6 px-8 rounded-3xl bg-gradient-to-br from-indigo-950/10 via-slate-950/30 to-purple-950/10 border border-white/10 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(99,102,241,0.15)] hover:border-indigo-500/25 transition-colors duration-500"
          >
            <div className="text-center sm:flex-1 sm:border-r sm:border-white/5">
              <span className="block text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">25+</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mt-2 block">Posts</span>
            </div>
            <div className="text-center sm:flex-1 sm:border-r sm:border-white/5">
              <span className="block text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">15K+</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mt-2 block">Views</span>
            </div>
            <div className="text-center sm:flex-1">
              <span className="block text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">500+</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mt-2 block">Reactions</span>
            </div>
          </motion.div>

          {/* Centered Posts Container with Category Badges */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16 relative z-10 w-full">

            {/* Technology Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col gap-6 items-center"
            >
              {/* Modern Category Pill Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider shadow-[0_2px_10px_rgba(59,130,246,0.05)]">
                <FiCpu className="w-4 h-4 text-blue-400" />
                Technology
              </div>

              {/* Post 1 (Edge-to-Edge with Hover Glow Effects) */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 30px 60px -15px rgba(99, 102, 241, 0.35)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-[420px] h-[500px] overflow-hidden rounded-[2rem] shadow-2xl relative flex items-center justify-center flex-shrink-0 bg-white z-10"
              >
                {/* Scaled iframe */}
                <div
                  className="w-[504px] h-[600px] origin-center flex-shrink-0 flex items-center justify-center relative z-10"
                  style={{ transform: 'scale(0.8333)' }}
                >
                  <iframe
                    src="https://www.linkedin.com/embed/feed/update/urn:li:share:7455127471827496960?collapsed=1"
                    height="600"
                    width="504"
                    className="border-0 rounded-[2rem] shadow-2xl"
                    allowFullScreen=""
                    title="Embedded post"
                    scrolling="no"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>

            {/* Entrepreneurship Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col gap-6 items-center"
            >
              {/* Modern Category Pill Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider shadow-[0_2px_10px_rgba(168,85,247,0.05)]">
                <FiTrendingUp className="w-4 h-4 text-purple-400" />
                Entrepreneurship
              </div>

              {/* Post 2 (Collapsed with Glassmorphic Wrapper & Hover Effects) */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 30px 60px -15px rgba(99, 102, 241, 0.35)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-[420px] h-[500px] overflow-hidden rounded-[2rem] shadow-2xl relative flex items-center justify-center flex-shrink-0 bg-white z-10"
              >
                {/* Scaled iframe */}
                <div
                  className="w-[504px] h-[600px] origin-center flex-shrink-0 flex items-center justify-center relative z-10"
                  style={{ transform: 'scale(0.8333)' }}
                >
                  <iframe
                    src="https://www.linkedin.com/embed/feed/update/urn:li:share:7454859571640094720?collapsed=1"
                    height="600"
                    width="504"
                    className="border-0 rounded-[2rem] shadow-2xl"
                    allowFullScreen=""
                    title="Embedded post"
                    scrolling="no"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* Connect CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="mt-16 flex justify-center relative z-10"
          >
            <motion.a
              href="https://www.linkedin.com/feed/update/urn:li:share:7455127471827496960"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 35px rgba(219, 39, 119, 0.45)"
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 text-white font-medium hover:shadow-lg transition-all duration-300 shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]"
            >
              <FiLinkedin className="w-5 h-5" />
              Connect with me on LinkedIn
            </motion.a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// Character scramble effect component
const ScrambleText = ({ text, delay = 0, isInView }) => {
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

export default About;