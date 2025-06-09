import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Church Name</h3>
            <p className="text-gray-300">
              Bringing hope and transformation to our community through the Gospel.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/beliefs" className="text-gray-300 hover:text-white">Our Beliefs</Link></li>
              <li><Link href="/sermons" className="text-gray-300 hover:text-white">Sermons</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-white">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Ministries</h4>
            <ul className="space-y-2">
              <li><Link href="/ministries/kids" className="text-gray-300 hover:text-white">Kids</Link></li>
              <li><Link href="/ministries/youth" className="text-gray-300 hover:text-white">Youth</Link></li>
              <li><Link href="/ministries/women" className="text-gray-300 hover:text-white">Women</Link></li>
              <li><Link href="/ministries/men" className="text-gray-300 hover:text-white">Men</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-white"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaYoutube size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white"><FaTwitter size={20} /></a>
            </div>
            <p className="text-gray-300">contact@church.org</p>
            <p className="text-gray-300">(123) 456-7890</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Church Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}