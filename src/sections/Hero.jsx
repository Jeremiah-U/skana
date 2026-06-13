import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import GridLineOverlay from '../components/GridLineOverlay';
import './Hero.css';

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section className="hero-section">
      <div className="layout-container hero-container">
        <GridLineOverlay />
        
        {/* Main Split Content */}
        <motion.div 
          className="hero-split"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Text & CTAs */}
          <div className="hero-text-col">
            {/* Rating Badges */}
            <motion.div className="rating-badge" variants={itemVariants}>
              <div className="avatar-group">
                <div className="avatar avatar-1">👤</div>
                <div className="avatar avatar-2">👩</div>
                <div className="avatar avatar-3">👨</div>
                <div className="avatar avatar-4">👩‍🦰</div>
              </div>
              <div className="rating-text">
                <span className="rating-number">5</span>
                <Star size={16} fill="#E6A700" color="#E6A700" className="star-icon" />
                <span className="rating-label">Rating</span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1 className="display-text hero-title" variants={itemVariants}>
              <span className="hero-title-desktop">
                Fast QR Payments <br />
                for Your <span className="highlight-grey">Purchases</span> <br />
                <span className="highlight-grey">and Businesses</span>
              </span>
              <span className="hero-title-mobile">
                Fast QR Payments <br />
                for Your <span className="highlight-grey">Purchase</span> <br />
                <span className="highlight-grey">and Business</span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p className="hero-paragraph hero-desc" variants={itemVariants}>
              Send and receive money instantly using QR codes, usernames, or store names.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="hero-ctas" variants={itemVariants}>
              <a href="#download-ios" className="btn-cta btn-cta-black hero-btn">
                <img src="/assets/iphone iccon.png" alt="Apple Logo" className="btn-icon-img" />
                <span>Download For Iphone</span>
              </a>
              <a href="#download-android" className="btn-cta btn-cta-orange hero-btn">
                <img src="/assets/android icon.png" alt="Android Logo" className="btn-icon-img" />
                <span>Download For Android</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="hero-image-col">
            <motion.div 
              className="mockup-wrapper"
              variants={imageVariants}
            >
              {/* Dual iPhones image */}
              <img 
                src="/assets/hero-img.png" 
                alt="Skana App Screens on Dual iPhones" 
                className="mockup-image"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom 3-Column Banner */}
        <motion.div 
          className="hero-bottom-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero-grid-item">
            <h3 className="hero-grid-title">Fast Payments Experience</h3>
            <p className="hero-grid-desc">Designed for real-world payments in stores and everyday life.</p>
          </div>
          <div className="hero-grid-item">
            <h3 className="hero-grid-title">Security First Design</h3>
            <p className="hero-grid-desc">Built with strong authentication and secure transaction flows.</p>
          </div>
          <div className="hero-grid-item">
            <h3 className="hero-grid-title">Simple, Modern Payments</h3>
            <p className="hero-grid-desc">Send and receive money, no bank details needed, no delays.</p>
          </div>
        </motion.div>

      </div>
      <div className="section-divider" />
    </section>
  );
}
