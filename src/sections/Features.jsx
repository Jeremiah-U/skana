import React from 'react';
import { motion } from 'framer-motion';
import GridLineOverlay from '../components/GridLineOverlay';
import './Features.css';

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  const featuresData = [
    {
      title: 'Scan & Pay',
      desc: 'Scan a QR code and pay instantly in stores.',
      image: '/assets/scan and pay image.png',
      alt: 'Scan and pay screen'
    },
    {
      title: 'Pay by Store Name',
      desc: 'Find stores quickly and pay in seconds.',
      image: '/assets/store name image.png',
      alt: 'Pay by store name screen'
    },
    {
      title: 'Pay with Username',
      desc: 'Send money using @username.',
      image: '/assets/username image.png',
      alt: 'Pay with username screen'
    }
  ];

  return (
    <section className="features-section" id="businesses">
      <div className="layout-container features-container">
        {/* We use a custom GridLineOverlay with white/transparent gridlines for the orange section */}
        <div className="grid-lines-overlay grid-lines-orange">
          <div className="grid-line" />
          <div className="grid-line" />
          <div className="grid-line" />
          <div className="grid-line" />
        </div>

        {/* Top Header & Connection Logo */}
        <div className="features-header">
          <motion.div 
            className="features-header-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="header-text features-title">
              One App for Instant <br />
              Payments
            </h2>
          </motion.div>

          <motion.div 
            className="features-connection-img"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img 
              src="/assets/connection image.png" 
              alt="Connection Diagram showing Store, Grocery, Restaurant, Friend connected to Skana" 
            />
          </motion.div>
        </div>

        {/* 3-Column Card Grid */}
        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featuresData.map((feat, idx) => (
            <motion.div 
              key={idx} 
              className="feature-card"
              variants={cardVariants}
            >
              <div className="feature-card-info">
                <h3 className="feature-card-title">{feat.title}</h3>
                <p className="feature-card-desc">
                  {idx === 0 ? (
                    <>Scan a QR code and pay instantly<br />in stores.</>
                  ) : (
                    feat.desc
                  )}
                </p>
              </div>
              
              <div className="feature-card-image-container">
                <motion.img 
                  src={feat.image} 
                  alt={feat.alt} 
                  className="feature-card-phone-image"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
      <div className="section-divider" />
    </section>
  );
}
