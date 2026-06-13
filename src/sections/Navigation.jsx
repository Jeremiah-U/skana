import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Smartphone, Play } from 'lucide-react';
import GridLineOverlay from '../components/GridLineOverlay';
import './Navigation.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="nav-header">
      <div className="layout-container nav-container">
        <GridLineOverlay />
        
        <div className="nav-content">
          {/* Left group: Logo + Nav Links */}
          <div className="nav-left-group">
            <a href="#" className="nav-logo">
              <img src="/assets/skana logo nav.png" alt="Skana Logo" />
            </a>
            <nav className="nav-links-desktop">
              <a href="#features" className="nav-link">Features</a>
              <a href="#businesses" className="nav-link">For Businesses</a>
              <a href="#security" className="nav-link">Security</a>
              <a href="#support" className="nav-link">Support</a>
            </nav>
          </div>

          {/* Desktop CTA Dropdown */}
          <div className="nav-cta-container" ref={dropdownRef}>
            <button 
              className="btn-cta nav-download-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              <span>Download App</span>
              <motion.span
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'inline-flex' }}
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div 
                  className="nav-dropdown-menu"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <a href="#download-ios" className="dropdown-item">
                    <img src="/assets/iphone icon black.png" alt="iPhone icon" className="dropdown-icon" />
                    <div className="dropdown-item-text">
                      <span className="dropdown-item-title">Download For iPhone</span>
                      <span className="dropdown-item-desc">Available on App Store</span>
                    </div>
                  </a>
                  <a href="#download-android" className="dropdown-item">
                    <img src="/assets/android icon.png" alt="Android icon" className="dropdown-icon" />
                    <div className="dropdown-item-text">
                      <span className="dropdown-item-title">Download For Android</span>
                      <span className="dropdown-item-desc">Available on Google Play</span>
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="nav-mobile-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="nav-mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="layout-container">
              <nav className="nav-links-mobile">
                <a href="#features" className="nav-link-mobile-item" onClick={() => setIsOpen(false)}>Features</a>
                <a href="#businesses" className="nav-link-mobile-item" onClick={() => setIsOpen(false)}>For Businesses</a>
                <a href="#security" className="nav-link-mobile-item" onClick={() => setIsOpen(false)}>Security</a>
                <a href="#support" className="nav-link-mobile-item" onClick={() => setIsOpen(false)}>Support</a>
                
                <div className="nav-mobile-ctas">
                  <p className="mobile-cta-title">Download Skana App</p>
                  <div className="mobile-cta-buttons">
                    <a href="#download-ios" className="btn-cta btn-cta-black mobile-dl-btn" onClick={() => setIsOpen(false)}>
                      <img src="/assets/iphone iccon.png" alt="iPhone" />
                      <span>App Store</span>
                    </a>
                    <a href="#download-android" className="btn-cta btn-cta-orange mobile-dl-btn" onClick={() => setIsOpen(false)}>
                      <img src="/assets/android icon.png" alt="Android" />
                      <span>Google Play</span>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="section-divider" />
    </header>
  );
}
