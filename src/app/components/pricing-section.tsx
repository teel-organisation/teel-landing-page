"use client"

import { Check, ArrowLeft, ArrowRight, ArrowDownRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function PricingSection() {
  const [currentCard, setCurrentCard] = useState(0)
  const [billingPeriod, setBillingPeriod] = useState('monthly')
  const [selectedCurrency, setSelectedCurrency] = useState('EUR')
  const [isLastCardVisible, setIsLastCardVisible] = useState(false)
  const desktopCarouselRef = useRef<HTMLDivElement>(null)
  
  // Pricing data for different currencies
  const pricingData = {
    EUR: {
      symbol: '€',
      tiers: [
        { 
          monthly: { price: '€16', costPerUser: '€0.64' },
          yearly: { price: '€14.08', costPerUser: '€0.56' }
        },
        { 
          monthly: { price: '€32', costPerUser: '€0.42' },
          yearly: { price: '€28.16', costPerUser: '€0.37' }
        },
        { 
          monthly: { price: '€65', costPerUser: '€0.21' },
          yearly: { price: '€57.20', costPerUser: '€0.18' }
        },
        { 
          monthly: { price: '€85', costPerUser: '€0.17' },
          yearly: { price: '€74.80', costPerUser: '€0.15' }
        }
      ]
    },
    GBP: {
      symbol: '£',
      tiers: [
        { 
          monthly: { price: '£14', costPerUser: '£0.56' },
          yearly: { price: '£12.32', costPerUser: '£0.49' }
        },
        { 
          monthly: { price: '£28', costPerUser: '£0.37' },
          yearly: { price: '£24.64', costPerUser: '£0.33' }
        },
        { 
          monthly: { price: '£57', costPerUser: '£0.18' },
          yearly: { price: '£50.16', costPerUser: '£0.16' }
        },
        { 
          monthly: { price: '£74', costPerUser: '£0.15' },
          yearly: { price: '£65.12', costPerUser: '£0.13' }
        }
      ]
    },
    AUD: {
      symbol: 'A$',
      tiers: [
        { 
          monthly: { price: 'A$25', costPerUser: 'A$0.50' },
          yearly: { price: 'A$22.00', costPerUser: 'A$0.44' }
        },
        { 
          monthly: { price: 'A$57', costPerUser: 'A$0.57' },
          yearly: { price: 'A$50.16', costPerUser: 'A$0.50' }
        },
        { 
          monthly: { price: 'A$116', costPerUser: 'A$0.23' },
          yearly: { price: 'A$102.08', costPerUser: 'A$0.20' }
        },
        { 
          monthly: { price: 'A$151', costPerUser: 'A$0.30' },
          yearly: { price: 'A$132.88', costPerUser: 'A$0.26' }
        }
      ]
    }
  }

  const pricingTiers = [
    {
      id: 1,
      name: "Tier 1",
      description: "0-50 active users (per location)",
      icon: "/email.png",
      buttonText: "Buy Now",
      buttonClass: "bg-teal-500 hover:bg-teal-600",
      features: [
        "Extensive data insights",
        "Onboarding support",
        "Notify customers directly",
        "Use Campaigns to improve revenue",
        "Feature on Discover page",
        "Boost revenue with targeted campaigns"
      ]
    },
    {
      id: 2,
      name: "Tier 2",
      description: "51-100 active users* (per location), access to all features.",
      buttonText: "Contact Sales",
      icon: "/baskets.png",
      buttonClass: "bg-gray-900 hover:bg-gray-800",
      features: [
        "Extensive data insights",
        "Onboarding support",
        "Notify customers directly",
        "Use Campaigns to improve revenue",
        "Feature on Discover page",
        "Boost revenue with targeted campaigns"
      ]
    },
    {
      id: 3,
      name: "Tier 3",
      description: "101-500 active users* (per location), access to all features.",
      buttonText: "Contact Sales",
      icon: "/baskets.png",
      buttonClass: "bg-gray-900 hover:bg-gray-800",
      features: [
        "Extensive data insights",
        "Onboarding support",
        "Notify customers directly",
        "Use Campaigns to improve revenue",
        "Feature on Discover page",
        "Boost revenue with targeted campaigns"
      ]
    },
    {
      id: 4,
      name: "Tier 4",
      description: "501 or more active users* (per location), access to all features.",
      buttonText: "Contact Sales",
      icon: "/baskets.png",
      buttonClass: "bg-gray-900 hover:bg-gray-800",
      features: [
        "Extensive data insights",
        "Onboarding support",
        "Notify customers directly",
        "Use Campaigns to improve revenue",
        "Feature on Discover page",
        "Boost revenue with targeted campaigns"
      ]
    }
  ]

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

  const nextCard = () => {
    if (currentCard < pricingTiers.length - 1 && !isLastCardVisible) {
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
    <section className="py-16 bg-[#EAEAEA] px-4 lg:px-20 xl:px-52-custom">
      <div className="mx-auto px-4">
        <div className="flex items-start justify-between lg:mb-8 mb-4">
          
          {/* Left Side - Content */}
          <div className="flex-1">
            {/* Pricing Button */}
            <div>
              <button id="pricing" className="inline-flex items-center space-x-2 bg-[#EAEAEA] px-6 py-3 rounded-sm text-sm font-medium text-gray-700 transition-colors border border-black scroll-mt-[2cm]">
                <ArrowDownRight className="w-4 h-4" />
                <span>PRICING</span>
              </button>
            </div>

            {/* Main Heading */}
            <div className="space-x-4 flex flex-col lg:flex-row items-start lg:items-center w-full mt-4">
              <div>
              <h2 className="text-5xl xl:text-6xl font-bold text-black leading-tight text-hero-sm">
                Simple Pricing,
                <br />
                <span className="dm-serif-display-italic">Maximum Value</span>
              </h2>
              </div>
              <div>
              <p className="text-basic text-gray-600 max-w-lg leading-relaxed lg:w-96 w-auto">
                No hidden fees, no surprises, just straightforward plans designed to fit restaurants of every size.
              </p>
              </div>

            <div className="lg:flex space-y-4 flex-col hidden lg:items-end lg:justify-end lg:w-[28%]">
              <div className="bg-[#EAEAEA] rounded-lg p-1 flex w-auto border border-[#B9B9B9]">
              <button 
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors w-28 xl:w-36 h-12 ${
                  billingPeriod === 'monthly' 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBillingPeriod('yearly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors w-28 xl:w-36 h-12 ${
                  billingPeriod === 'yearly' 
                    ? 'bg-gray-900 text-white' 
                    : 'text-[#151414] hover:text-gray-800'
                }`}
              >
                Yearly <span className="font-bold text-lg">-12%</span>
              </button>
            </div>
            <div className="flex space-x-1 items-end justify-end">
              <button 
                onClick={() => setSelectedCurrency('EUR')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCurrency === 'EUR' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-[#EAEAEA] hover:text-gray-800 text-[#B9B9B9] border border-[#B9B9B9]'
                }`}
              >
                EUR
              </button>
              <button 
                onClick={() => setSelectedCurrency('GBP')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCurrency === 'GBP' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-[#EAEAEA] hover:text-gray-800 text-[#B9B9B9] border border-[#B9B9B9]'
                }`}
              >
                GBP
              </button>
              <button 
                onClick={() => setSelectedCurrency('AUD')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCurrency === 'AUD' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-[#EAEAEA] hover:text-gray-800 text-[#B9B9B9] border border-[#B9B9B9]'
                }`}
              >
                AUD
              </button>
            </div>
            </div>
            </div>

            {/* Navigation Buttons - Desktop Only */}
            <div className="hidden lg:flex space-x-2 mt-4">
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
                disabled={currentCard === pricingTiers.length - 1 || isLastCardVisible}
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                  currentCard === pricingTiers.length - 1 || isLastCardVisible
                    ? 'bg-[#C7C5C5] cursor-not-allowed' 
                    : 'bg-black'
                }`}
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>

     
           
          </div>

          {/* Right Side - Billing and Currency Toggles */}

        </div>

        <div className="space-y-6 lg:hidden block mb-2 px-2">
            {/* Billing Toggle */}
             <div className="bg-[#EAEAEA] rounded-lg p-1 flex border border-[#B9B9B9] w-fit">
              <button 
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors w-20 h-12 ${
                  billingPeriod === 'monthly' 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBillingPeriod('yearly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors w-fit h-12 ${
                  billingPeriod === 'yearly' 
                    ? 'bg-gray-900 text-white' 
                    : 'text-[#151414] hover:text-gray-800'
                }`}
              >
                Yearly <span className="font-bold text-lg">-12%</span>
              </button>
            </div>


            {/* Currency Selector */}
            <div className="flex justify-between">
              <div className="flex space-x-1">
              <button 
                onClick={() => setSelectedCurrency('EUR')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCurrency === 'EUR' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-[#EAEAEA] hover:text-gray-800 text-[#B9B9B9] border border-[#B9B9B9]'
                }`}
              >
                EUR
              </button>
              <button 
                onClick={() => setSelectedCurrency('GBP')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCurrency === 'GBP' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-[#EAEAEA] hover:text-gray-800 text-[#B9B9B9] border border-[#B9B9B9]'
                }`}
              >
                GBP
              </button>
              <button 
                onClick={() => setSelectedCurrency('AUD')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCurrency === 'AUD' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-[#EAEAEA] hover:text-gray-800 text-[#B9B9B9] border border-[#B9B9B9]'
                }`}
              >
                AUD
              </button>
              </div>
              <div>
              <div className="hidden md:flex lg:hidden space-x-2">
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
                disabled={currentCard === pricingTiers.length - 1 || isLastCardVisible}
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                  currentCard === pricingTiers.length - 1 || isLastCardVisible
                    ? 'bg-[#C7C5C5] cursor-not-allowed' 
                    : 'bg-black'
                }`}
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>
              </div>
            </div>
          </div>
        {/* Desktop Pricing Cards Carousel */}
        <div
          ref={desktopCarouselRef}
          className="hidden md:flex space-x-8 overflow-hidden w-full mb-8"
        >
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className="bg-gray-100 rounded-lg p-8 relative shadow-sm border-4 border-white w-[460px] shrink-0"
            >
              <div className="absolute top-4 right-4">
                <img src="/teel.png" alt={tier.name} className="w-24 h-8" />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#515151] mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{pricingData[selectedCurrency as keyof typeof pricingData].tiers[tier.id - 1][billingPeriod as 'monthly' | 'yearly'].price}</div>
                  <p className="text-[#5E5E5E] w-52 text-sm mb-2">{tier.description}</p>
                  <p className="text-[#5E5E5E] text-xs">est. {pricingData[selectedCurrency as keyof typeof pricingData].tiers[tier.id - 1][billingPeriod as 'monthly' | 'yearly'].costPerUser} per user*</p>
                </div>
                
                <button className={`w-full ${tier.buttonClass} text-white py-3 rounded-md font-medium transition-colors flex items-center justify-center space-x-2`}>
                  {tier.buttonText}
                  <span><img src={tier.icon} alt={tier.name} className="w-5 h-5 ml-2" /></span>
                </button>
                
                <div className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#141B34]" />
                      <span className="text-[#515151]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Carousel Indicators */}
        <div className="hidden md:flex justify-center space-x-2 mb-8">
          {pricingTiers.map((_, index) => {
            // Show the last dot as active when the last card is fully visible
            const isActive = isLastCardVisible && index === pricingTiers.length - 1 
              ? true 
              : index === currentCard && !isLastCardVisible
            return (
              <button
                key={index}
                onClick={() => {
                  setCurrentCard(index)
                  scrollToCard(index)
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  isActive ? "bg-black" : "bg-gray-300"
                }`}
              />
            )
          })}
        </div>

        {/* Mobile Pricing Cards Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentCard * 100}%)` }}
              >
                {pricingTiers.map((tier) => (
                  <div key={tier.id} className="w-full flex-shrink-0 px-2">
                    <div className="bg-gray-100 rounded-lg p-8 relative shadow-sm border-t-4 border-white">
                      <div className="absolute top-4 right-4">
                        <img src="/teel.png" alt={tier.name} className="w-24 h-10" />
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                          <div className="text-4xl font-bold text-gray-900 mb-2">{pricingData[selectedCurrency as keyof typeof pricingData].tiers[tier.id - 1][billingPeriod as 'monthly' | 'yearly'].price}</div>
                          <p className="text-gray-600 mb-2">{tier.description}</p>
                          <p className="text-gray-500 text-sm">est. {pricingData[selectedCurrency as keyof typeof pricingData].tiers[tier.id - 1][billingPeriod as 'monthly' | 'yearly'].costPerUser} per user*</p>
                        </div>
                        
                        <button className={`w-full ${tier.buttonClass} text-white py-3 rounded-lg font-medium transition-colors`}>
                          {tier.buttonText}
                        </button>
                        
                        <div className="space-y-3">
                          {tier.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <Check className="w-5 h-5 text-teal-500" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {pricingTiers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentCard ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          {/* Mobile Navigation Arrows */}
          <div className="flex justify-center space-x-4 mt-6">
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
              onClick={() => {
                if (currentCard < pricingTiers.length - 1) {
                  const newIndex = currentCard + 1
                  setCurrentCard(newIndex)
                }
              }}
              disabled={currentCard === pricingTiers.length - 1}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                currentCard === pricingTiers.length - 1 
                  ? 'bg-[#C7C5C5] cursor-not-allowed' 
                  : 'bg-black'
              }`}
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
