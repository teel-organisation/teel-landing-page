"use client";

import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      router.replace(pathname);
    }
  }, [pathname, router]);

const handleFocusConsultation = (e: React.MouseEvent) => {
  e.preventDefault();
  const input = document.getElementById("consultation") as HTMLInputElement;

  if (input) {
    input.focus();

    setTimeout(() => {
      // Add a smaller offset (10px) for mobile, larger (200px) for bigger screens
      const offset = window.innerWidth > 768 ? 200 : 205;

      const y = input.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 50);
  }

  setIsMobileMenuOpen(false);
};

  return (
    <header
      className="relative bg-[#FFFFFF]/40 border-2 border-white rounded-xl px-6 backdrop-blur-[100px] h-20 z-[9999]"
      style={{
        backgroundImage: "url('/vector.png')",
        boxShadow: "2px 8px 13.8px 0px #BDBDBD14",
      }}
    >
      <div className="mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <img src="/teelLogo.png" alt="Teel logo" className="w-24 h-6" />
            <span className="text-[#1b2025] text-2xl font-bold">teel</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 z-10">
            <Link
              href="#features"
              className="text-[#3c3c43] hover:text-[#1b2025] transition-colors duration-200"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-[#3c3c43] hover:text-[#1b2025] transition-colors duration-200"
            >
              Pricing
            </Link>

            {/* CTA Button */}
            <a
              href="consultation"
              onClick={handleFocusConsultation}
              className="text-black px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 font-medium"
            >
              <span className="text-black font-bold">Book a Demo</span>
              <div className="bg-black rounded-md p-2 w-10 h-10 flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-[#00B69E]" />
              </div>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#3c3c43] hover:text-[#1b2025] transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg z-[9999] mt-1">
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              href="#features"
              className="text-[#3c3c43] hover:text-[#1b2025] transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-[#3c3c43] hover:text-[#1b2025] transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#consultation"
              className="text-black px-4 py-2 rounded-lg hover:bg-[#1b1b1b] transition-colors duration-200 flex items-center justify-center space-x-2 font-medium bg-gray-100 mt-2"
              onClick={handleFocusConsultation}
            >
              <span className="text-black font-bold">Book a Demo</span>
              <div className="bg-black rounded-lg p-1.5 w-6 h-6 flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 text-[#00B69E]" />
              </div>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
