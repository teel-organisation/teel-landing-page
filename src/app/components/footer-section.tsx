export default function FooterSection() {
  return (
    <footer className="relative bg-[#EAEAEA] py-16 overflow-hidden lg:px-20 xl:px-52 px-4">
      {/* Large teel watermark */}
      <div className="absolute bottom-0 left-0 w-full h-32 flex items-end justify-center">
        <span className="text-8xl lg:text-9xl font-bold text-gray-200 opacity-30 select-none">
          teel
        </span>
      </div>

      <div className="relative z-10 mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Logo Column */}
          <div className="space-y-6 h-full">
            <div className="flex items-center justify-center h-full">
              <img src="/logo.png" alt="Logo" className="w-40 h-8" />
            </div>
          </div>

          {/* Newsletter Section (make it wider using col-span) */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-2xl font-bold text-black">Join our Newsletter</h3>
            <p className="text-[#898989] text-sm leading-relaxed w-80">
              Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            </p>

            {/* Email Input */}
            <div className="mt-6 max-w-xl">
              <input
                type="email"
                placeholder="Enter your email Address"
                className="w-full px-5 py-4 rounded-lg text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white shadow-sm"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-black">Quick Link</h3>
            <div className="space-y-2">
              <a href="#" className="block text-[#898989] hover:text-black transition-colors">
                Features
              </a>
              <a href="#" className="block text-[#898989] hover:text-black transition-colors">
                Merchants
              </a>
              <a href="#" className="block text-[#898989] hover:text-black transition-colors">
                Pricing
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-black">Contact Info</h3>
            <div className="space-y-2 text-[#898989]">
              <p>South Circular Road, Dublin Ireland</p>
              <p>+3530091166724</p>
              <p>Mon-Fri 9am - 6pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="flex justify-center items-center mx-24 lg:mx-48 mt-20">
        <img src="/teels.png" alt="Footer" className="w-full h-auto" />
      </div>
    </footer>
  );
}
