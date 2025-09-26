"use client"

import { ArrowUpRight, ArrowDownRight, ArrowLeft, ArrowRight } from "lucide-react"
import { useRef, useState, useEffect } from "react"

export default function FeaturesSection() {
  const [currentCard, setCurrentCard] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const desktopCarouselRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const nextCard = () => {
    const newIndex = (currentCard + 1) % features.length
    setCurrentCard(newIndex)
    scrollToCard(newIndex)
  }

  const prevCard = () => {
    const newIndex = (currentCard - 1 + features.length) % features.length
    setCurrentCard(newIndex)
    scrollToCard(newIndex)
  }

  return (
    <section ref={sectionRef} className="px-4 lg:px-20 xl:px-52 py-16 lg:py-24 bg-[#EAEAEA]">
      <div className="mx-auto px-4 mt-24">
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
                  className="w-12 h-12 bg-[#C7C5C5] rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <ArrowLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextCard}
                  className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
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
        <div
          ref={desktopCarouselRef}
          className="hidden md:flex space-x-8 overflow-hidden w-full"
        >
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`bg-transparent overflow-hidden w-[460px] shrink-0 scroll-animate-slide-in-left ${isVisible ? 'animate' : ''}`}
              style={{ transitionDelay: `${0.5 + (index * 0.1)}s` }}
            >
              <img
                src={feature.image}
                className="w-full h-64 rounded-md object-cover"
              />
              <div className="py-6 pb-12 relative">
                <h3 className="text-2xl font-semibold text-[#0A0A0A] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#555555] text-basic pr-8">
                  {feature.description}
                </p>
                <button className="absolute bottom-10 right-0 w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[#00B69E]" />
                </button>
              </div>
            </div>
          ))}
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
                    <div className="bg-transparent overflow-hidden">
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
              className="w-12 h-12 bg-[#C7C5C5] rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextCard}
              className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
