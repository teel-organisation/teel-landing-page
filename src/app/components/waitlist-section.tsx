import { ArrowUpRight, CheckCircle } from "lucide-react";

export default function WaitlistSection() {
  return (
    <section className="relative min-h-screen bg-[#EAEAEA] overflow-hidden pr-0 lg:pr-20 xl:pr-52">
      {/* Background geometric shapes */}
     
      <div
    className="absolute bottom-4 right-140 w-52 h-52 opacity-10 z-10 bg-no-repeat bg-contain"
    style={{ backgroundImage: "url('/Rectangle.png')" ,filter: "invert(0.8)" }}
  />

  <div
    className="absolute bottom-44 right-56 w-48 h-48 opacity-10 -translate-x-32 translate-y-32 z-10 bg-no-repeat bg-contain"
    style={{ backgroundImage: "url('/Circle.png')",filter: "invert(0.8)" }}
  />

<div
    className="absolute bottom-60 right-12 w-48 h-48 opacity-10 -translate-x-32 translate-y-32 z-10 bg-no-repeat bg-contain"
    style={{ backgroundImage: "url('/Circle.png')",filter: "invert(0.8)" }}
  />
  
  <div
    className="absolute bottom-4 right-20 w-24 h-48 opacity-10 z-10 bg-no-repeat bg-contain"
    style={{ backgroundImage: "url('/Rectangles.png')",filter: "invert(0.8)" }}
  />
      
      {/* Main content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="mx-auto px-4 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
          <div className="space-y-8 md:hidden block mt-4">
              {/* Small Header */}
              <div>
                <div className="inline-block border border-black px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-700">
                  BE FIRST. BE FASTER
                </div>
              </div>

              {/* Main Headline */}
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Be <span className="italic font-serif">First</span> to the Future of Payments.
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
                Join our waitlist today and get early access to Teel—built to power faster checkouts and happier guests.
              </p>

              {/* Call to Action Button */}
              <button className="flex items-center space-x-3 text-white px-8 py-4">
                <span className="font-bold text-black">Book a Demo</span>
                <div className="bg-black rounded-md p-2 w-8 h-8 flex items-center justify-center h-10 w-10">
                <ArrowUpRight className="w-6 h-6 text-[#00B69E]" />
                </div>
              </button>
          </div>

            {/* Left Side - Phone Mockup and Floating Cards */}
            <div className="md:justify-end md:items-end flex justify-center items-center">
                <img src="/waitlist.png" alt="Waitlist" className=" h-auto" />
            </div>
            
            {/* Right Side - Text Content */}
            <div className="space-y-4 md:block hidden justify-start flex">
              {/* Small Header */}
              <div>
                <div className="inline-block border border-black px-4 py-2 text-xs uppercase tracking-wider text-black border-black rounded-md text-xs">
                  BE FIRST. BE FASTER
                </div>
              </div>

              {/* Main Headline */}
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-hero-sm w-[652px] h-[140px]">
                Be <span className="dm-serif-display-italic">First</span> to the Future of Payments.
              </h2>

              {/* Description */}
              <p className="text-2xl text-gray-500 max-w-2xl leading-relaxed w-[652px] h-[68px] text-[#616161]">
                Join our waitlist today and get early access to Teel—built to power faster checkouts and happier guests.
              </p>

              {/* Call to Action Button */}
              <button className="flex items-center space-x-3 text-white py-4">
                <span className="font-bold text-black">Book a Demo</span>
                <div className="bg-black rounded-md p-2 w-8 h-8 flex items-center justify-center h-10 w-10">
                <ArrowUpRight className="w-6 h-6 text-[#00B69E]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
