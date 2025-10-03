import { ArrowDown } from "lucide-react";

const HeroSection=() => {
  return (
    <div
      className="flex-1 flex flex-col justify-center bg-center bg-no-repeat py-16 rounded-2xl relative"
     
    >
      {/* Overlay for better text readability */}
      
      {/* Content */}
      <div className="px-4 relative z-10">
        {/* Tagline */}
        <div className="mb-6 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
          <div className="inline-block border border-gray-900 px-4 py-2 text-[10px] uppercase tracking-wider text-[#151515] rounded-lg">
            WHERE SPEED MEETS SIMPLICITY
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl font-bold text-black mb-3 tracking-[-0.03em] lg:w-[763px] w-auto lg:h-[240px] h-auto animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
          <span className="font-bold schibsted-grotesk not-italic">Powering <span className="dm-serif-display-italic">Seamless</span></span>
          <br />
          <span className="dm-serif-display-italic">Payments<span className="font-bold schibsted-grotesk not-italic"> for Modern</span></span>
          <br />
          <span className="font-bold schibsted-grotesk not-italic">Restaurants.</span>
        </h1>

        {/* Description */}
        <p className="xl:text-2xl text-lg text-[#616161] mb-16 max-w-xl leading-relaxed lg:w-[561px] w-auto lg:h-[135px] h-auto animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
          Whether it&apos;s dine-in or delivery, Teel puts every payment on autopilot,{" "}
          <strong className="text-gray-700">faster checkouts</strong>,{" "}
          <strong className="text-gray-700">seamless POS integration</strong>, and happier guests that keep coming back.
        </p>

        {/* Call to Action */}
        <div className="flex items-center space-x-2 mb-12 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
          <a href="#benefits" className="text-gray-700 font-bold hover:underline">
            Discover More
          </a>
          <a href="#benefits" className="w-12 h-12 bg-black text-white rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors">
            <ArrowDown className="w-6 h-6 text-[#00B69E]" />
          </a>
        </div>

        {/* Trusted By Section */}
        <div className="space-y-4 relative top-4 lg:top-32 animate-slide-in-left" style={{ animationDelay: '0.5s' }}>
          <p className="text-xs font-bold uppercase tracking-[-0.91px] text-[#474747]">
            TRUSTED BY LEADING COMPANIES
          </p>
          <div className="flex items-center space-x-2">
            <img 
              src="/stripe.png" 
              alt="Stripe" 
              className="h-5 w-auto object-contain"
            />
            <img 
              src="/square.png" 
              alt="Square" 
              className="h-5 w-auto object-contain"
            />
            <img 
              src="/cover.png" 
              alt="Square" 
              className="h-5 w-auto object-contain"
            />          
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;