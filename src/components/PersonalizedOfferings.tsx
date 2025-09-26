import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Moon, Sun, Zap, Eye } from 'lucide-react';
import { siteContent } from '../data/cmsContent';

const iconMap = {
  heart: Heart,
  star: Star, 
  moon: Moon,
  sun: Sun,
  zap: Zap,
  eye: Eye
};

const PersonalizedOfferings = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isCardPulling, setIsCardPulling] = useState(false);
  const { personalizedOfferings } = siteContent;

  const handleCardPull = (serviceId: number) => {
    if (isCardPulling) return;
    setIsCardPulling(true);
    setSelectedCard(serviceId);
    setTimeout(() => setIsCardPulling(false), 2000);
  };

  return (
    <section id="readings" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {personalizedOfferings.section.headline.part1}
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {personalizedOfferings.section.headline.part2}
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {personalizedOfferings.services.filter(service => service.active).map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const isSelected = selectedCard === service.id;
            
            return (
              <motion.div
                key={service.id}
                className={`glass-card glass-card-hover p-8 cursor-pointer relative overflow-hidden bg-gradient-to-br ${service.gradient} ${service.borderColor}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleCardPull(service.id)}
              >
                <AnimatePresence>
                  {isSelected && isCardPulling && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-purple-500/20 backdrop-blur-sm z-10 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="text-center text-white"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1 }}
                      >
                        <Icon className="h-12 w-12 mx-auto mb-2" />
                        <p className="font-bold">Card Pulled!</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-between mb-6">
                  <div className="glass-button p-3">
                    <Icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <button className="w-full glass-button py-3 text-white font-semibold bg-gradient-to-r from-purple-500/30 to-blue-500/30">
                  {isCardPulling && isSelected ? 'Pulling Card...' : 'Select Reading'}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PersonalizedOfferings;
