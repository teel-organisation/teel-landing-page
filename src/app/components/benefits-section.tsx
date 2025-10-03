"use client"

import { ArrowDownRight } from "lucide-react"
import { useRef, useState, useEffect } from "react"

export default function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Background slideshow state
  const images = [
    "/background.jpg",
    "/backgroundThree.jpg",
    "/backgroundFive.jpg",
    "/backgroundFour.jpg",
    "/backgroundTwo.jpg"
  ]

  // Titles array (must match order of images)
  const titles = [
    "Because<br/><span class='dm-serif-display-italic'>Every Second</span> Counts",
    "Fast<br/><span class='dm-serif-display-italic'>Table Turnover</span>",
    "Happier<br/><span class='dm-serif-display-italic'>Guest</span>",
    "Secure &<br/><span class='dm-serif-display-italic'>Compliant</span>",
    "Merchant<br/><span class='dm-serif-display-italic'>Dashboard</span>",
    "<br/><span class='dm-serif-display-italic'>Every Second</span> Counts"
  ]

  // Descriptions array (must match order of images)
  const descriptions = [
    "From speed at the table to smarter insights in the back office, Teel delivers real value where it counts for your business.",
    "From speed at the table to smarter insights in the back office, Teel delivers real value where it counts for your business.",
    "From speed at the table to smarter insights in the back office, Teel delivers real value where it counts for your business.",
    "From speed at the table to smarter insights in the back office, Teel delivers real value where it counts for your business.",
    "From speed at the table to smarter insights in the back office, Teel delivers real value where it counts for your business.",
  ]

  const [currentImage, setCurrentImage] = useState(0)
  const [isTitleTransitioning, setIsTitleTransitioning] = useState(false)

  // Cycle background every 6s with title transition
  useEffect(() => {
    const interval = setInterval(() => {
      // Start title transition
      setIsTitleTransitioning(true)
      
      // Change image and title after fade out
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length)
        
        // Fade title back in
        setTimeout(() => {
          setIsTitleTransitioning(false)
        }, 200) // Small delay for smooth transition
      }, 800) // Fade out duration
      
    }, 6000) // 6 seconds
    return () => clearInterval(interval)
  }, [images.length])

  // Scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden px-4 lg:px-20"
    >
      {/* Background slideshow wrapper */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(270.44deg, rgba(0, 0, 0, 0) 54.48%, #121212 94.5%), url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div id="benefits"className="relative z-20 flex items-center min-h-screen">
        <div className="mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side */}
            <div className="text-white space-y-8">
              <div className={`scroll-animate-slide-in-left ${isVisible ? "animate" : ""}`} style={{ transitionDelay: "0.2s" }}>
                <button className="flex items-center space-x-2 px-6 py-3 border border-white rounded-md bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm">
                  <ArrowDownRight className="w-4 h-4" />
                  <span className="text-sm font-medium">BENEFITS</span>
                </button>
              </div>

               <h2 className={`text-5xl lg:text-6xl font-bold leading-tight text-hero-sm scroll-animate-slide-in-left ${isVisible ? "animate" : ""}`} style={{ transitionDelay: "0.4s" }}>
                 <div 
                   className={`transition-all duration-800 ease-in-out ${
                     isTitleTransitioning 
                       ? 'opacity-0 transform translate-y-4 scale-95' 
                       : 'opacity-100 transform translate-y-0 scale-100'
                   }`}
                   style={{
                     transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out'
                   }}
                   dangerouslySetInnerHTML={{ __html: titles[currentImage] }}
                 />
               </h2>

              <p className={`text-lg text-white/90 max-w-lg leading-relaxed scroll-animate-slide-in-left ${isVisible ? "animate" : ""}`} style={{ transitionDelay: "0.6s" }}>
                <div 
                  className={`transition-all duration-800 ease-in-out ${
                    isTitleTransitioning 
                      ? 'opacity-0 transform translate-y-2 scale-98' 
                      : 'opacity-100 transform translate-y-0 scale-100'
                  }`}
                  style={{
                    transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out'
                  }}
                >
                  {descriptions[currentImage]}
                </div>
              </p>

              <div className={`space-y-4 scroll-animate-slide-in-left ${isVisible ? "animate" : ""}`} style={{ transitionDelay: "0.8s" }}>
                <a
                  href="#"
                  className="text-white font-bold text-[20px] uppercase tracking-wider transition-colors border-b-2 border-[#00B69E] inline-block pb-2 font-semibold"
                >
                  STEP INSIDE OUR WORLD
                </a>
                <div className="flex w-[127px] h-[5px] py-12">
                  <div 
                    className="h-1 bg-[#00B69E] rounded-full transition-all duration-1000 ease-in-out"
                    style={{ 
                      width: `${((currentImage + 1) / images.length) * 100}%` 
                    }}
                  ></div>
                  <div 
                    className="h-1 bg-[#D9D9D9] rounded-full transition-all duration-1000 ease-in-out"
                    style={{ 
                      width: `${((images.length - currentImage - 1) / images.length) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
