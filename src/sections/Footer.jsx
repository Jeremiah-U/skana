import React from 'react';
import GridLineOverlay from '../components/GridLineOverlay';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="layout-container footer-container">
        <GridLineOverlay />
        
        {/* Main Columns Grid */}
        <div className="footer-grid">
          {/* Column 1: Branding & Downloads */}
          <div className="footer-col branding-col">
            <p className="footer-brand-desc">
              Skana helps you send and receive money instantly and track your expenses & sales easily.
            </p>
            <div className="footer-cta-block">
              <h4 className="footer-cta-title">Use Skana Today!</h4>
              <div className="footer-dl-buttons">
                <a href="#download-ios" className="btn-cta btn-cta-black footer-dl-btn">
                  <img src="/assets/iphone iccon.png" alt="iPhone icon" className="footer-btn-icon" />
                  <span>Download For Iphone</span>
                </a>
                <a href="#download-android" className="btn-cta btn-cta-orange footer-dl-btn">
                  <img src="/assets/android icon.png" alt="Android icon" className="footer-btn-icon" />
                  <span>Download For Android</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Links</h4>
            <ul className="footer-links-list">
              <li><a href="#features" className="footer-link-item">Features</a></li>
              <li><a href="#businesses" className="footer-link-item">For Businesses</a></li>
              <li><a href="#security" className="footer-link-item">Security</a></li>
              <li><a href="#support" className="footer-link-item">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <p className="contact-info-text">Support@skana.com</p>
            <p className="contact-info-text">+234 450 6789 1234</p>
            
            <div className="social-media-block">
              <a href="https://instagram.com" className="social-circle-btn" aria-label="Instagram">
                <img src="/assets/ig icon.png" alt="Instagram" className="social-icon-img" />
              </a>
              <a href="https://facebook.com" className="social-circle-btn" aria-label="Facebook">
                <img src="/assets/fb icon.png" alt="Facebook" className="social-icon-img" />
              </a>
              <a href="https://x.com" className="social-circle-btn" aria-label="X (formerly Twitter)">
                <img src="/assets/x icon.png" alt="X Twitter" className="social-icon-img" />
              </a>
              <a href="https://tiktok.com" className="social-circle-btn" aria-label="TikTok">
                <img src="/assets/tiktok icon.png" alt="TikTok" className="social-icon-img" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal row */}
        <div className="footer-bottom-row">
          <p className="copyright-text">© 2026 Skana. All Rights Reserved.</p>
          <a href="#terms" className="legal-link-item terms-link">Terms & Conditions</a>
          <a href="#privacy" className="legal-link-item">Privacy Policy</a>
        </div>

        {/* Giant Watermark Logo at the bottom */}
        <div className="footer-watermark-wrapper">
          <span className="footer-watermark-text">Skana</span>
        </div>

      </div>
    </footer>
  );
}
