import React from 'react';
import { motion } from 'framer-motion';
import GridLineOverlay from '../components/GridLineOverlay';
import './Friction.css';

export default function Friction() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const cardsData = [
    {
      title: 'Business Friction',
      colorClass: 'pink-card',
      points: [
        'Slow checkout',
        'Manual payment confirmation',
        'Customer delays'
      ]
    },
    {
      title: 'Cash Problems',
      colorClass: 'grey-card',
      points: [
        'No digital record',
        'Hard to track spending',
        'Not convenient'
      ]
    },
    {
      title: 'Traditional Payments',
      colorClass: 'blue-card',
      points: [
        'Bank transfers',
        'Long account numbers',
        'Payment delays'
      ]
    }
  ];

  return (
    <section className="friction-section" id="features">
      <div className="layout-container friction-container">
        <GridLineOverlay />
        
        {/* Header Block */}
        <div className="friction-header">
          <motion.h2 
            className="header-text friction-title"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Paying People and Stores <br />
            Shouldn't Be Stressful
          </motion.h2>
          
          <motion.div 
            className="eyes-illustration-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <img 
              src="/assets/eyes illustration.png" 
              alt="Looking Eyes Illustration" 
              className="eyes-illustration"
            />
          </motion.div>
        </div>

        {/* 3-Column Card Grid */}
        <motion.div 
          className="friction-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {cardsData.map((card, idx) => (
            <motion.div 
              key={idx} 
              className={`friction-card ${card.colorClass}`}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="friction-card-title">{card.title}</h3>
              <ul className="friction-card-points">
                {card.points.map((point, pIdx) => (
                  <li key={pIdx} className="friction-card-point">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
      <div className="section-divider" />
    </section>
  );
}
