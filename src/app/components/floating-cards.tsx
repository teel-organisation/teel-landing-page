import { Database, CreditCard, Clock, ArrowRight } from "lucide-react"

export default function FloatingCards() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Smart Insights Card - Top Right */}
      <div className="absolute top-8 right-8 bg-white rounded-2xl p-6 shadow-lg max-w-xs">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Database className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-black mb-2">Smart Insights</h3>
            <p className="text-sm text-gray-600">Track payments & boost revenue with real-time data.</p>
          </div>
        </div>
      </div>

      {/* Payments Made Easier Card - Below Smart Insights */}
      <div className="absolute top-32 right-4 bg-white rounded-2xl p-6 shadow-lg max-w-xs">
        <div>
          <h3 className="font-semibold text-black mb-2">Payments Made Easier</h3>
          <p className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, pu. luctus venenatis, lect.
          </p>
          <button className="flex items-center space-x-2 text-sm font-medium text-black">
            <span>Next P</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Multiple Payment Methods Card - Right of Phone */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-2xl p-6 shadow-lg max-w-xs">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-black mb-2">Multiple Payment Methods</h3>
            <p className="text-sm text-gray-600">Credit, debit, mobile wallets & more.</p>
          </div>
        </div>
      </div>

      {/* Payments in Seconds Card - Bottom Left */}
      <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-lg max-w-xs">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <h3 className="font-semibold text-black mb-2">Payments in seconds</h3>
            <p className="text-sm text-gray-600">Fast processing for dine-in & delivery orders.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
