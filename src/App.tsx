import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import PersonalizedOfferings from './components/PersonalizedOfferings';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Mystic Tarot - Premium Tarot Reading Services";
    document.documentElement.lang = "en";
  }, []);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const animationConfig = reduceMotion ? { duration: 0 } : { duration: 60, repeat: Infinity, ease: "linear" as const };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">
      {!reduceMotion && (
        <div className="absolute inset-0 opacity-3" aria-hidden="true">
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={animationConfig}
          >
            <div className="w-full h-full border-2 border-white/10 rounded-full relative">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-16 bg-white/10 origin-bottom"
                  style={{
                    transform: `rotate(${i * 30}deg) translateX(-0.125rem)`,
                    top: '15%',
                    left: '50%'
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      )}

      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-white/2 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.02, 0.05, 0.02]
        }}
        transition={{ 
          duration: reduceMotion ? 0 : 15, 
          repeat: reduceMotion ? 0 : Infinity,
          ease: "easeInOut"
        }}
        aria-hidden="true"
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-72 h-72 bg-white/1 rounded-full blur-3xl"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.01, 0.03, 0.01]
        }}
        transition={{ 
          duration: reduceMotion ? 0 : 18, 
          repeat: reduceMotion ? 0 : Infinity,
          ease: "easeInOut"
        }}
        aria-hidden="true"
      />

      <main className="relative z-10">
        <Header />
        <Hero />
        <PersonalizedOfferings />
        
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="glass-card p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                About Our Sacred Journey
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                At Mystic Tarot, we bridge ancient wisdom with modern insights to illuminate your path forward. 
                Our expert readers combine traditional tarot practices with intuitive guidance to help you 
                navigate life's most important decisions with clarity and confidence.
              </motion.p>
              <motion.div
                className="grid md:grid-cols-3 gap-8 mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">5+ Years</div>
                  <div className="text-gray-400">Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">10,000+</div>
                  <div className="text-gray-400">Readings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Book Reading Section */}
        <section id="book" className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              className="glass-card p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Book Your Reading
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Ready to discover what the cards reveal about your future? 
                Choose your preferred reading style and connect with our expert readers today.
              </motion.p>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="w-full glass-button py-4 px-8 text-white font-semibold text-lg bg-gradient-to-r from-purple-500/30 to-blue-500/30 border-purple-400/50"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(147, 51, 234, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Video Reading
                </motion.button>
                <motion.button
                  className="w-full glass-button py-4 px-8 text-white font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Phone Reading
                </motion.button>
                <motion.button
                  className="w-full glass-button py-4 px-8 text-white font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Chat Reading
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
