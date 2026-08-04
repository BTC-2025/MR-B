/* eslint-disable jsx-a11y/anchor-is-valid */
// components/Companies.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

// Import logos
import bPicturesLogo from '../assets/B (9).png';
import betaSoftnetLogo from '../assets/logo.png';

const Companies = () => {
  const containerRef = useRef(null);
  const bPicturesRef = useRef(null);

  const [timelinePercent, setTimelinePercent] = useState(50);

  useEffect(() => {
    const stages = [0, 20, 50, 80, 100];
    const timer = setInterval(() => {
      setTimelinePercent((prev) => {
        const idx = stages.indexOf(prev);
        const nextIdx = (idx + 1) % stages.length;
        return stages[nextIdx];
      });
    }, 2500);
    return () => clearInterval(timer);
  }, []);

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

      {/* Storytelling UI */}
      <div className="max-w-6xl mx-auto px-8 lg:px-16 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gray-500 text-xs tracking-[0.25em] uppercase mb-3 block">The Process</span>
          <h4 className="text-2xl md:text-3xl font-extralight text-white/95">
            Every great product begins with...
          </h4>
        </motion.div>

        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-6 relative">
          
          {/* Connecting Line Backdrop for Desktop */}
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-amber-500/20 via-indigo-500/20 via-purple-500/20 via-rose-500/20 to-emerald-500/20 z-0 pointer-events-none" />

          {[
            { step: "01", label: "An Idea", emoji: "💡", color: "from-amber-400 to-yellow-500", glow: "rgba(245,158,11,0.25)", border: "border-amber-500/20 shadow-[0_0_20px_-5px_rgba(245,158,11,0.1)]", hoverBorder: "hover:border-amber-400/40" },
            { step: "02", label: "A Problem", emoji: "🧩", color: "from-purple-400 to-indigo-500", glow: "rgba(139,92,246,0.25)", border: "border-purple-500/20 shadow-[0_0_20px_-5px_rgba(139,92,246,0.1)]", hoverBorder: "hover:border-purple-400/40" },
            { step: "03", label: "A Solution", emoji: "⚙", color: "from-blue-400 to-cyan-500", glow: "rgba(59,130,246,0.25)", border: "border-blue-500/20 shadow-[0_0_20px_-5px_rgba(59,130,246,0.1)]", hoverBorder: "hover:border-blue-400/40" },
            { step: "04", label: "Execution", emoji: "🚀", color: "from-rose-400 to-red-500", glow: "rgba(244,63,94,0.25)", border: "border-rose-500/20 shadow-[0_0_20px_-5px_rgba(244,63,94,0.1)]", hoverBorder: "hover:border-rose-400/40" },
            { step: "05", label: "Impact", emoji: "🌍", color: "from-emerald-400 to-teal-500", glow: "rgba(16,185,129,0.25)", border: "border-emerald-500/20 shadow-[0_0_20px_-5px_rgba(16,185,129,0.1)]", hoverBorder: "hover:border-emerald-400/40" }
          ].map((item, index) => (
            <React.Fragment key={index}>
              {/* Card item */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`flex-1 w-full max-w-[240px] relative z-10 flex flex-col items-center p-6 rounded-2xl bg-white/[0.01] border backdrop-blur-md transition-all duration-300 ${item.border} ${item.hoverBorder}`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 35px -5px ${item.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                {/* Accent Top Gradient bar */}
                <div className={`absolute top-0 left-0 w-full h-[3px] rounded-t-2xl bg-gradient-to-r ${item.color}`} />

                {/* Step number */}
                <span className="text-[10px] font-mono text-gray-500 tracking-wider mb-4 uppercase">STEP {item.step}</span>

                {/* Emoji Circle Container */}
                <motion.div 
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} p-[1.5px] mb-4 shadow-lg`}
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center text-3xl select-none">
                    {item.emoji}
                  </div>
                </motion.div>

                {/* Title */}
                <h5 className="text-lg font-medium text-gray-200 text-center">
                  {item.label}
                </h5>
              </motion.div>

              {/* Vertical arrow / indicator for mobile; hidden on desktop */}
              {index < 4 && (
                <div className="lg:hidden flex items-center justify-center my-2 text-gray-600 text-lg">
                  ↓
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Product Formula Section */}
      <div className="max-w-4xl mx-auto px-8 lg:px-16 mb-32 relative">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0 opacity-15" />
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative z-10"
        >
          <span className="text-gray-500 text-xs tracking-[0.25em] uppercase mb-3 block">The Formula</span>
          <h4 className="text-3xl md:text-4xl font-extralight text-white">
            What Makes a <span className="font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Great Product</span>?
          </h4>
        </motion.div>

        {/* Staggered Formula Flow */}
        <div className="relative flex flex-col items-center gap-6 max-w-xl mx-auto z-10">
          
          {/* Vertical Connecting line passing behind cards */}
          <div className="absolute top-10 bottom-10 w-[1px] bg-gradient-to-b from-amber-500/10 via-purple-500/10 to-emerald-500/10 pointer-events-none z-0" />

          {[
            { label: "Innovation", emoji: "💡", align: "left", color: "border-amber-500/20 text-amber-400", glow: "rgba(245,158,11,0.2)" },
            { label: "Purpose", emoji: "🏛", align: "right", color: "border-indigo-500/20 text-indigo-400", glow: "rgba(99,102,241,0.2)" },
            { label: "Quality", emoji: "⭐", align: "left", color: "border-rose-500/20 text-rose-400", glow: "rgba(244,63,94,0.2)" },
            { label: "Reliability", emoji: "🛡️", align: "right", color: "border-blue-500/20 text-blue-400", glow: "rgba(59,130,246,0.2)" },
            { label: "Growth", emoji: "📈", align: "left", color: "border-purple-500/20 text-purple-400", glow: "rgba(139,92,246,0.2)" },
            { label: "Impact", emoji: "🌍", align: "right", color: "border-emerald-500/20 text-emerald-400", glow: "rgba(16,185,129,0.2)" },
          ].map((item, index) => (
            <div key={index} className="w-full flex flex-col items-center relative">
              
              {/* Card Container */}
              <motion.div
                initial={{ opacity: 0, x: item.align === "left" ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.08 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className={`w-64 p-5 rounded-xl border bg-slate-950/80 backdrop-blur-md relative z-10 transition-all duration-300 ${item.color} ${
                  item.align === "left" ? "self-start mr-auto sm:ml-8" : "self-end ml-auto sm:mr-8"
                }`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 30px -5px ${item.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                {/* ASCII corner borders for retro aesthetics */}
                <div className="absolute top-2 left-2 text-[10px] text-white/10 font-mono select-none">┌</div>
                <div className="absolute top-2 right-2 text-[10px] text-white/10 font-mono select-none">┐</div>
                <div className="absolute bottom-2 left-2 text-[10px] text-white/10 font-mono select-none">└</div>
                <div className="absolute bottom-2 right-2 text-[10px] text-white/10 font-mono select-none">┘</div>

                <div className="flex flex-col items-center py-2">
                  <span className="text-3xl mb-2 filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]">{item.emoji}</span>
                  <span className="text-sm font-semibold tracking-wider uppercase text-gray-200">{item.label}</span>
                </div>
              </motion.div>

              {/* Plus Sign Connector below the card */}
              {index < 5 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.2 }}
                  className="my-2 text-lg font-mono text-gray-500 font-bold z-10"
                >
                  +
                </motion.div>
              )}
            </div>
          ))}

          {/* Equal Sign Connector */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.8 }}
            viewport={{ once: true }}
            className="text-xl font-mono text-gray-400 font-bold my-3"
          >
            =
          </motion.div>

          {/* Centered Final Result Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
            whileHover={{ scale: 1.05 }}
            className="w-80 p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 via-slate-950/50 to-teal-950/20 backdrop-blur-xl relative z-10 text-center shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)] hover:border-emerald-400/50 transition-all duration-300"
          >
            <div className="absolute top-2 left-2 text-[10px] text-emerald-400/20 font-mono select-none">┌</div>
            <div className="absolute top-2 right-2 text-[10px] text-emerald-400/20 font-mono select-none">┐</div>
            <div className="absolute bottom-2 left-2 text-[10px] text-emerald-400/20 font-mono select-none">└</div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-400/20 font-mono select-none">┘</div>

            <div className="flex flex-col items-center py-4">
              <span className="text-4xl mb-3 animate-[bounce_2s_infinite]">🚀</span>
              <h5 className="text-2xl font-black tracking-widest uppercase bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Great Product
              </h5>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2 font-mono">The Ultimate Outcome</p>
            </div>
          </motion.div>

        </div>
      </div>
      {/* Hourglass Section */}
      <div className="max-w-5xl mx-auto px-8 lg:px-16 mb-32 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gray-500 text-xs tracking-[0.25em] uppercase mb-3 block">Perspective</span>
          <h4 className="text-3xl md:text-4xl font-extralight text-white">
            The Alignment of <span className="font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Time</span>
          </h4>
          <p className="text-gray-500 text-xs mt-3 font-light tracking-wide max-w-md mx-auto leading-relaxed">
            Converting immediate market momentum into lasting structural equity.
          </p>
        </motion.div>

        {/* Hourglass Component Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center max-w-4xl mx-auto relative">
          
          {/* Left Column: Top Bulb Concepts */}
          <div className="flex flex-col gap-5 order-2 lg:order-1">
            <div className="text-right hidden lg:block mb-4">
              <span className="text-[10px] font-mono text-amber-500/80 tracking-widest uppercase">Bulb 01 — The Present</span>
              <h5 className="text-base font-semibold text-white/90 mt-1">Temporal Value</h5>
            </div>
            {[
              { title: "Trends", desc: "Capitalizing on market shifts and emerging technology patterns.", icon: "📈", color: "border-amber-500/20 hover:border-amber-400/40", glow: "rgba(245,158,11,0.15)" },
              { title: "Attention", desc: "Earning visibility and user focus in a highly competitive space.", icon: "⚡", color: "border-orange-500/20 hover:border-orange-400/40", glow: "rgba(249,115,22,0.15)" },
              { title: "Today", desc: "Executing immediate requirements with agility and speed.", icon: "🕒", color: "border-yellow-500/20 hover:border-yellow-400/40", glow: "rgba(234,179,8,0.15)" }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, x: 5 }}
                className={`p-5 rounded-2xl border bg-slate-950/80 backdrop-blur-md relative overflow-hidden transition-all duration-300 ${card.color}`}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 10px 30px -5px ${card.glow}`; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">{card.icon}</span>
                  <div>
                    <h6 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">{card.title}</h6>
                    <p className="text-xs text-gray-500 font-light mt-1.5 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Column: Animated SVG Hourglass with Staggered Sand Timeline */}
          <div className="flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-64 h-[420px] flex items-center justify-center">
              
              {/* Outer soft ambient glows */}
              <div className="absolute top-1/4 w-32 h-32 rounded-full bg-amber-500/5 blur-[50px] pointer-events-none" />
              <div className="absolute bottom-1/4 w-32 h-32 rounded-full bg-emerald-500/5 blur-[50px] pointer-events-none" />

              {/* Hourglass SVG */}
              <svg 
                className="w-full h-full drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]" 
                viewBox="0 0 320 480"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Glass shell gradient */}
                  <linearGradient id="glassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(245,158,11,0.25)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
                    <stop offset="100%" stopColor="rgba(16,185,129,0.25)" />
                  </linearGradient>

                  {/* Sand color gradient */}
                  <linearGradient id="sandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>

                {/* Top/Bottom Wooden Plates */}
                <rect x="60" y="30" width="200" height="15" rx="5" fill="#1e293b" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <rect x="60" y="435" width="200" height="15" rx="5" fill="#1e293b" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

                {/* Left/Right Frame Pillars */}
                <line x1="75" y1="45" x2="75" y2="435" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
                <line x1="245" y1="45" x2="245" y2="435" stroke="#334155" strokeWidth="6" strokeLinecap="round" />

                {/* Upper Sand Bulb (Decreasing Level Effect) */}
                <path 
                  d="M 98 120 Q 160 215 156 240 Q 160 215 222 120 Z" 
                  fill="url(#sandGrad)"
                  opacity="0.25"
                  style={{
                    transform: `scaleY(${(100 - timelinePercent) / 100})`,
                    transformOrigin: '160px 240px',
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
                
                {/* Lower Sand Pile (Accumulating Level Effect) */}
                <path 
                  d="M 156 240 Q 160 265 98 360 L 222 360 Q 160 265 164 240 Z" 
                  fill="url(#sandGrad)"
                  opacity="0.3"
                  style={{
                    transform: `scaleY(${timelinePercent / 100})`,
                    transformOrigin: '160px 360px',
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />

                {/* Hourglass Glass Shell Silhouette */}
                <path 
                  d="M 90 80 Q 160 220 155 240 Q 160 260 90 400 L 230 400 Q 160 260 165 240 Q 160 220 230 80 Z" 
                  fill="none" 
                  stroke="url(#glassGrad)" 
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Specular highlight lines (Glossy glass effect) */}
                <path d="M 100 95 C 105 130 135 180 145 200" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <path d="M 220 385 C 215 350 185 300 175 280" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

                {/* Staggered Triangles Sand Stacking Layer */}
                <g className="font-sans text-[11px] font-black select-none pointer-events-none tracking-normal" textAnchor="middle">
                  {/* Row 4 (Bottom - Base: 7 triangles) */}
                  {timelinePercent >= 100 && (
                    <text x="160" y="358" fill="#10B981" className="drop-shadow-[0_0_8px_rgba(16,185,129,0.7)]">▼▼▼▼▼▼▼</text>
                  )}
                  {/* Row 3 (5 triangles) */}
                  {timelinePercent >= 80 && (
                    <text x="160" y="347" fill="#10B981" className="drop-shadow-[0_0_8px_rgba(16,185,129,0.75)]">▼▼▼▼▼</text>
                  )}
                  {/* Row 2 (3 triangles) */}
                  {timelinePercent >= 50 && (
                    <text x="160" y="336" fill="#10B981" className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">▼▼▼</text>
                  )}
                  {/* Row 1 (Top - Apex: 1 triangle) */}
                  {timelinePercent >= 20 && (
                    <text x="160" y="325" fill="#F59E0B" className="drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]">▼</text>
                  )}
                </g>

                {/* Animated Falling Sand Stream (Active only when 0 < pct < 100) */}
                {timelinePercent > 0 && timelinePercent < 100 && [0, 1, 2, 3, 4, 5].map((delay) => (
                  <circle key={delay} r="2.5" fill="#F59E0B" opacity="0.8">
                    <animate 
                      attributeName="cy" 
                      from="240" 
                      to="380" 
                      dur="1.2s" 
                      begin={`${delay * 0.2}s`}
                      repeatCount="indefinite" 
                    />
                    <animate 
                      attributeName="cx" 
                      values="160;158;162;160" 
                      dur="1.2s" 
                      begin={`${delay * 0.2}s`}
                      repeatCount="indefinite" 
                    />
                    <animate 
                      attributeName="opacity" 
                      values="1;0.9;0.7;0" 
                      dur="1.2s" 
                      begin={`${delay * 0.2}s`}
                      repeatCount="indefinite" 
                    />
                  </circle>
                ))}

                {/* Splash dots at the bottom bulb sand surface */}
                {timelinePercent > 0 && timelinePercent < 100 && (
                  <>
                    <circle cx="160" cy="370" r="1.5" fill="#10B981">
                      <animate attributeName="opacity" values="0;1;0" dur="0.4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="155" cy="372" r="1" fill="#10B981">
                      <animate attributeName="opacity" values="0;1;0" dur="0.6s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="165" cy="371" r="1" fill="#10B981">
                      <animate attributeName="opacity" values="0;1;0" dur="0.5s" repeatCount="indefinite" />
                    </circle>
                  </>
                )}

              </svg>

              {/* Centered Hourglass Icon Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] select-none pointer-events-none opacity-20">
                ⌛
              </div>

            </div>
          </div>

          {/* Right Column: Bottom Bulb Concepts */}
          <div className="flex flex-col gap-5 order-3">
            <div className="text-left hidden lg:block mb-4">
              <span className="text-[10px] font-mono text-emerald-500/80 tracking-widest uppercase">Bulb 02 — The Future</span>
              <h5 className="text-base font-semibold text-white/90 mt-1">Enduring Value</h5>
            </div>
            {[
              { title: "Trust", desc: "Nurturing deep client relations through transparency and integrity.", icon: "🤝", color: "border-emerald-500/20 hover:border-emerald-400/40", glow: "rgba(16,185,129,0.15)" },
              { title: "Impact", desc: "Constructing platforms that provide scalable real-world solutions.", icon: "🌍", color: "border-teal-500/20 hover:border-teal-400/40", glow: "rgba(20,184,166,0.15)" },
              { title: "Tomorrow", desc: "Building modular systems built to grow and scale for years.", icon: "🚀", color: "border-cyan-500/20 hover:border-cyan-400/40", glow: "rgba(6,182,212,0.15)" }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, x: -5 }}
                className={`p-5 rounded-2xl border bg-slate-950/80 backdrop-blur-md relative overflow-hidden transition-all duration-300 ${card.color}`}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 10px 30px -5px ${card.glow}`; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">{card.icon}</span>
                  <div>
                    <h6 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">{card.title}</h6>
                    <p className="text-xs text-gray-500 font-light mt-1.5 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>


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