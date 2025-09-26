import { ArrowDownRight } from "lucide-react"

export default function BenefitsSection() {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden px-4 lg:px-20" 
      style={{ 
        backgroundImage: "url('/background.jpg')",
        background: "linear-gradient(270.44deg, rgba(0, 0, 0, 0) 54.48%, #121212 94.5%), url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "2px 8px 13.8px 0px #BDBDBD1A"
      }}
    >
      {/* Background Overlay for readability */}
      <div className="absolute inset-0 z-10"></div>
      
      {/* Additional overlay for content readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content Overlay */}
      <div className="relative z-20 flex items-center min-h-screen">
        <div className="mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white space-y-8">
              {/* BENEFITS Button */}
              <div>
                <button className="flex items-center space-x-2 px-6 py-3 border border-white rounded-md bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm">
                  <ArrowDownRight className="w-4 h-4" />
                  <span className="text-sm font-medium">BENEFITS</span>
                </button>
              </div>

              {/* Headline */}
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-hero-sm">
                <span className="font-sans">Because</span>
                <br />
                <span className="dm-serif-display-italic">Every Second</span>
                <span> Counts</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-white/90 max-w-lg leading-relaxed">
                From speed at the table to smarter insights in the back office, Teel delivers real value where it counts for your business.
              </p>

              {/* Call to Action */}
              <div className="space-y-4">
               <a
                href="#"
                className="text-white font-bold text-[20px] uppercase tracking-wider transition-colors border-b-2 border-[#00B69E] inline-block pb-2 font-semibold"
                >
               STEP INSIDE OUR WORLD
               </a>
                
                {/* Progress Bar Underline */}
                <div className="flex w-[127px] h-[5px] py-12">
  <div className="h-1 bg-[#00B69E] w-12 rounded-full"></div>
  <div className="h-1 bg-[#D9D9D9] flex-1 rounded-full"></div>
</div>
              </div>
            </div>

            {/* Right Side - Visual Elements (for spacing) */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
