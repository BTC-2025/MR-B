// src/App.jsx
import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Companies from './components/Companies';
import SocialContact from './components/SocialContact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="min-h-screen overflow-hidden"
          >
            <Hero />
            <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
              <About />
              <Companies />
              <SocialContact />
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;