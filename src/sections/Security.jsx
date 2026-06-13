import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Zap, ShieldCheck, Wallet } from 'lucide-react';
import GridLineOverlay from '../components/GridLineOverlay';
import './Security.css';

export default function Security() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const securityCards = [
    {
      icon: <Lock size={24} className="security-icon" />,
      text: 'Biometric Authentication',
      bgClass: 'sec-bg-grey'
    },
    {
      icon: <Zap size={24} className="security-icon" />,
      text: 'Instant Payment Confirmation',
      bgClass: 'sec-bg-blue'
    },
    {
      icon: <ShieldCheck size={24} className="security-icon" />,
      text: 'Encrypted Transactions',
      bgClass: 'sec-bg-pink'
    },
    {
      icon: <Wallet size={24} className="security-icon" />,
      text: 'Secure Wallet Access',
      bgClass: 'sec-bg-black'
    }
  ];

  return (
    <section className="security-section" id="security">
      <div className="layout-container security-container">
        <GridLineOverlay />
        
        {/* Header Block */}
        <div className="security-header">
          <motion.h2 
            className="header-text security-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Secure Payments <br />
            You Can Trust
          </motion.h2>

          <motion.div 
            className="security-illustration-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <img 
              src="/assets/security-illustration.png" 
              alt="Security Illustration" 
              className="security-illustration"
            />
          </motion.div>
        </div>

        {/* 4-Column Card Grid */}
        <motion.div 
          className="security-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {securityCards.map((card, idx) => (
            <motion.div 
              key={idx} 
              className={`security-card ${card.bgClass}`}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="security-card-icon-wrapper">
                {card.icon}
              </div>
              <p className="security-card-text">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
      <div className="section-divider" />
    </section>
  );
}
