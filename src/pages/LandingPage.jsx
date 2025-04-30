import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import Facilities from "../components/Facilities";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate page loading for smoother transitions
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation - No longer in a header to allow transparency over hero section */}
      <Navbar />
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with Slider */}
        <HeroSection />
        {/* New Arrival Products Section */}
        <Products />
        {/* About & Facilities Section */}
        <Facilities />
        {/* Testimonials Section */}
        <Testimonials />
        {/* Call to Action - Sales Section */}
        <CTA />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;