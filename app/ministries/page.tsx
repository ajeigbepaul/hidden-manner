import Link from 'next/link'
import { FaUsers, FaHandHoldingHeart, FaMusic, FaBook, FaPray, FaChild } from 'react-icons/fa'

interface Ministry {
  title: string
  description: string
  icon: React.ReactNode
}

const ministries: Ministry[] = [
  {
    title: "Worship Ministry",
    description: "Leading the congregation in praise and worship through music, creating an atmosphere of reverence and spiritual connection.",
    icon: <FaMusic className="h-8 w-8" />
  },
  {
    title: "Prayer Ministry",
    description: "Dedicated to intercessory prayer, spiritual warfare, and supporting the church through prayer.",
    icon: <FaPray className="h-8 w-8" />
  },
  {
    title: "Children's Ministry",
    description: "Nurturing young hearts in faith through age-appropriate Bible lessons, activities, and spiritual guidance.",
    icon: <FaChild className="h-8 w-8" />
  },
  {
    title: "Bible Study Ministry",
    description: "Deep diving into God's word through systematic study, discussion, and application of biblical principles.",
    icon: <FaBook className="h-8 w-8" />
  },
  {
    title: "Outreach Ministry",
    description: "Extending God's love to the community through evangelism, charity work, and social services.",
    icon: <FaHandHoldingHeart className="h-8 w-8" />
  },
  {
    title: "Fellowship Ministry",
    description: "Building strong relationships within the church community through social events and group activities.",
    icon: <FaUsers className="h-8 w-8" />
  }
]

export default function MinistriesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Ministries</h1>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Discover the various ways you can serve, grow, and connect with our church community through our diverse ministries.
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 gap-8">
          {ministries.map((ministry, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    {ministry.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{ministry.title}</h2>
                </div>
                
                <p className="text-gray-600">
                  {ministry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to Get Involved?</h2>
          <p className="text-gray-600 mb-6 text-sm">
            We welcome everyone to join our ministries and serve in the church. Contact us to learn more about how you can participate.
          </p>
          <Link href={"/contact"} className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
