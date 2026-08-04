// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Companies from './components/Companies';
import SocialContact from './components/SocialContact';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import MissionVision from './components/MissionVision';
import CoreValues from './components/CoreValues';
import Milestones from './components/Milestones';
import Legacy from './components/Legacy';
import Feedback from './components/Feedback';
import BusinessFocus from './components/BusinessFocus';


import { AnimatePresence, motion } from 'framer-motion';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

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
            className="min-h-screen overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white"
          >
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            
            <AnimatePresence mode="wait">
              {currentPage === 'home' && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Hero setCurrentPage={setCurrentPage} />
                  <MissionVision />
                  <BusinessFocus setCurrentPage={setCurrentPage} />
                  <CoreValues />
                  <Milestones />
                  <Legacy />
                  <Footer setCurrentPage={setCurrentPage} />
                </motion.div>
              )}

              {currentPage === 'about' && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="pt-20"
                >
                  <About />
                  <SocialContact />
                  <Footer setCurrentPage={setCurrentPage} />
                </motion.div>
              )}

              {currentPage === 'What I Build' && (
                <motion.div
                  key="What I Build"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="pt-20"
                >
                  <Companies />
                  <Footer setCurrentPage={setCurrentPage} />
                </motion.div>
              )}

              {currentPage === 'feedback' && (
                <motion.div
                  key="feedback"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="pt-20"
                >
                  <Feedback />
                  <Footer setCurrentPage={setCurrentPage} />
                </motion.div>
              )}

              {currentPage === 'contact' && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="pt-20"
                >
                  <Contact />
                  <SocialContact />
                  <Footer setCurrentPage={setCurrentPage} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;