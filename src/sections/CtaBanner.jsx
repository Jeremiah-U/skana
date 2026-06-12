import React from 'react';
import { motion } from 'framer-motion';
import GridLineOverlay from '../components/GridLineOverlay';
import './CtaBanner.css';

export default function CtaBanner() {
  const textVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="cta-banner-section" id="support">
      <div className="layout-container cta-banner-container">
        <GridLineOverlay />
        
        <div className="cta-banner-content">
          {/* Main Huge Slogan */}
          <motion.h2 
            className="cta-banner-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={textVariants}
          >
            SCAN. PAY. DONE.
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="cta-banner-sub"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            No stress. No delays. Just payments.
          </motion.p>

          {/* Download Buttons */}
          <motion.div 
            className="cta-banner-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#download-ios" className="btn-cta btn-cta-black cta-banner-btn">
              <img src="/assets/iphone iccon.png" alt="Apple Logo" className="btn-icon-img" />
              <span>Download For Iphone</span>
            </a>
            <a href="#download-android" className="btn-cta btn-cta-orange cta-banner-btn">
              <img src="/assets/android icon.png" alt="Android Logo" className="btn-icon-img" />
              <span>Download For Android</span>
            </a>
          </motion.div>
        </div>

      </div>
      <div className="section-divider" />
    </section>
  );
}
