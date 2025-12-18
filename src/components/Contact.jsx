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
        <section ref={containerRef} className="relative bg-[#030303] py-32 overflow-hidden">

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

            <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10">

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

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6">
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

                {/* Main content - Asymmetric layout */}
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

                    {/* Left side - Contact methods (2 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-2 space-y-6"
                    >
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
