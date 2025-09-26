import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { siteContent } from '../data/cmsContent';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { header } = siteContent;

  return (
    <motion.header 
      className="glass-nav fixed top-0 left-0 right-0 z-50 px-6 py-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="glass-button p-2">
            <Sparkles className="h-6 w-6 text-purple-400" />
          </div>
          <span className="text-xl font-bold text-white">{header.logo.text}</span>
        </motion.div>

        <nav className="hidden md:flex space-x-1">
          {header.navigation.filter(item => item.active).map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              className="glass-button px-4 py-2 text-white/80 hover:text-white font-medium text-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {header.ctaButton.active && (
          <motion.button
            className="hidden md:block glass-button px-6 py-2 text-white font-medium bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-400/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {header.ctaButton.text}
          </motion.button>
        )}

        <motion.button
          className="md:hidden glass-button p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {isMenuOpen && (
        <motion.div
          className="md:hidden mt-4 glass-card p-4 mx-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {header.navigation.filter(item => item.active).map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              className="block py-3 px-4 text-white/80 hover:text-white font-medium border-b border-white/10 last:border-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
