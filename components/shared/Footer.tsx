import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className='w-fit'>
            <h3 className="text-xl font-bold mb-4">The Hidden Manna Ministries</h3>
            <p className="text-gray-300 text-md">
            We are commissioned by God to preach the gospel of Jesus Christ in Nigeria and all over the world

            </p>
          </div>
          
          <div className='w-fit'>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/ministries" className="text-gray-300 hover:text-white">Ministries</Link></li>
              {/* <li><Link href="/sermons" className="text-gray-300 hover:text-white">Sermons</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-white">Events</Link></li> */}
            </ul>
          </div>
          
          {/* <div>
            <h4 className="font-bold mb-4">Ministries</h4>
            <ul className="space-y-2">
              <li><Link href="/ministries/kids" className="text-gray-300 hover:text-white">Kids</Link></li>
              <li><Link href="/ministries/youth" className="text-gray-300 hover:text-white">Youth</Link></li>
              <li><Link href="/ministries/women" className="text-gray-300 hover:text-white">Women</Link></li>
              <li><Link href="/ministries/men" className="text-gray-300 hover:text-white">Men</Link></li>
            </ul>
          </div> */}
          
          <div className='w-fit'>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com/search/top?q=the%20hidden%20manna%20ministries" target='_blank' className="text-gray-300 hover:text-white"><FaFacebook size={20} /></a>
              <a href="https://www.instagram.com/mannabiblechurch?igsh=anBqZjlrY2lxenIw" target='_blank' className="text-gray-300 hover:text-white"><FaInstagram size={20} /></a>
              <a href="https://www.youtube.com/@thehiddenmannaministries" target='_blank' className="text-gray-300 hover:text-white"><FaYoutube size={20} /></a>
              <a href="https://x.com/manabiblechurch?t=VijUL7oE-d5-oECocKGAXw&s=08" target='_blank' className="text-gray-300 hover:text-white"><FaTwitter size={20} /></a>
            </div>
            <p className="text-gray-300">thehiddenmannaministries@gmail.com</p>
            <p className="text-gray-300 w-fit">+2348066307525</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} The Hidden Manna Ministries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}