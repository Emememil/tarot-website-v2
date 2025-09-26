import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Star, Moon } from 'lucide-react';
import { siteContent } from '../data/cmsContent';

const iconMap = {
  star: Star,
  sparkles: Sparkles,
  play: Play,
  moon: Moon
};

const Hero = () => {
  const { hero } = siteContent;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          className="text-center lg:text-left z-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="flex items-center justify-center lg:justify-start mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="glass-button p-2 mr-3">
              {React.createElement(iconMap[hero.badge.icon as keyof typeof iconMap], {
                className: "h-5 w-5 text-purple-400"
              })}
            </div>
            <span className="text-purple-300 font-medium">{hero.badge.text}</span>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {hero.headline.part1}
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {hero.headline.part2}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {hero.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            {hero.buttons.map((button, index) => {
              const Icon = iconMap[button.icon as keyof typeof iconMap];
              return (
                <motion.button
                  key={button.id}
                  className={`glass-button px-8 py-4 text-white font-semibold ${
                    button.primary 
                      ? 'bg-gradient-to-r from-purple-500/30 to-blue-500/30 border-purple-400/50' 
                      : ''
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    ...(button.primary && { boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)" })
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5 mr-2 inline" />
                  {button.text}
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div
            className="flex items-center justify-center lg:justify-start mt-12 space-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            {hero.trustIndicators.filter(indicator => indicator.active).map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white">{indicator.value}</div>
                <div className="text-sm text-gray-400">{indicator.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <div className="glass-card glass-card-hover p-8 relative overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {React.createElement(iconMap[hero.video.fallbackIcon as keyof typeof iconMap], {
                      className: "h-16 w-16 text-purple-300 mx-auto mb-4"
                    })}
                    <p className="text-white/80 font-medium">{hero.video.title}</p>
                    <p className="text-purple-300 text-sm">{hero.video.subtitle}</p>
                  </motion.div>
                </div>

                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-20 bg-gradient-to-b from-purple-400/20 to-blue-400/20 backdrop-blur-sm border border-white/20 rounded-lg"
                    style={{
                      top: `${20 + i * 15}%`,
                      right: `${10 + i * 20}%`,
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8 + i * 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="glass-button p-4 rounded-full cursor-pointer">
                  <Play className="h-8 w-8 text-white" />
                </div>
              </motion.div>
            </div>

            <motion.div
              className="absolute -top-6 -right-6 w-12 h-12 bg-purple-500/30 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500/40 rounded-full blur-lg"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
