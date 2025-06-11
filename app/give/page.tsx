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
                <p className="font-medium">First Bank of Nigeria</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Account Name</p>
                <p className="font-medium">The Hidden Manna Ministries</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Account Number</p>
                <p className="font-medium">1234567890</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Account Type</p>
                <p className="font-medium">Current Account</p>
              </div>
            </div>
          </div>
        </div>

        {/* US Dollar Account */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FaMoneyBillWave className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">US Dollar Account</h2>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Bank Name</p>
                <p className="font-medium">First Bank of Nigeria</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Account Name</p>
                <p className="font-medium">The Hidden Manna Ministries</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Account Number</p>
                <p className="font-medium">0987654321</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Swift Code</p>
                <p className="font-medium">FBNING</p>
              </div>
            </div>
          </div>
        </div>

        {/* Online Payment */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex items-center gap-3 mb-6">
            <FaCreditCard className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">Online Payment</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-600">
              For online donations, please visit our payment portal or contact our finance department for assistance.
            </p>
            
            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Contact Information</h3>
              <p className="text-gray-600">Email: finance@hiddenmanna.org</p>
              <p className="text-gray-600">Phone: +234 123 456 7890</p>
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