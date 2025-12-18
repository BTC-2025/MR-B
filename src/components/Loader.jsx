// src/components/Loader.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState('initializing');

    const phases = [
        { name: 'initializing', label: 'INITIALIZING SYSTEM', duration: 15 },
        { name: 'loading', label: 'LOADING ASSETS', duration: 35 },
        { name: 'compiling', label: 'COMPILING MODULES', duration: 25 },
        { name: 'rendering', label: 'RENDERING INTERFACE', duration: 20 },
        { name: 'complete', label: 'LAUNCH READY', duration: 5 },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onComplete(), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 25);

        return () => clearInterval(interval);
    }, [onComplete]);

    useEffect(() => {
        if (progress < 15) setPhase('initializing');
        else if (progress < 50) setPhase('loading');
        else if (progress < 75) setPhase('compiling');
        else if (progress < 95) setPhase('rendering');
        else setPhase('complete');
    }, [progress]);

    const currentPhase = phases.find((p) => p.name === phase);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 z-[9999] bg-gray-950 flex items-center justify-center overflow-hidden"
            >
                {/* Background Grid Animation */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                linear-gradient(to right, #3b82f6 1px, transparent 1px),
                linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
              `,
                            backgroundSize: '40px 40px',
                        }}
                    />
                    <motion.div
                        className="absolute inset-0"
                        animate={{
                            backgroundPosition: ['0px 0px', '40px 40px'],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        style={{
                            backgroundImage: `
                linear-gradient(to right, #8b5cf6 1px, transparent 1px),
                linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
              `,
                            backgroundSize: '40px 40px',
                        }}
                    />
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                scale: Math.random() * 0.5 + 0.5,
                            }}
                            animate={{
                                y: [null, -window.innerHeight],
                                opacity: [0.3, 0],
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                {/* Main Loader Container */}
                <div className="relative z-10 flex flex-col items-center">
                    {/* Animated Tech Rings */}
                    <div className="relative w-48 h-48 mb-12">
                        {/* Outer Ring */}
                        <motion.div
                            className="absolute inset-0 rounded-full border-2 border-blue-500/20"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        >
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-3 h-3 bg-blue-500 rounded-full"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        transform: `rotate(${i * 45}deg) translateX(90px) translateY(-50%)`,
                                    }}
                                />
                            ))}
                        </motion.div>

                        {/* Middle Ring */}
                        <motion.div
                            className="absolute inset-6 rounded-full border border-purple-500/30"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                        >
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-2 h-2 bg-purple-500 rounded-full"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        transform: `rotate(${i * 60}deg) translateX(66px) translateY(-50%)`,
                                    }}
                                />
                            ))}
                        </motion.div>

                        {/* Inner Ring */}
                        <motion.div
                            className="absolute inset-12 rounded-full border border-cyan-500/40"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        >
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1.5 h-1.5 bg-cyan-500 rounded-full"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        transform: `rotate(${i * 90}deg) translateX(42px) translateY(-50%)`,
                                    }}
                                />
                            ))}
                        </motion.div>

                        {/* Center Core */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <div className="relative">
                                <motion.div
                                    className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500"
                                    animate={{
                                        boxShadow: [
                                            '0 0 20px rgba(59, 130, 246, 0.5)',
                                            '0 0 40px rgba(139, 92, 246, 0.7)',
                                            '0 0 20px rgba(59, 130, 246, 0.5)',
                                        ],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <div className="absolute inset-2 rounded-full bg-gray-950 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                        {progress}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-80 mb-6">
                        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.1 }}
                            />
                        </div>
                    </div>

                    {/* Status Text */}
                    <motion.div
                        key={phase}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-center"
                    >
                        <p className="text-sm font-mono text-blue-400 tracking-[0.3em] mb-2">
                            {currentPhase?.label}
                        </p>
                        <p className="text-xs text-gray-500 font-mono">
                            {progress}% COMPLETE
                        </p>
                    </motion.div>

                    {/* Tech Lines */}
                    <div className="absolute -left-32 top-1/2 -translate-y-1/2 space-y-2 hidden lg:block">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-500/50" />
                                <div className="w-2 h-2 rounded-full bg-blue-500/30" />
                            </motion.div>
                        ))}
                    </div>

                    <div className="absolute -right-32 top-1/2 -translate-y-1/2 space-y-2 hidden lg:block">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-2 h-2 rounded-full bg-purple-500/30" />
                                <div className="w-8 h-px bg-gradient-to-l from-transparent to-purple-500/50" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-8 left-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs font-mono text-gray-600"
                    >
                        <p>SYS.INIT</p>
                        <p className="text-blue-500/50">v2.0.1</p>
                    </motion.div>
                </div>

                <div className="absolute top-8 right-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs font-mono text-gray-600 text-right"
                    >
                        <p>PORTFOLIO.EXE</p>
                        <p className="text-purple-500/50">LOADING...</p>
                    </motion.div>
                </div>

                <div className="absolute bottom-8 left-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs font-mono text-gray-600"
                    >
                        <p className="text-cyan-500/50">[ Mr.B]</p>
                    </motion.div>
                </div>

                <div className="absolute bottom-8 right-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs font-mono text-gray-600 text-right"
                    >
                        <p>BUILD: 2025.12</p>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Loader;
