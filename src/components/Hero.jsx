// src/components/Hero.jsx
import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import heroImage from '../assets/mrb4.jpg';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef(null);

    // Mouse tracking for interactive effects
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    // Transform mouse position to rotation values
    const rotateX = useTransform(smoothMouseY, [-300, 300], [10, -10]);
    const rotateY = useTransform(smoothMouseX, [-300, 300], [-10, 10]);

    useEffect(() => {
        setIsLoaded(true);

        const handleMouseMove = (e) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                mouseX.set(e.clientX - rect.left - rect.width / 2);
                mouseY.set(e.clientY - rect.top - rect.height / 2);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const letterVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: { delay: 0.5 + i * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        })
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen bg-[#0a0a0a] overflow-hidden cursor-crosshair"
        >
            {/* Grain overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none z-50"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Dynamic grid that follows mouse */}
            <motion.div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `
            linear-gradient(90deg, white 1px, transparent 1px),
            linear-gradient(white 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px',
                    x: useTransform(smoothMouseX, [-300, 300], [-20, 20]),
                    y: useTransform(smoothMouseY, [-300, 300], [-20, 20]),
                }}
            />

            {/* Asymmetric color blobs */}
            <motion.div
                className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
                    x: useTransform(smoothMouseX, [-300, 300], [30, -30]),
                    y: useTransform(smoothMouseY, [-300, 300], [30, -30]),
                }}
            />
            <motion.div
                className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)',
                    x: useTransform(smoothMouseX, [-300, 300], [-20, 20]),
                    y: useTransform(smoothMouseY, [-300, 300], [-20, 20]),
                }}
            />

            {/* Main content container - Diagonal split layout */}
            <div className="relative z-10 min-h-screen flex">

                {/* Left side - Giant typography */}
                <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20">

                    {/* Oversized outlined text */}
                    <div className="overflow-hidden mb-8">
                        <motion.h1
                            className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-black leading-[0.85] tracking-tighter"
                            style={{ perspective: 1000 }}
                        >
                            {['C', 'R', 'E', 'A', 'T', 'I', 'V', 'E'].map((letter, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={letterVariants}
                                    initial="hidden"
                                    animate={isLoaded ? "visible" : "hidden"}
                                    className="inline-block text-transparent"
                                    style={{
                                        WebkitTextStroke: '1px rgba(255,255,255,0.3)',
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </div>

                    {/* Solid text with gradient */}
                    <div className="overflow-hidden mb-12">
                        <motion.h2
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight"
                        >
                            <span className="text-white">VISION</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">ARY</span>
                        </motion.h2>
                    </div>

                    {/* Minimal description with unique formatting */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="max-w-md space-y-4 mb-12"
                    >
                        <p className="text-gray-500 text-lg leading-relaxed">
                            <span className="text-white font-medium">Mr. B</span> —
                            Transforming abstract concepts into tangible experiences.
                            Where innovation meets execution.
                        </p>

                        {/* Horizontal line with animation */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="h-px w-32 bg-gradient-to-r from-white to-transparent origin-left"
                        />
                    </motion.div>

                    {/* Unconventional CTA - Just text links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.6 }}
                        className="flex gap-12"
                    >
                        <a href="#work" className="group">
                            <span className="text-sm text-gray-500 block mb-1">01</span>
                            <span className="text-white font-medium group-hover:text-indigo-400 transition-colors">
                                View Work
                            </span>
                            <motion.div
                                className="h-px bg-indigo-400 mt-1"
                                initial={{ width: 0 }}
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.3 }}
                            />
                        </a>
                        <a href="#contact" className="group">
                            <span className="text-sm text-gray-500 block mb-1">02</span>
                            <span className="text-white font-medium group-hover:text-pink-400 transition-colors">
                                Let's Talk
                            </span>
                            <motion.div
                                className="h-px bg-pink-400 mt-1"
                                initial={{ width: 0 }}
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.3 }}
                            />
                        </a>
                    </motion.div>
                </div>

                {/* Right side - 3D tilting image card */}
                <div className="hidden lg:flex flex-1 items-center justify-center p-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: 'preserve-3d',
                            perspective: 1000,
                        }}
                        className="relative"
                    >
                        {/* Glowing backdrop */}
                        <div
                            className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl"
                            style={{
                                background: 'linear-gradient(135deg, rgba(99,102,241,0.4) 0%, rgba(236,72,153,0.4) 100%)',
                            }}
                        />

                        {/* Image container with clip-path */}
                        <div
                            className="relative w-[450px] h-[550px] rounded-2xl overflow-hidden border border-white/10"
                            style={{
                                transform: 'translateZ(50px)',
                            }}
                        >
                            <img
                                src={heroImage}
                                alt="Alex Carter"
                                className="object-fill"
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Floating info card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.5, duration: 0.6 }}
                                className="absolute bottom-0 left-0 right-0 p-6"
                                style={{ transform: 'translateZ(80px)' }}
                            >
                                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase tracking-wider">Status</p>
                                            <p className="text-white font-medium flex items-center gap-2">
                                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                                Available
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-gray-400 uppercase tracking-wider">Based in</p>
                                            <p className="text-white font-medium">San Francisco</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating elements around image */}
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 5, 0],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-8 -right-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30"
                            style={{ transform: 'translateZ(100px)' }}
                        >
                            <span className="text-white text-2xl font-bold">15+</span>
                        </motion.div>

                        <motion.div
                            animate={{
                                y: [0, 10, 0],
                                rotate: [0, -3, 0],
                            }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            className="absolute -bottom-4 -left-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20"
                            style={{ transform: 'translateZ(70px)' }}
                        >
                            <span className="text-white text-sm">★ Top Rated</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom marquee */}
            <div className="absolute bottom-0 left-0 right-0 py-4 border-t border-white/5 overflow-hidden">
                <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="flex gap-12 whitespace-nowrap"
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-12">
                            {['INNOVATION', 'DESIGN', 'STRATEGY', 'TECHNOLOGY', 'LEADERSHIP', 'VISION'].map((word, j) => (
                                <span key={j} className="text-gray-700 text-sm tracking-[0.3em] font-medium">
                                    {word} <span className="text-indigo-500">✦</span>
                                </span>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Vertical text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block"
            >
                <p
                    className="text-gray-600 text-xs tracking-[0.5em] uppercase"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    Scroll to explore
                </p>
            </motion.div>

            {/* Corner decoration */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="absolute top-8 right-8 w-3 h-3 border border-white/20 rounded-full"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9, duration: 0.5 }}
                className="absolute top-8 right-16 w-2 h-2 bg-indigo-500 rounded-full"
            />
        </section>
    );
};

export default Hero;