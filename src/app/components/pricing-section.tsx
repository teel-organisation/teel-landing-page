"use client"

import { ChevronRight, Check, ArrowLeft, ArrowRight, ArrowDownRight } from "lucide-react";
import { useState, useRef } from "react";

export default function PricingSection() {
  const [currentCard, setCurrentCard] = useState(0)
  const [billingPeriod, setBillingPeriod] = useState('monthly')
  const [selectedCurrency, setSelectedCurrency] = useState('EUR')
  const desktopCarouselRef = useRef<HTMLDivElement>(null)
  
  const pricingTiers = [
    {
      id: 1,
      name: "Tier 1",
      price: "€16",
      description: "Perfect for 0-50 active users (per location)",
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
      price: "€32",
      description: "51-100 active users* (per location), access to all features.",
      buttonText: "Buy Now",
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
      price: "€65",
      description: "101-500 active users* (per location), access to all features.",
      buttonText: "Buy Now",
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

  const nextCard = () => {
    const newIndex = (currentCard + 1) % pricingTiers.length
    setCurrentCard(newIndex)
    scrollToCard(newIndex)
  }

  const prevCard = () => {
    const newIndex = (currentCard - 1 + pricingTiers.length) % pricingTiers.length
    setCurrentCard(newIndex)
    scrollToCard(newIndex)
  }
  return (
    <section className="py-16 bg-[#EAEAEA] px-4 lg:px-20 xl:px-52">
      <div className="mx-auto px-4">
        <div className="flex items-start justify-between lg:mb-8 mb-4">
          
          {/* Left Side - Content */}
          <div className="flex-1">
            {/* Pricing Button */}
            <div>
              <button className="inline-flex items-center space-x-2 bg-[#EAEAEA] px-6 py-3 rounded-sm text-sm font-medium text-gray-700 transition-colors border border-black">
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
                Yearly
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
                className="w-12 h-12 bg-[#C7C5C5] rounded-lg flex items-center justify-center hover:bg-gray-400 transition-colors"
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
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors w-20 h-12 ${
                  billingPeriod === 'yearly' 
                    ? 'bg-gray-900 text-white' 
                    : 'text-[#151414] hover:text-gray-800'
                }`}
              >
                Yearly
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
                className="w-12 h-12 bg-[#C7C5C5] rounded-lg flex items-center justify-center hover:bg-gray-400 transition-colors"
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
                <img src="/teel.png" alt={tier.name} className="w-24 h-10" />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#515151] mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{tier.price}</div>
                  <p className="text-[#5E5E5E] w-52 text-sm">{tier.description}</p>
                </div>
                
                <button className={`w-full ${tier.buttonClass} text-white py-3 rounded-md font-medium transition-colors`}>
                  {tier.buttonText}
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
          {pricingTiers.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentCard(index)
                scrollToCard(index)
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentCard ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
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
                          <div className="text-4xl font-bold text-gray-900 mb-2">{tier.price}</div>
                          <p className="text-gray-600">{tier.description}</p>
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
              className="w-12 h-12 bg-[#C7C5C5] rounded-lg flex items-center justify-center hover:bg-gray-400 transition-colors"
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
  );
}
