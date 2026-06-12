import React from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Friction from './sections/Friction';
import Features from './sections/Features';
import Business from './sections/Business';
import Security from './sections/Security';
import CtaBanner from './sections/CtaBanner';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="app-root">
      {/* 1. Header/Navigation */}
      <Navigation />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Friction Comparison Section */}
      <Friction />

      {/* 4. Core App Features Section */}
      <Features />

      {/* 5. Business Merchant Banner Section */}
      <Business />

      {/* 6. Security & Trust Cards Section */}
      <Security />

      {/* 7. Bottom CTA Banner Section */}
      <CtaBanner />

      {/* 8. Footer Section */}
      <Footer />
    </div>
  );
}
