"use client";

import { useState } from "react";
import { ArrowDownRight, ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "Who is Teel designed for?",
      answer: "Teel is designed for restaurants, cafes, bars, and food service businesses of all sizes who want to streamline their payment process and improve customer experience."
    },
    {
      question: "What POS systems does Teel work with?",
      answer: "Teel integrates with most major POS systems including Square, Toast, Clover, Lightspeed, and many others. Our team can help you set up the integration that works best for your business."
    },
    {
      question: "Why Teel instead of other QR payment apps?",
      answer: "Teel offers real-time settlement, seamless POS integration, and is specifically designed for restaurants. Unlike generic payment apps, Teel understands the unique needs of food service businesses."
    },
    {
      question: "How long does it take to set up Teel in my restaurant?",
      answer: "Setup typically takes 15-30 minutes. Our team provides onboarding support to ensure everything is configured correctly and your staff is trained on the system."
    },
    {
      question: "How do restaurants get paid?",
      answer: "Restaurants receive payments in real-time directly to their existing bank account. There are no delays or waiting periods - you get your money the moment a payment is made."
    },
    {
      question: "Can customers split bills or pay individually at the table?",
      answer: "Yes! Teel supports bill splitting and individual payments. Customers can easily split the bill among multiple people or pay for their own items directly from their table."
    },
    {
      question: "Can Teel scale with my business as I grow?",
      answer: "Absolutely. Teel is designed to grow with your business. Whether you're a single location or a multi-location restaurant group, our pricing tiers and features scale to meet your needs."
    }
  ];

  return (
    <section className="py-16 bg-white px-4 lg:px-20">
      <div className="mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* FAQ Button */}
            <div>
              <button className="inline-flex items-center space-x-2 border border-black px-6 py-3 rounded-sm text-[10px] font-medium text-black transition-colors">
                <ArrowDownRight className="w-4 h-4" />
                <span>FAQ</span>
              </button>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-hero-sm lg:w-[492px] w-auto lg:h-[140px] h-auto">
                <span className="dm-serif-display-italic">Everything</span> You<br />
                Need to Know
              </h2>
              
              <p className="text-2xl text-[#616161] max-w-lg leading-relaxed lg:w-[492px] w-auto lg:h-[68px] h-auto">
                Quick answers to the most common questions about getting started with Teel.
              </p>
            </div>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-4">
  {faqItems.map((item, index) => (
    <div
      key={index}
      className="bg-[#EAEAEA] border border-gray-200 rounded-lg p-6 cursor-pointer transition-colors w-auto h-auto"
      onClick={() => toggleItem(index)}
    >
      <div className="flex items-center justify-between">
        {/* Question text (no padding-right needed) */}
        <h3 className="text-basic font-medium text-[#6D6D6D]">
          {item.question}
        </h3>

        {/* Chevron always at the end */}
        <div className="flex-shrink-0 ml-4">
          <div className="w-5 h-5 rounded-full flex items-center justify-center border-2 border-black">
            <ChevronDown 
              className={`w-4 h-4 text-black transition-transform ${
                openItems.includes(index) ? 'rotate-180' : ''
              }`} 
            />
          </div>
        </div>
      </div>
      
      {openItems.includes(index) && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-gray-600 leading-relaxed">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}
