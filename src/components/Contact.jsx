// components/Contact.jsx
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiCheck, FiArrowRight } from 'react-icons/fi';

const Contact = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isHovered, setIsHovered] = useState(null);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sending
        setIsSent(true);
        setTimeout(() => setIsSent(false), 3000);
        setFormState({ name: '', email: '', message: '' });
    };

    const contactMethods = [
        {
            icon: FiMail,
            label: 'Email',
            value: 'mrb.envoys@gmail.com',
            action: 'mailto:mrb.envoys@gmail.com',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: FiMapPin,
            label: 'Location',
            value: 'Global',
            action: '#',
            gradient: 'from-purple-500 to-pink-500'
        },
    ];

    return (
        <section id="contact" ref={containerRef} className="relative bg-[#030303] py-20 sm:py-32 overflow-hidden">

            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            {/* Floating gradient orbs */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"
            />
            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, delay: 2 }}
                className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none"
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">

                {/* The Spark — Intro block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="text-center mb-20"
                >
                    {/* Eyebrow label */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6"
                    >
                        <span className="text-sm">⚡</span>
                        <span className="text-xs font-medium tracking-widest uppercase text-gray-400">The Spark</span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-6 leading-tight"
                    >
                        Every Click Begins{' '}
                        <span className="font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            with an Idea
                        </span>
                    </motion.h2>

                    {/* Body paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        Behind every website is a story waiting to be told. Whether you're starting from a blank page or refining an existing vision, I'm here to transform ideas into experiences that are{' '}
                        <span className="text-gray-300 font-normal">intuitive</span>,{' '}
                        <span className="text-gray-300 font-normal">reliable</span>, and built with{' '}
                        <span className="font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">purpose</span>.
                    </motion.p>

                    {/* Decorative gradient separator */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mx-auto mt-10 w-24 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-center"
                    />
                </motion.div>

                {/* Header */}

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 mb-6"
                    >
                        <FiMail className="w-7 h-7 text-white" />
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6">
                        Get in{' '}
                        <span className="font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-500 max-w-xl mx-auto"
                    >
                        Have a project in mind? Let's create something extraordinary together.
                    </motion.p>
                </motion.div>

                {/* Glassmorphism Intro Card — full width */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative rounded-3xl overflow-hidden mb-16 max-w-2xl mx-auto"
                >
                    {/* Gradient border shimmer layer */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/25 via-purple-500/15 to-pink-500/25 pointer-events-none" />
                    <div className="absolute inset-[1px] rounded-[22px] bg-[#07080a]/85 backdrop-blur-xl pointer-events-none" />

                    {/* Decorative inner glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-purple-500/10 blur-2xl pointer-events-none rounded-full" />

                    {/* Card content */}
                    <div className="relative z-10 p-8 space-y-5 text-center">
                        {/* Heading */}
                        <div className="flex items-center justify-center gap-2.5">
                            <span className="text-2xl">✨</span>
                            <h3 className="text-xl font-bold text-white tracking-wide leading-snug">
                                Let's Build Something Meaningful
                            </h3>
                        </div>

                        {/* Body paragraph */}
                        <p className="text-sm text-gray-400 font-light leading-relaxed max-w-lg mx-auto">
                            Every great project starts with a conversation. Whether you're shaping a new idea, improving an existing product, or looking for a developer...
                        </p>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {/* Status badges — inline centered */}
                        <div className="flex items-center justify-center gap-8 flex-wrap">
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.45 }}
                                className="flex items-center gap-2"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                                </span>
                                <span className="text-xs font-mono text-gray-300">Open to Collaborations</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.55 }}
                                className="flex items-center gap-2"
                            >
                                <span className="text-sm leading-none">⚡</span>
                                <span className="text-xs font-mono text-gray-300">Usually replies within 24 hours</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Main content - Asymmetric layout */}
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

                    {/* Left side - Contact methods (2 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Speech Bubble Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden mb-2"
                        >
                            {/* Ambient background glow inside card */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-indigo-500/10 blur-xl pointer-events-none" />

                            <div className="space-y-4">
                                {/* Title with Speech Bubble Emoji */}
                                <div className="flex items-center gap-2.5">
                                    <span className="text-2xl animate-[bounce_3s_infinite]">💬</span>
                                    <h4 className="text-lg font-bold text-white tracking-wide">Let's Talk!</h4>
                                </div>

                                {/* Description */}
                                <p className="text-xs text-gray-400 font-light leading-relaxed">
                                    I'm always open to discussing new projects, freelance opportunities, collaborations, or simply answering your questions.
                                </p>

                                {/* Divider */}
                                <div className="h-px bg-white/10 my-4" />

                                {/* Check List */}
                                <ul className="space-y-2">
                                    {[
                                        'Friendly',
                                        'Fast Response',
                                        'Open to Collaboration'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-[11px] font-mono text-gray-300">
                                            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                                                ✓
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={method.label}
                                href={method.action}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                onMouseEnter={() => setIsHovered(index)}
                                onMouseLeave={() => setIsHovered(null)}
                                className="group block"
                            >
                                <motion.div
                                    animate={{ x: isHovered === index ? 10 : 0 }}
                                    className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all overflow-hidden"
                                >
                                    {/* Hover gradient */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isHovered === index ? 0.1 : 0 }}
                                        className={`absolute inset-0 bg-gradient-to-br ${method.gradient}`}
                                    />

                                    <div className="relative z-10 flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center`}>
                                            <method.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">{method.label}</p>
                                            <p className="text-white font-medium">{method.value}</p>
                                        </div>
                                        <motion.div
                                            animate={{ x: isHovered === index ? 5 : 0, opacity: isHovered === index ? 1 : 0 }}
                                            className="ml-auto"
                                        >
                                            <FiArrowRight className="w-5 h-5 text-white" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.a>
                        ))}

                        {/* Decorative element */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.8 }}
                            className="pt-8"
                        >
                            <div className="flex items-center gap-4">
                                <motion.div
                                    animate={{ width: [40, 80, 40] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="h-px bg-gradient-to-r from-blue-500 to-purple-500"
                                />
                                <span className="text-gray-600 text-xs tracking-widest">RESPONSE WITHIN 24H</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Contact form (3 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="relative">
                            {/* Form card */}
                            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10">

                                <div className="space-y-6">
                                    {/* Name field */}
                                    <div className="group">
                                        <label className="block text-gray-500 text-sm mb-2 group-focus-within:text-white transition-colors">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>

                                    {/* Email field */}
                                    <div className="group">
                                        <label className="block text-gray-500 text-sm mb-2 group-focus-within:text-white transition-colors">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>

                                    {/* Message field */}
                                    <div className="group">
                                        <label className="block text-gray-500 text-sm mb-2 group-focus-within:text-white transition-colors">
                                            Your Message
                                        </label>
                                        <textarea
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            rows={5}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                                            placeholder="Tell me about your project..."
                                            required
                                        />
                                    </div>

                                    {/* Submit button */}
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full py-4 rounded-xl font-medium text-white flex items-center justify-center gap-3 transition-all
                              ${isSent
                                                ? 'bg-green-500'
                                                : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/25'
                                            }`}
                                    >
                                        {isSent ? (
                                            <>
                                                <FiCheck className="w-5 h-5" />
                                                Message Sent!
                                            </>
                                        ) : (
                                            <>
                                                <FiSend className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </div>

                            {/* Decorative corner accents */}
                            <div className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-blue-500/50 rounded-tl-3xl" />
                            <div className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-purple-500/50 rounded-br-3xl" />
                        </form>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
