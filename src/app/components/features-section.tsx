"use client"

import { ArrowUpRight, ArrowDownRight, ArrowLeft, ArrowRight } from "lucide-react"
import { useRef, useState, useEffect } from "react"

export default function FeaturesSection() {
  const [currentCard, setCurrentCard] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isLastCardVisible, setIsLastCardVisible] = useState(false)
  const desktopCarouselRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleFocusConsultation = (e: React.MouseEvent) => {
  e.preventDefault()
  const input = document.getElementById("consultation") as HTMLInputElement

  if (input) {
    // first focus
    input.focus()

    // then scroll after a short delay so browser's focus adjustment doesn't override it
    setTimeout(() => {
      const y = input.getBoundingClientRect().top + window.scrollY - 200
      window.scrollTo({ top: y, behavior: "smooth" })
    }, 50) // 50ms usually works, you can tweak
  }
}

  const features = [
    {
      id: 1,
      title: "POS integration",
      description:
        "Simplify sales by syncing payments directly into your POS system. It's the easiest way to manage transactions and keep customers happy",
      image: "/designThree.png",
    },
    {
      id: 2,
      title: "QR code pay-at-table",
      description:
        "Turn every table into a self-service station with QR code ordering and payments. Faster checkouts mean happier guests and quicker table turnover.",
      image: "/designTwo.png",
    },
    {
      id: 3,
      title: "Real-time settlement",
      description:
        "Get your money the moment a payment is made - no waiting. Real-time settlement keeps cash flow steady and your business moving.",
      image: "/designOne.jpg",
    },
  ]

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before fully in view
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Scroll detection for last card visibility
  useEffect(() => {
    const container = desktopCarouselRef.current
    if (container) {
      // Check initial visibility
      checkLastCardVisibility()
      
      // Add scroll listener
      container.addEventListener('scroll', checkLastCardVisibility)
      
      // Add resize listener to handle screen size changes
      window.addEventListener('resize', checkLastCardVisibility)
      
      return () => {
        container.removeEventListener('scroll', checkLastCardVisibility)
        window.removeEventListener('resize', checkLastCardVisibility)
      }
    }
  }, [])

  const scrollToCard = (index: number) => {
    if (desktopCarouselRef.current) {
      const cardWidth = desktopCarouselRef.current.firstChild instanceof HTMLElement
        ? desktopCarouselRef.current.firstChild.offsetWidth + 32 // +32 for gap-8
        : 0
      desktopCarouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      })
    }
  }

  const checkLastCardVisibility = () => {
    if (desktopCarouselRef.current) {
      const container = desktopCarouselRef.current
      const cards = container.children
      const lastCard = cards[cards.length - 1] as HTMLElement
      
      if (lastCard) {
        const containerRect = container.getBoundingClientRect()
        const lastCardRect = lastCard.getBoundingClientRect()
        
        // Check if the last card is fully visible within the container
        const isFullyVisible = lastCardRect.right <= containerRect.right && 
                              lastCardRect.left >= containerRect.left
        
        setIsLastCardVisible(isFullyVisible)
      }
    }
  }

  const nextCard = () => {
    if (currentCard < features.length - 1 && !isLastCardVisible) {
      const newIndex = currentCard + 1
      setCurrentCard(newIndex)
      scrollToCard(newIndex)
    }
  }

  const prevCard = () => {
    if (currentCard > 0) {
      const newIndex = currentCard - 1
      setCurrentCard(newIndex)
      scrollToCard(newIndex)
    }
  }

  return (
    <section ref={sectionRef} className="px-4 lg:px-20 xl:px-44 py-16 lg:py-24 bg-[#EAEAEA]">
      <div id="features" className="mx-auto px-4 mt-12 md:mt-24 scroll-mt-[3cm]">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1">
            {/* FEATURES Button */}
            <div className={`mb-8 text-black scroll-animate-slide-in-left ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <button className="flex items-center space-x-2 px-6 py-3 border border-black rounded-sm bg-gray-[#EAEAEA] hover:bg-gray-200 transition-colors">
                <ArrowDownRight className="w-4 h-4" />
                <span className="text-[10px] font-medium">FEATURES</span>
              </button>
            </div>

            {/* Main Heading */}
            <div className="flex items-center justify-between">
              <h2 className={`text-5xl lg:text-6xl font-bold text-black mb-6 font-serif text-hero-sm scroll-animate-slide-in-left ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.2s' }}>
                <span className="dm-serif-display-italic">Seamless</span>{" "}
                <span className="schibsted-grotesk">by Design</span>
              </h2>
              {/* Navigation Arrows - Desktop Only */}
              <div className={`hidden md:flex space-x-2 ml-8 scroll-animate-slide-in-left ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.3s' }}>
                <button
                  onClick={prevCard}
                  disabled={currentCard === 0}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    currentCard === 0 
                      ? 'bg-[#C7C5C5] cursor-not-allowed' 
                      : 'bg-black'
                  }`}
                >
                  <ArrowLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextCard}
                  disabled={currentCard === features.length - 1 || isLastCardVisible}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    currentCard === features.length - 1 || isLastCardVisible
                      ? 'bg-[#C7C5C5] cursor-not-allowed' 
                      : 'bg-black'
                  }`}
                >
                  <ArrowRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
            {/* Description */}
            <p className={`text-lg text-gray-600 max-w-xl leading-relaxed scroll-animate-slide-in-left ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.4s' }}>
              Every feature in Teel is built to simplify payments integrating
              effortlessly with your POS, accelerating checkout, and giving
              merchants the control they need
            </p>
          </div>
        </div>

        {/* Feature Cards - Desktop Carousel */}
        <div className="w-full">
        <div
          ref={desktopCarouselRef}
          className="hidden md:flex space-x-6 overflow-hidden px-6"
        >
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`bg-transparent overflow-hidden w-[460px] h-[500px] shrink-0 curtain-hover my-12 group ${
                isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"
              } transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-105 hover:p-6 rounded-lg hover:shadow-lg hover:shadow-black/20 hover:border hover:rounded-2xl`}
              style={{ transitionDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}        
            >
            <img
              src={feature.image}
              className="w-full h-64 rounded-md object-cover transition-transform duration-500 ease-in-out hover:scale-105" // 👈 Image zoom effect
            />
            <div className="py-6 relative">
              <h3 className="text-2xl font-semibold text-[#0A0A0A] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#555555] text-basic pr-8">
                {feature.description}
              </p>
              {hoveredCard !== feature.id ? <div className="absolute bottom-6 right-0 flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-[#000000]" />
              </div>: null }
            </div>
              {hoveredCard === feature.id ? <div className="absolute bottom-6 right-0 flex items-center justify-start mt-6 bg-transparent space-x-2 animate-pulse">
                <a onClick={handleFocusConsultation} href="#consultation" >
                  <span className="text-sm font-medium text-black">Book a Demo</span>
                </a>
                <span className=" w-fit h-fit border border-black rounded-md px-3 py-2">
                <a href="#consultation" >
                  <ArrowUpRight className="w-4 h-4 text-[#000000]" />
                </a>
                </span>
            </div>: null }
          </div>
          
          ))}
        </div>
        </div>

        {/* Mobile Carousel */}
        <div className={`md:hidden scroll-animate-slide-in-left ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.5s' }}>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentCard * 100}%)` }}
              >
                {features.map((feature) => (
                  <div key={feature.id} className="w-full flex-shrink-0">
                    <div className="bg-transparent overflow-hidden curtain-hover transition-all duration-300 ease-in-out hover:p-6 rounded-lg">
                      <img src={feature.image} className="w-full rounded-md" />
                      <div className="py-6 pb-12 relative">
                        <h3 className="text-xl font-bold text-black mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                        <button className="absolute bottom-10 right-0 w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition-colors">
                          <ArrowUpRight className="w-4 h-4 text-[#00B69E]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Carousel Indicators */}
          <div className={`flex justify-center space-x-2 mt-6 scroll-animate-slide-in-left ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.6s' }}>
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentCard ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          <div className={`flex justify-center space-x-4 mt-6 scroll-animate-slide-in-left ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.7s' }}>
            <button
              onClick={prevCard}
              disabled={currentCard === 0}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                currentCard === 0 
                  ? 'bg-[#C7C5C5] cursor-not-allowed opacity-50' 
                  : 'bg-[#C7C5C5] hover:bg-gray-300'
              }`}
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => {
                if (currentCard < features.length - 1) {
                  const newIndex = currentCard + 1
                  setCurrentCard(newIndex)
                }
              }}
              disabled={currentCard === features.length - 1}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                currentCard === features.length - 1 
                  ? 'bg-[#C7C5C5] cursor-not-allowed opacity-50' 
                  : 'bg-black hover:bg-gray-800'
              }`}
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
