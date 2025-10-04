"use client"

import { useState } from "react"

export default function FooterSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '310b6de7-8826-4bd9-af6a-a7dc3f8d1013', // You'll need to get this from web3forms.com
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: 'New Contact Form Submission from Teel Landing Page',
          to: 'business@teelapp.com',
        })
      })

      const result = await response.json()
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <footer
      className="relative py-16 overflow-hidden lg:px-20 xl:px-52 px-4"
      style={{
        background:
          "linear-gradient(224.22deg, #00B69E 0%, #00362F 99.21%)",
      }}
    >
      {/* Background Image */}
      <div className="absolute top-0 left-0 opacity-10 w-[30%]">
        <img 
          src="/envOne.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-12 left-32 w-1/2 opacity-10">
        <img 
          src="/envTwo.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
        {/* Content Layer */}
        <div className="relative z-10 mx-auto px-4">
          <div className="flex flex-col lg:block">
            {/* Contact Form Section */}
            <div className="flex flex-col xl:flex-row w-full items-start xl:items-center justify-between space-y-6 xl:space-y-0 xl:space-x-2 ">
              <div>
              <h3 className="text-3xl font-bold text-white font-bold schibsted-grotesk not-italic text-[#CDFEF7]">
                We&apos;re Just a
              </h3>
              <h3 className="text-3xl font-bold text-white dm-serif-display-italic text-[#CDFEF7]">
               Message Away
              </h3>
              <p className="text-base leading-relaxed w-60 text-[#93CEC6]">
                Fill out your information and our team will get back to you shortly
              </p>
              </div>
              

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-4 lg:space-y-0 xl:space-x-4 flex flex-col xl:flex-row w-full xl:w-auto">
                <div className="w-full xl:w-[200px]">
                  <label className="block text-white text-sm mb-2">Enter Full Name *</label>
                  <input id="consultation"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 pb-5 bg-transparent border-b border-white text-white focus:outline-none focus:border-teal-300"
                  />
                </div>
                <div className="w-full xl:w-[200px]">
                  <label className="block text-white text-sm mb-2">Enter Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 pb-5 bg-transparent border-b border-white text-white focus:outline-none focus:border-teal-300"
                  />
                </div>
                <div className="w-full xl:w-[200px]">
                  <label className="block text-white text-sm mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 pb-5 bg-transparent border-b border-white text-white focus:outline-none focus:border-teal-300"
                  />
                </div>
              </form>

              <div className="w-full xl:w-auto">
                <button 
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.company}
                  className={`w-full lg:w-44 p-3 rounded-lg font-medium transition-colors font-bold ${
                    isSubmitting || !formData.name || !formData.email || !formData.company
                      ? 'bg-white text-black cursor-not-allowed'
                      : 'bg-white text-black'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Get Consultation'}
                </button>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <p className="text-green-300 text-sm mt-2">
                    Thank you! We&apos;ll get back to you shortly.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-300 text-sm mt-2">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </div>

            {/* Company Info */}
            <div className="space-y-4 my-14 flex flex-col lg:flex-row justify-between items-center border-t border-[#C0FFF766]">
           
              <div className="pt-12 items-center">
              <div className="relative bottom-3">
                <img src="/green-teels.png" alt="Logo" className="w-32 h-6 " />
              </div>
              <p className="text-[#93CEC6] text-base leading-relaxed w-72">
                Teel powers fast, secure payments for restaurants and merchants.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-3 mt-4">
              <a href="https://wa.me/353892211427?text=Hello%20Teel%20Team%2C%20I'd%20like%20to%20book%20a%20demo" target="_blank" rel="noopener noreferrer">
                <img src="/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
              </a>

              <a href="https://www.instagram.com/teel.app" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.png" alt="Instagram" className="w-8 h-8" />
              </a>

              <a href="https://www.linkedin.com/company/teel-payments" target="_blank" rel="noopener noreferrer">
                <img src="/linkedIn.png" alt="LinkedIn" className="w-8 h-8" />
              </a>   
                {/*<img src="/twitter.png" alt="Logo" className="w-8 h-8" />*/}
              </div>
              </div>
             
            
              <div className="space-y-6 lg:space-y-0 lg:space-x-6 flex flex-col lg:flex-row justify-start lg:justify-end items-start lg:items-end mt-6 lg:mt-0">
              {/* Quick Links */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#CDFEF7]">Quick Link</h3>
                <div className="space-y-2 text-base">
                  <a href="#features" className="block text-[#93CEC6] hover:text-white transition-colors">
                    Features
                  </a>
                  <a href="#pricing" className="block text-[#93CEC6] hover:text-white transition-colors">
                    Merchants
                  </a>{/**/} 
                  <a href="#pricing" className="block text-[#93CEC6] hover:text-white transition-colors">
                    Pricing
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#CDFEF7]">Contact Info</h3>
                <div className="space-y-2 text-[#93CEC6]">
                  <p>51 Bracken Road, Sandyford Business Park</p>
                  <p>+353892211427</p>
                  <p>Mon - Fri 9am - 6pm</p>
                </div>
              </div>
            </div>
            </div>

            {/* Quick Links & Contact Info */}
        
          </div>

        {/* Copyright and Legal Links */}
        <div className="mt-16 pt-8 border-t border-[#C0FFF766] flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">
            © 2025 Teel. All rights reserved
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="" className="text-white text-sm underline hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="" className="text-white text-sm underline hover:text-white transition-colors">
              Term of Service
            </a>
            <a href="" className="text-white text-sm underline hover:text-white transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>

        <div className="mt-6 relative -bottom-16 left-0 flex items-end justify-center w-full h-full">
          <img src="/teels.png" alt="Logo" className="w-full h-full" />
        </div>
      </div>
    </footer>
  );
}
