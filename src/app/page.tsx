"use client"

import Header from "./components/header";
import HeroSection from "./components/hero-section";
import FeaturesSection from "./components/features-section";
import BenefitsSection from "./components/benefits-section";
import WaitlistSection from "./components/waitlist-section";
import ResultsSection from "./components/results-section";
import PricingSection from "./components/pricing-section";
import FAQSection from "./components/faq-section";
import FooterSection from "./components/footer-section";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for image fade animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the image is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before fully in view
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-12 lg:px-20 xl:px-52 px-4 bg-[#EAEAEA]">
      <Header />
      </div>
      
      <main>
        {/* Hero Section */}
        <div className="mx-auto px-4 lg:px-20 xl:px-52 py-12 bg-[#EAEAEA]"   style={{ 
        backgroundImage: "url('/Vector.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
          <div className="flex lg:flex-row flex-col w-full items-center w-full">
            {/* Left Side - Hero Content */}
            <div className="flex flex-col justify-center w-full lg:w-[60%] ">
              <HeroSection />
            </div>
            <div 
              ref={imageRef}
              className={`flex flex-col justify-center items-center w-full lg:w-[40%] relative bottom-8 scroll-animate-fade-in ${isImageVisible ? 'animate' : ''}`} 
              style={{ transitionDelay: '0.5s' }}
            >
            <div className="md:relative flex justify-center items-center">
              <img src="/payment.png" alt="Phone Header" className="lg:w-full w-3/4 h-auto lg:h-[595.15px] relative z-10" />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-full h-8 bg-black/20 rounded-full blur-xl"></div>
            </div>
            
            </div>
          </div>
        </div>

        {/* Features Section */}
        <FeaturesSection />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Waitlist Section */}
        <WaitlistSection />

        {/* Results Section */}
        <div className="px-4 lg:px-32 bg-[#EAEAEA]">
        <ResultsSection />
        </div>

        {/* Pricing Section */}
        <PricingSection />

        {/* FAQ Section */}
        <div className="px-4 lg:px-32 bg-white">
        <FAQSection />
        </div>
      </main>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
