import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const Feedback = () => {
  const containerRef = useRef(null);
  
  const [complaintType, setComplaintType] = useState('Bug'); // Bug, Design, Idea, Other
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [page, setPage] = useState('');
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('Minor'); // Minor, Moderate, Major
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Simulate sending feedback
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      // Reset form fields
      setName('');
      setEmail('');
      setPage('');
      setMessage('');
      setSeverity('Minor');
      setComplaintType('Bug');
    }, 3000);
  };

  return (
    <section id="feedback" ref={containerRef} className="relative bg-[#030303] py-28 overflow-hidden min-h-screen flex items-center justify-center">
      
      {/* Soft background grid lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Subtle background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-3xl mx-auto px-6 relative z-10">
        
        {/* Quote Title Block */}
        {/* Quote Title Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 35 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                ease: 'easeOut',
                staggerChildren: 0.15
              }
            }
          }}
          className="text-center mb-14 select-none relative"
        >
          {/* Radial ambient glow behind quote */}
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[220px] rounded-full bg-amber-500/5 blur-[70px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[140px] rounded-full bg-purple-500/5 blur-[50px]" />
          </div>

          {/* Floating 💬 bubble with gentle float loop animation */}
          <motion.div
            variants={{
              hidden: { scale: 0, rotate: -15 },
              visible: { 
                scale: 1, 
                rotate: 0,
                transition: { type: 'spring', stiffness: 200, damping: 14 }
              }
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{
              y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="text-6xl mb-8 inline-block filter drop-shadow-[0_4px_18px_rgba(251,191,36,0.18)]"
          >
            💬
          </motion.div>

          {/* Quote text */}
          <motion.blockquote
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
            }}
            className="relative max-w-xl mx-auto px-4"
          >
            {/* Ghost large opening quote */}
            <span className="absolute -top-6 left-0 text-7xl text-white/[0.04] font-serif leading-none select-none pointer-events-none">"</span>

            <p className="text-4xl md:text-5xl font-extralight text-gray-300 leading-[1.5] italic tracking-wide">
              Feedback isn't criticism—
              <br />
              <span className="text-3xl md:text-4xl font-light not-italic text-gray-400">it's the fastest path</span>
              <br />
              <span className="text-4xl md:text-5xl">
                to{' '}
                <span className="relative inline-block">
                  {/* Soft orange radial glow behind improvement */}
                  <span className="absolute inset-0 bg-orange-500/20 blur-[15px] rounded-full pointer-events-none -z-10 animate-[pulse_3s_infinite]" />
                  <span className="font-semibold not-italic bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,191,36,0.25)]">
                    improvement.
                  </span>
                </span>
              </span>
            </p>

            {/* Ghost large closing quote */}
            <span className="absolute -bottom-8 right-0 text-7xl text-white/[0.04] font-serif leading-none select-none pointer-events-none">"</span>
          </motion.blockquote>

          {/* Attribution + divider row */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6 } }
            }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-px bg-gradient-to-r from-transparent to-white/15" />
              <span className="text-sm font-mono text-gray-500 tracking-[0.25em]">— Mr.B</span>
              <div className="w-14 h-px bg-gradient-to-l from-transparent to-white/15" />
            </div>
            {/* Full-width subtle gradient divider */}
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
            
            {/* Call to Action in Hero */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="mt-6 text-[10px] font-mono text-amber-400/80 tracking-[0.25em] uppercase flex items-center justify-center gap-2 cursor-default"
            >
              <span>Drop your suggestions below</span>
              <span className="animate-[bounce_2s_infinite] inline-block">▼</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Wall of Honest Opinions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 border border-white/10 rounded-2xl bg-[#070708]/90 backdrop-blur-xl overflow-hidden relative shadow-2xl"
        >
          {/* Panel Title Bar */}
          <div className="px-6 py-4 border-b border-white/5 bg-white/[0.01] flex items-center gap-3">
            <span className="text-base">📌</span>
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-gray-300">
              The Wall of Honest Opinions
            </span>
            {/* Decorative right-side dots */}
            <div className="ml-auto flex items-center gap-1.5 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
            </div>
          </div>

          {/* Wall items */}
          <div className="p-6 space-y-0 divide-y divide-white/[0.04]">
            {[
              { emoji: "💬", color: "text-indigo-400", glow: "rgba(99,102,241,0.12)", text: "The best ideas don't always come from the person who builds them." },
              { emoji: "💡", color: "text-amber-400",  glow: "rgba(245,158,11,0.12)",  text: "Sometimes they come from the people who experience them." },
              { emoji: "🎯", color: "text-rose-400",   glow: "rgba(244,63,94,0.12)",   text: "Challenge my thinking." },
              { emoji: "🔍", color: "text-blue-400",   glow: "rgba(59,130,246,0.12)",  text: "Question my decisions." },
              { emoji: "🚀", color: "text-emerald-400",glow: "rgba(16,185,129,0.12)",  text: "Suggest a better way forward." },
              { emoji: "⭐", color: "text-yellow-400", glow: "rgba(234,179,8,0.12)",   text: "Every opinion has the potential to shape the next version." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 py-4 group cursor-default transition-all duration-200"
              >
                {/* Emoji badge */}
                <span
                  className={`text-xl leading-none mt-0.5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110 ${item.color}`}
                  style={{ filter: `drop-shadow(0 0 6px ${item.glow})` }}
                >
                  {item.emoji}
                </span>
                <p className="text-xs font-mono text-gray-400 group-hover:text-gray-300 transition-colors duration-200 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom decorative gradient line */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </motion.div>

        {/* Retro Terminal Panel */}


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 rounded-2xl bg-[#070708]/90 backdrop-blur-xl shadow-2xl overflow-hidden relative"
        >
          {/* Header Panel */}
          <div className="p-6 border-b border-white/10 text-center relative bg-white/[0.01]">
            {/* Window controls decoration on the left */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 select-none">
              <span className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/40" />
              <span className="w-3 h-3 rounded-full bg-amber-500/30 border border-amber-500/40" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/30 border border-emerald-500/40" />
            </div>

            <h2 className="text-xl font-bold tracking-wider text-white inline-flex items-center gap-2 select-none font-mono">
              📝 Complaint Box
            </h2>
            <p className="text-xs text-gray-500 mt-2 font-mono">
              Found something that can be improved? I'd love to hear it.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            
            {/* 1. Complaint Type Selector */}
            <div className="space-y-3">
              <label className="block text-xs font-mono font-bold tracking-widest uppercase text-gray-400">
                Complaint Type *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { type: "Bug", label: "Bug", emoji: "🐞", glow: "rgba(239,68,68,0.15)", activeBorder: "border-red-500/40", hoverBorder: "hover:border-red-500/25", color: "text-red-400" },
                  { type: "Design", label: "Design", emoji: "🎨", glow: "rgba(99,102,241,0.15)", activeBorder: "border-indigo-500/40", hoverBorder: "hover:border-indigo-500/25", color: "text-indigo-400" },
                  { type: "Idea", label: "Idea", emoji: "💡", glow: "rgba(245,158,11,0.15)", activeBorder: "border-amber-500/40", hoverBorder: "hover:border-amber-500/25", color: "text-amber-400" },
                  { type: "Other", label: "Other", emoji: "⚡", glow: "rgba(16,185,129,0.15)", activeBorder: "border-emerald-500/40", hoverBorder: "hover:border-emerald-500/25", color: "text-emerald-400" }
                ].map((item) => (
                  <button
                    key={item.type}
                    type="button"
                    onClick={() => setComplaintType(item.type)}
                    className={`relative p-3.5 rounded-xl border bg-slate-950/60 font-mono transition-all duration-300 flex items-center justify-center gap-2 select-none ${
                      complaintType === item.type 
                        ? `${item.activeBorder} text-white shadow-lg` 
                        : `border-white/5 text-gray-500 ${item.hoverBorder}`
                    }`}
                    style={complaintType === item.type ? { boxShadow: `0 0 20px -5px ${item.glow}` } : {}}
                  >
                    {/* Retro ASCII corners inside buttons */}
                    <div className="absolute top-1 left-1.5 text-[7px] text-white/5 font-mono select-none">┌</div>
                    <div className="absolute top-1 right-1.5 text-[7px] text-white/5 font-mono select-none">┐</div>
                    <div className="absolute bottom-1 left-1.5 text-[7px] text-white/5 font-mono select-none">└</div>
                    <div className="absolute bottom-1 right-1.5 text-[7px] text-white/5 font-mono select-none">┘</div>

                    <span className="text-base leading-none">{item.emoji}</span>
                    <span className={`text-xs font-semibold ${complaintType === item.type ? item.color : "text-gray-500"}`}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Your Name & Email Row */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Name Field */}
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="space-y-3 relative">
                <label className="block text-xs font-mono font-bold tracking-widest uppercase text-gray-300">
                  Your Name *
                </label>
                <div className="relative">
                  {/* Retro Corners */}
                  <div className="absolute top-2 left-2 text-[9px] text-white/20 font-mono select-none pointer-events-none">┌</div>
                  <div className="absolute top-2 right-2 text-[9px] text-white/20 font-mono select-none pointer-events-none">┐</div>
                  <div className="absolute bottom-2 left-2 text-[9px] text-white/20 font-mono select-none pointer-events-none">└</div>
                  <div className="absolute bottom-2 right-2 text-[9px] text-white/20 font-mono select-none pointer-events-none">┘</div>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0a0a0b] border border-white/10 focus:border-amber-500/50 focus:shadow-[0_0_18px_rgba(245,158,11,0.15)] rounded-xl px-5 py-3.5 text-xs text-white placeholder-gray-500 focus:outline-none transition-all font-mono"
                    placeholder="Enter your name..."
                    required
                  />
                </div>
              </motion.div>

              {/* Email Field */}
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="space-y-3 relative">
                <label className="block text-xs font-mono font-bold tracking-widest uppercase text-gray-400">
                  Email *
                </label>
                <div className="relative">
                  {/* Retro Corners */}
                  <div className="absolute top-2 left-2 text-[9px] text-white/20 font-mono select-none pointer-events-none">┌</div>
                  <div className="absolute top-2 right-2 text-[9px] text-white/20 font-mono select-none pointer-events-none">┐</div>
                  <div className="absolute bottom-2 left-2 text-[9px] text-white/20 font-mono select-none pointer-events-none">└</div>
                  <div className="absolute bottom-2 right-2 text-[9px] text-white/20 font-mono select-none pointer-events-none">┘</div>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0a0a0b] border border-white/10 focus:border-amber-500/50 focus:shadow-[0_0_18px_rgba(245,158,11,0.15)] rounded-xl px-5 py-3.5 text-xs text-white placeholder-gray-500 focus:outline-none transition-all font-mono"
                    placeholder="Enter your email address..."
                    required
                  />
                </div>
              </motion.div>

            </div>

            {/* 3. Which Page Dropdown */}
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="space-y-3 relative">
              <label className="block text-xs font-mono font-bold tracking-widest uppercase text-gray-300">
                Which page?
              </label>
              <div className="relative">
                {/* Retro Corners */}
                <div className="absolute top-2 left-2 text-[9px] text-white/20 font-mono select-none pointer-events-none">┌</div>
                <div className="absolute top-2 right-2 text-[9px] text-white/20 font-mono select-none pointer-events-none">┐</div>
                <div className="absolute bottom-2 left-2 text-[9px] text-white/20 font-mono select-none pointer-events-none">└</div>
                <div className="absolute bottom-2 right-2 text-[9px] text-white/20 font-mono select-none pointer-events-none">┘</div>

                <select
                  value={page}
                  onChange={(e) => setPage(e.target.value)}
                  className="w-full bg-[#0a0a0b] border border-white/10 focus:border-amber-500/50 focus:shadow-[0_0_18px_rgba(245,158,11,0.15)] rounded-xl px-5 py-3.5 text-xs text-white focus:outline-none transition-all appearance-none cursor-pointer font-mono pr-10"
                >
                  <option value="" className="text-gray-500">Select Page ▼</option>
                  <option value="Home" className="text-white bg-slate-950">Home (Business Focus)</option>
                  <option value="About" className="text-white bg-slate-950">About (Work Process)</option>
                  <option value="What I Build" className="text-white bg-slate-950">What I Build (Companies)</option>
                  <option value="Complaint Box" className="text-white bg-slate-950">Complaint Box</option>
                </select>
              </div>
            </motion.div>

            {/* 4. Suggestion text area */}
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="space-y-3 relative">
              <label className="block text-xs font-mono font-bold tracking-widest uppercase text-gray-300">
                Describe your complaint or suggestion *
              </label>
              <div className="relative">
                {/* Retro Corners */}
                <div className="absolute top-2 left-2 text-[9px] text-white/20 font-mono select-none pointer-events-none">┌</div>
                <div className="absolute top-2 right-2 text-[9px] text-white/20 font-mono select-none pointer-events-none">┐</div>
                <div className="absolute bottom-2 left-2 text-[9px] text-white/20 font-mono select-none pointer-events-none">└</div>
                <div className="absolute bottom-2 right-2 text-[9px] text-white/20 font-mono select-none pointer-events-none">┘</div>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full bg-[#0a0a0b] border border-white/10 focus:border-amber-500/50 focus:shadow-[0_0_18px_rgba(245,158,11,0.15)] rounded-xl px-5 py-4 text-xs text-white placeholder-gray-500 focus:outline-none transition-all resize-none font-mono"
                  placeholder="Tell me what you noticed..."
                  required
                />
              </div>
            </motion.div>

            {/* 5. Severity Selection & Submit button in row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-white/5">
              
              {/* Severity options */}
              <div className="space-y-2">
                <span className="block text-xs font-mono font-bold tracking-widest uppercase text-gray-400">
                  Severity
                </span>
                <div className="flex items-center gap-6">
                  {["Minor", "Moderate", "Major"].map((level) => (
                    <label key={level} className="flex items-center gap-2 cursor-pointer select-none font-mono text-xs">
                      <input
                        type="radio"
                        name="severity"
                        checked={severity === level}
                        onChange={() => setSeverity(level)}
                        className="hidden"
                      />
                      <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border transition-all ${
                        severity === level 
                          ? "border-amber-400 bg-amber-500/20" 
                          : "border-white/10 hover:border-white/20"
                      }`}>
                        {severity === level && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        )}
                      </span>
                      <span className={severity === level ? "text-amber-400 font-semibold" : "text-gray-500"}>
                        {level}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`px-8 py-4 rounded-xl font-mono text-xs font-black uppercase tracking-widest text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-300 select-none
                  ${isSent
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 shadow-emerald-500/20 border border-emerald-400/30'
                    : 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:shadow-[0_0_30px_rgba(249,115,22,0.45)] border border-amber-400/30'
                  }`}
              >
                {isSent ? (
                  <>
                    <FiCheck className="w-4 h-4 text-white animate-bounce" />
                    <span>Feedback Submitted</span>
                  </>
                ) : (
                  <>
                    <span>🚀</span>
                    <span>Submit Feedback</span>
                  </>
                )}
              </motion.button>

            </div>

          </form>

          {/* ASCII Border Frame lines for premium visual look */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        </motion.div>

        {/* Floating status alert */}
        <AnimatePresence>
          {isSent && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed bottom-8 right-8 bg-emerald-950/80 border border-emerald-500/30 backdrop-blur-md px-6 py-3.5 rounded-xl shadow-2xl z-50 flex items-center gap-3 font-mono text-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-300">Complaint submitted successfully! Thank you.</span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Feedback;
