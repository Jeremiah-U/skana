import React from 'react';
import { motion } from 'framer-motion';
import GridLineOverlay from '../components/GridLineOverlay';
import './Business.css';

export default function Business() {
  return (
    <section className="business-section" id="businesses-needs">
      <div className="layout-container business-container">
        <GridLineOverlay />
        
        {/* Top Text & CTA Block */}
        <div className="business-header">
          <div className="business-header-left">
            <motion.h2 
              className="header-text business-title"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Your Business Needs <br />
              Fast Payments
            </motion.h2>
          </div>
          
          <div className="business-header-right">
            <motion.p 
              className="business-desc"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Turn your store into a modern payment point with QR payments, instant confirmations, and simple transaction tracking.
            </motion.p>
            

          </div>
        </div>

        {/* Cashier Banner Image - Full Width */}
        <div className="business-banner-container">
          <motion.div 
            className="business-banner-wrapper"
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img 
              src="/assets/business image.png" 
              alt="Store Merchant scanning customer's QR payment next to POS checkout" 
              className="business-banner-image desktop-banner"
            />
            <img 
              src="/assets/business image mobile.png" 
              alt="Store Merchant scanning customer's QR payment next to POS checkout" 
              className="business-banner-image mobile-banner"
            />
          </motion.div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
}
