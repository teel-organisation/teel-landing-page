import Header from "./components/header";
import HeroSection from "./components/hero-section";
import FeaturesSection from "./components/features-section";
import BenefitsSection from "./components/benefits-section";
import WaitlistSection from "./components/waitlist-section";
import ResultsSection from "./components/results-section";
import PricingSection from "./components/pricing-section";
import FAQSection from "./components/faq-section";
import FooterSection from "./components/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-12 lg:px-20 xl:px-52 px-4 bg-[#EAEAEA]">
      <Header />
      </div>
      
      <main>
        {/* Hero Section */}
        <div className="mx-auto px-4 lg:px-20 xl:px-52 py-12 bg-[#EAEAEA]"   style={{ 
        backgroundImage: "url('/Vector.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
          <div className="flex lg:flex-row flex-col w-full items-center w-full">
            {/* Left Side - Hero Content */}
            <div className="flex flex-col justify-center w-full lg:w-[60%] ">
              <HeroSection />
            </div>
            <div className="flex flex-col justify-center items-center w-full lg:w-[40%] relative bottom-8 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <img src="/payment.png" alt="Phone Header" className="lg:w-full w-3/4 h-auto lg:h-[595.15px]" />
            
            </div>
          </div>
        </div>

        {/* Features Section */}
        <FeaturesSection />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Waitlist Section */}
        <WaitlistSection />

        {/* Results Section */}
        <div className="px-4 lg:px-32 bg-[#EAEAEA]">
        <ResultsSection />
        </div>

        {/* Pricing Section */}
        <PricingSection />

        {/* FAQ Section */}
        <div className="px-4 lg:px-32 bg-[#EAEAEA]">
        <FAQSection />
        </div>
      </main>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
