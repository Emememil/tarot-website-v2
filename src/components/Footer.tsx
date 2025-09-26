import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Sparkles,
  Send,
  Heart
} from 'lucide-react';
import { siteContent } from '../data/cmsContent';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { footer } = siteContent;

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribed(true);
    setEmail('');
    
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const socialLinks = [
    { Icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { Icon: Twitter, href: "#", color: "hover:text-sky-400" },
    { Icon: Instagram, href: "#", color: "hover:text-pink-400" },
    { Icon: Youtube, href: "#", color: "hover:text-red-400" }
  ];

  return (
    <footer id="contact" className="relative py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="glass-card p-12 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center glass-button px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-5 w-5 text-purple-400 mr-2" />
            <span className="text-purple-300 font-medium">{footer.newsletter.badge.text}</span>
          </motion.div>

          <motion.h3
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {footer.newsletter.headline}
          </motion.h3>

          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {footer.newsletter.description}
          </motion.p>

          <motion.form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={footer.newsletter.placeholder}
              className="flex-1 glass-button px-6 py-4 text-white placeholder-gray-400 bg-white/5 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all"
              disabled={isSubscribed}
              required
            />
            <motion.button
              type="submit"
              className="glass-button px-8 py-4 text-white font-semibold bg-gradient-to-r from-purple-500/30 to-blue-500/30 border-purple-400/50 flex items-center justify-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubscribed}
            >
              {isSubscribed ? (
                <>
                  <Heart className="h-5 w-5 mr-2" />
                  Subscribed!
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  {footer.newsletter.buttonText}
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="glass-button p-2">
                <Sparkles className="h-6 w-6 text-purple-400" />
              </div>
              <span className="text-2xl font-bold text-white">{footer.brand.logo.text}</span>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              {footer.brand.description}
            </p>

            <div className="space-y-4">
              <motion.div
                className="flex items-center text-gray-300"
                whileHover={{ x: 5, color: "#ffffff" }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-5 w-5 mr-3 text-purple-400" />
                <span>{footer.contact.email}</span>
              </motion.div>
              
              <motion.div
                className="flex items-center text-gray-300"
                whileHover={{ x: 5, color: "#ffffff" }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="h-5 w-5 mr-3 text-purple-400" />
                <span>{footer.contact.phone}</span>
              </motion.div>
              
              <motion.div
                className="flex items-center text-gray-300"
                whileHover={{ x: 5, color: "#ffffff" }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="h-5 w-5 mr-3 text-purple-400" />
                <span>{footer.contact.location}</span>
              </motion.div>
            </div>
          </motion.div>

          {footer.sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-white mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.filter(link => link.active).map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="glass-card p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-6 mb-6 md:mb-0">
              {socialLinks.map((social, index) => {
                const { Icon, href, color } = social;
                return (
                  <motion.a
                    key={index}
                    href={href}
                    className={`glass-button p-3 text-gray-400 ${color} transition-colors duration-200`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-gray-400 text-sm">
              <span>{footer.legal.copyright}</span>
              <div className="flex space-x-6">
                {footer.legal.links.filter(link => link.active).map((link) => (
                  <motion.a 
                    key={link.name}
                    href={link.href} 
                    className="hover:text-white transition-colors" 
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
