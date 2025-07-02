import { FaUniversity, FaCreditCard, FaMoneyBillWave } from 'react-icons/fa'

export default function GivePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Give to Hidden Manna</h1>
          <p className="text-sm text-gray-600">
            Support our ministry and help us spread the gospel through your generous donations.
          </p>
        </div>

        {/* Bank Transfer Details */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FaUniversity className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">Bank Transfer</h2>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Bank Name</p>
                <p className="font-medium">Union Bank of Nigeria</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Account Name</p>
                <p className="font-medium">The Hidden Manna Ministries</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Account Number</p>
                <p className="font-medium">0001402013</p>
              </div>
            </div>
          </div>
        </div>

        {/* US Dollar Account */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FaMoneyBillWave className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">Naira Account 2</h2>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Bank Name</p>
                <p className="font-medium">Sterling Bank</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Account Name</p>
                <p className="font-medium">The Hidden Manna Ministries</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Account Number</p>
                <p className="font-medium">0086718425</p>
              </div>
            </div>
          </div>
        </div>


        {/* Note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Please include your name and purpose of payment in the transfer description.</p>
          <p className="mt-2">For any questions regarding donations, please contact our finance department.</p>
        </div>
      </div>
    </main>
  )
}