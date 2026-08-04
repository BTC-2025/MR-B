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

      {/* Building with Purpose — Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto px-8 lg:px-16 mb-28 text-center"
      >
        {/* Eyebrow line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
          <span className="text-amber-400/80 text-xs tracking-[0.35em] uppercase font-medium">Philosophy</span>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
        </div>

        {/* Main heading */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white mb-6 leading-tight">
          Building with{' '}
          <span className="font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            Purpose
          </span>
        </h3>

        {/* Body copy */}
        <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Every venture begins with a problem worth solving. From enterprise software to creative storytelling,
          I focus on building products, brands, and experiences that create meaningful impact.
        </p>

        {/* Keyword chips */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { label: 'Enterprise Software', color: 'border-blue-500/30 text-blue-400 bg-blue-500/5' },
            { label: 'Creative Storytelling', color: 'border-amber-500/30 text-amber-400 bg-amber-500/5' },
            { label: 'Product Design',       color: 'border-purple-500/30 text-purple-400 bg-purple-500/5' },
            { label: 'Brand Building',       color: 'border-pink-500/30 text-pink-400 bg-pink-500/5' },
            { label: 'Meaningful Impact',    color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' },
          ].map((chip, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                show:   { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
              }}
              className={`px-4 py-1.5 rounded-full border text-xs font-medium tracking-wide ${chip.color}`}
            >
              {chip.label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

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

      {/* Industries I Build For */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 mt-32 pt-20 border-t border-white/5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4 block">Sectors</span>
          <h3 className="text-4xl md:text-5xl font-extralight text-white">
            Industries I <span className="font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">Build For</span>
          </h3>
        </motion.div>

        {/* Industry Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { emoji: '🏢', name: 'Enterprise',  desc: 'Scalable software for modern businesses.',         accent: '#3B82F6', glow: 'rgba(59,130,246,0.15)',  border: 'rgba(59,130,246,0.25)'  },
            { emoji: '🎬', name: 'Media',       desc: 'Digital platforms for creative storytelling.',    accent: '#F59E0B', glow: 'rgba(245,158,11,0.15)',  border: 'rgba(245,158,11,0.25)'  },
            { emoji: '🏦', name: 'Finance',     desc: 'Reliable systems for financial operations.',      accent: '#10B981', glow: 'rgba(16,185,129,0.15)',  border: 'rgba(16,185,129,0.25)'  },
            { emoji: '🎓', name: 'Education',   desc: 'Technology that enhances learning.',              accent: '#8B5CF6', glow: 'rgba(139,92,246,0.15)',   border: 'rgba(139,92,246,0.25)'  },
            { emoji: '🛒', name: 'Retail',      desc: 'Solutions for modern commerce.',                  accent: '#EC4899', glow: 'rgba(236,72,153,0.15)',   border: 'rgba(236,72,153,0.25)'  },
            { emoji: '🚚', name: 'Logistics',   desc: 'Software for supply chain efficiency.',           accent: '#F97316', glow: 'rgba(249,115,22,0.15)',   border: 'rgba(249,115,22,0.25)'  },
          ].map((industry, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md cursor-default overflow-hidden transition-all duration-300"
              style={{ '--accent': industry.accent }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = industry.border;
                e.currentTarget.style.boxShadow  = `0 0 40px -10px ${industry.glow}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow  = '';
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${industry.accent}, transparent)` }}
              />

              {/* Emoji */}
              <span className="text-4xl mb-4 block">{industry.emoji}</span>

              {/* Name */}
              <h4 className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 mb-2">
                {industry.name}
              </h4>

              {/* Divider */}
              <div
                className="w-8 h-px mb-3 transition-all duration-300 group-hover:w-16"
                style={{ background: industry.accent, opacity: 0.6 }}
              />

              {/* Description */}
              <p className="text-sm text-gray-500 font-light leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                {industry.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>


    </section>
  );
};

export default Companies;