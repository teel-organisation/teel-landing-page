export default function PhoneMockup() {
  return (
    <div className="relative">
      {/* Back Phone */}
      <div className="absolute top-8 left-8 w-64 h-[500px] bg-gray-800 rounded-[3rem] p-2 transform rotate-12 shadow-2xl">
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
          <div className="h-full bg-gradient-to-b from-gray-100 to-gray-200"></div>
        </div>
      </div>

      {/* Front Phone */}
      <div className="relative z-10 w-64 h-[500p43x] bg-gray-800 rounded-[3rem] p-2 transform -rotate-6 shadow-2xl">
      <img src="/payment.png" alt="Phone Header" className="w-full h-auto" />
      </div>
    </div>
  )
}
