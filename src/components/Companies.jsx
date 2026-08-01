/* eslint-disable jsx-a11y/anchor-is-valid */
// components/Companies.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

// Import logos
import bPicturesLogo from '../assets/B (9).png';
import betaSoftnetLogo from '../assets/logo.png';

const Companies = () => {
  const containerRef = useRef(null);
  const bPicturesRef = useRef(null);

  // Main container scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // BPictures section scroll
  const { scrollYProgress: bPicturesProgress } = useScroll({
    target: bPicturesRef,
    offset: ["start end", "end start"]
  });

  // BPictures transforms
  const bpVisualX = useTransform(bPicturesProgress, [0, 0.5], [-100, 0]);
  const bpVisualOpacity = useTransform(bPicturesProgress, [0, 0.3], [0, 1]);
  const bpVisualRotate = useTransform(bPicturesProgress, [0, 0.5], [-10, 0]);
  const bpContentX = useTransform(bPicturesProgress, [0, 0.5], [100, 0]);
  const bpContentOpacity = useTransform(bPicturesProgress, [0.1, 0.4], [0, 1]);
  const bpLogoScale = useTransform(bPicturesProgress, [0.2, 0.5], [0.8, 1]);
  const bpLineWidth = useTransform(bPicturesProgress, [0.2, 0.5], ['0%', '100%']);
  const bpScale = useTransform(bPicturesProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);

  // Background parallax
  const bg1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const bg2Y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section id="work" ref={containerRef} className="relative bg-[#030303] py-32 overflow-hidden">

      {/* Parallax Background Elements */}
      <motion.div style={{ y: bg1Y }} className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />
      <motion.div style={{ y: bg2Y }} className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 mb-20">
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.15], [0, 1]),
            y: useTransform(scrollYProgress, [0, 0.15], [50, 0])
          }}
          className="text-center"
        >
          <span className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white">
            The <span className="font-bold bg-gradient-to-r from-amber-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Companies</span>
          </h2>
        </motion.div>
      </div>

      {/* Beta Softnet Logo */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0.08, 0.22], [50, 0]),
          opacity: useTransform(scrollYProgress, [0.08, 0.18], [0, 1])
        }}
        className="flex flex-col items-center justify-center mb-20 text-center px-4"
      >
        <div className="inline-flex items-center gap-6 mb-6">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-blue-500" />
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-28 h-28 bg-white rounded-2xl p-1 shadow-lg"
          >
            <img
              src={betaSoftnetLogo}
              alt="Beta Softnet"
              className="w-full h-full object-contain"
            />
          </motion.div>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-cyan-500" />
        </div>
        <p className="text-xl text-gray-400 font-light max-w-xl leading-relaxed">
          Let’s create the future together. Connect with us to explore opportunities!
        </p>
      </motion.div>

      {/* Divider with scroll animation */}
      <motion.div
        style={{ scaleX: useTransform(scrollYProgress, [0.15, 0.3], [0, 1]) }}
        className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-20 origin-center"
      />

      {/* ============ BPictures Section ============ */}
      <div ref={bPicturesRef} className="max-w-7xl mx-auto px-8 lg:px-16 mb-20">
        <motion.div style={{ scale: bpScale }} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Visual - Slides in from left */}
          <motion.div
            style={{ x: bpVisualX, opacity: bpVisualOpacity, rotateY: bpVisualRotate }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-900/40 to-orange-900/30 border border-amber-500/30 shadow-2xl shadow-amber-500/10">

              {/* Logo with scale animation */}
              <motion.div
                style={{ scale: bpLogoScale }}
                className="absolute inset-0 flex items-center justify-center p-12"
              >
                <img src={bPicturesLogo} alt="BPictures" className="w-full h-full object-contain" />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-6 right-6 px-5 py-3 bg-amber-500/30 backdrop-blur-xl rounded-full border border-amber-400/40"
              >
                <span className="text-amber-200 font-medium">Film Production</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-6 left-6 px-5 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
              >
                <span className="text-white/80">Creative Studio</span>
              </motion.div>
            </div>

            {/* Number */}
            <motion.div
              style={{ opacity: bpVisualOpacity }}
              className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-xl shadow-amber-500/40"
            >
              <span className="text-white font-bold text-3xl">01</span>
            </motion.div>
          </motion.div>

          {/* Content - Slides in from right */}
          <motion.div
            style={{ x: bpContentX, opacity: bpContentOpacity }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div>
              <motion.div
                style={{ width: bpLineWidth }}
                className="h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded mb-8"
              />
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-3">
                <span className="font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">B</span>Pictures
              </h3>
              <p className="text-xl text-gray-400 font-light">
                Cinematic Excellence & Visual Storytelling
              </p>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed">
              A premier film production company dedicated to crafting compelling
              visual narratives that captivate audiences worldwide.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {['Film', 'Documentary', 'Commercial', 'Post-Production'].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-400 transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>

            <a href="#" className="inline-flex items-center gap-2 text-amber-400 font-medium pt-4 group">
              Explore BPictures <FiArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
};

export default Companies;