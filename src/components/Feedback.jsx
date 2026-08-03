import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSend, FiCheck, FiChevronDown } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';

const Feedback = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending feedback
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
    setFormState({
      name: '',
      email: '',
      subject: '',
      category: '',
      message: ''
    });
  };

  return (
    <section id="feedback" ref={containerRef} className="relative bg-[#030303] py-32 overflow-hidden min-h-screen">
      
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
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 45, 0],
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 mb-6"
          >
            <FaHandshake className="w-7 h-7 text-white" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6">
            Let's <span className="font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Talk</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-500 max-w-xl mx-auto"
          >
            Your ideas, feedback, and suggestions help us grow. Whether you have a question, a concern, or an opportunity to discuss, we'd love to hear from you.
          </motion.p>
        </motion.div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="relative">
              
              {/* Form Card */}
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10">
                <div className="space-y-6">
                  
                  {/* Category Field */}
                  <div className="group">
                    <label className="block text-gray-500 text-sm mb-2 group-focus-within:text-white transition-colors">
                      Category
                    </label>
                    <div className="relative">
                      <select
                        value={formState.category}
                        onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors appearance-none cursor-pointer pr-12"
                        required
                      >
                        <option value="" disabled>Select a category</option>
                        <option value="Complaint">Complaint</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Suggestion">Suggestion</option>
                        <option value="Partnership">Partnership</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <FiChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                  </div>

                  {/* Subject field */}
                  <div className="group">
                    <label className="block text-gray-500 text-sm mb-2 group-focus-within:text-white transition-colors">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="Brief summary of your feedback or complaint"
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
                      rows={6}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                      placeholder="Please share detailed concerns, ideas, or comments here..."
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
                        Feedback Submitted!
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        Submit Feedback
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

export default Feedback;
