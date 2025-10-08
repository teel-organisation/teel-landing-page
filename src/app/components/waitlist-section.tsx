"use client"

import { ArrowUpRight, CheckCircle } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function WaitlistSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

const handleFocusConsultation = (e: React.MouseEvent) => {
  e.preventDefault();
  const input = document.getElementById("consultation") as HTMLInputElement;

  if (input) {
    input.focus();

    setTimeout(() => {
      // Add a smaller offset (10px) for mobile, larger (200px) for bigger screens
      const offset = window.innerWidth > 768 ? 200 : 205;

      const y = input.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 50);
  }
};

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#EAEAEA] overflow-hidden pr-90 md:pr-120 lg:pr-20 xl:pr-52">
      {/* Background geometric shapes */}

  <div
    className="absolute bottom-16 right-0 w-[800px] h-120 opacity-10 -translate-x-32 translate-y-32 z-10 bg-no-repeat bg-contain"
    style={{ backgroundImage: "url('/group.png')" }}
  /> 

      
      {/* Main content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="mx-auto px-4 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
          <div className="space-y-8 md:hidden block mt-4">
              {/* Small Header */}
              <div className={`scroll-animate-fade-down ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.1s' }}>
                <div className="inline-block border border-black px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-700">
                  BE FIRST. BE FASTER
                </div>
              </div>

              {/* Main Headline */}
              <h2 className={`text-5xl lg:text-6xl font-bold text-gray-900 leading-tight scroll-animate-fade-down ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.2s' }}>
                Be <span className="italic font-serif">First</span> to the Future of Payments.
              </h2>

              {/* Description */}
              <p className={`text-lg text-gray-700 max-w-lg leading-relaxed scroll-animate-fade-down ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.3s' }}>
                Join our waitlist today and get early access to Teel—built to power faster checkouts and happier guests.
              </p>

              {/* Call to Action Button */}
              <div className={`scroll-animate-fade-down ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.4s' }}>
                <button className="flex items-center space-x-3 text-white px-8 py-4">
                  <a onClick={handleFocusConsultation} href="#consultation" >
                    <span className="font-bold text-black">Book a Demo</span>
                  </a>
                    <div className="bg-black rounded-md p-2 w-8 h-8 flex items-center justify-center h-10 w-10">
                  <a onClick={handleFocusConsultation} href="#consultation" >
                    <ArrowUpRight className="w-6 h-6 text-[#00B69E]" />
                  </a>
                  </div>
                </button>
              </div>
          </div>

            {/* Left Side - Phone Mockup and Floating Cards */}
            <div className={`md:justify-end md:items-end flex justify-center items-center scroll-animate-fade-down ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.5s' }}>
                <img src="/waitlist.png" alt="Waitlist" className=" h-auto" />
            </div>
            
            {/* Right Side - Text Content */}
            <div className="space-y-4 md:block hidden justify-start flex">
              {/* Small Header */}
              <div className={`scroll-animate-fade-down ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.1s' }}>
                <div className="inline-block border border-black px-4 py-2 text-xs uppercase tracking-wider text-black border-black rounded-md text-xs">
                  BE FIRST. BE FASTER
                </div>
              </div>

              {/* Main Headline */}
              <h2 className={`text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-hero-sm w-[652px] h-[140px] scroll-animate-fade-down ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.2s' }}>
                Be <span className="dm-serif-display-italic">First</span> to the Future of Payments.
              </h2>

              {/* Description */}
              <p className={`text-2xl text-gray-500 max-w-2xl leading-relaxed w-[652px] h-[68px] text-[#616161] scroll-animate-fade-down ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.3s' }}>
                Join our waitlist today and get early access to Teel—built to power faster checkouts and happier guests.
              </p>

              {/* Call to Action Button */}
              <div className={`scroll-animate-fade-down ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.4s' }}>
                <button className="flex items-center space-x-3 text-white py-4">
                  <a onClick={handleFocusConsultation} href="#consultation" >
                    <span className="font-bold text-black">Book a Demo</span>
                  </a>
                    <div className="bg-black rounded-md p-2 w-8 h-8 flex items-center justify-center h-10 w-10">
                      <a onClick={handleFocusConsultation} href="#consultation" >
                        <ArrowUpRight className="w-6 h-6 text-[#00B69E]" />
                      </a>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
