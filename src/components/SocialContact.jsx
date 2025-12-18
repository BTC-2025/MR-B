// components/SocialContact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiLinkedin, 
  FiGithub, 
  FiInstagram, 
  FiTwitter,
  FiMail,
  FiGlobe
} from 'react-icons/fi';

const SocialContact = () => {
  const socialLinks = [
    { icon: FiLinkedin, label: 'LinkedIn', url: '#', color: 'hover:text-blue-400' },
    { icon: FiGithub, label: 'GitHub', url: '#', color: 'hover:text-gray-300' },
    { icon: FiInstagram, label: 'Instagram', url: '#', color: 'hover:text-pink-400' },
    { icon: FiTwitter, label: 'Twitter', url: '#', color: 'hover:text-blue-300' },
    { icon: FiMail, label: 'Email', url: '#', color: 'hover:text-red-400' },
    { icon: FiGlobe, label: 'Website', url: '#', color: 'hover:text-green-400' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-700/50"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Connect & <span className="text-blue-400">Collaborate</span>
            </h2>
            <p className="text-xl text-gray-400">
              Let's build something amazing together
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`group flex flex-col items-center justify-center p-6 rounded-xl 
                          bg-gray-800/50 border border-gray-700/50 transition-all duration-300 ${link.color}`}
              >
                <link.icon className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{link.label}</span>
              </motion.a>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700/50 text-center">
            <p className="text-gray-400 mb-6">
              For business inquiries and speaking engagements
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                       rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 
                       transition-all duration-300"
            >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialContact;