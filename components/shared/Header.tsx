// src/components/shared/Header.tsx
'use client' // Needed for interactivity

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Menu } from '../ui/Menu'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Navigation data
  const locations = [
    { title: 'Main Campus', href: '/locations/main' },
    { title: 'Downtown', href: '/locations/downtown' },
    { title: 'Westside', href: '/locations/westside' },
  ]

  const ministries = [
    { title: 'Children', href: '/ministries/children' },
    { title: 'Youth', href: '/ministries/youth' },
    { title: 'Women', href: '/ministries/women' },
    { title: 'Men', href: '/ministries/men' },
  ]

  const navLinks = [
    { title: 'About', href: '/about' },
    // { title: 'Beliefs', href: '/beliefs' },
    // { title: 'Sermons', href: '/sermons' },
    // { title: 'Events', href: '/events' },
    { title: 'Give', href: '/give' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
           Hidden Manna
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary transition"
              >
                {link.title}
              </Link>
            ))}
            <Menu title="Locations" items={locations} />
            <Menu title="Ministries" items={ministries} />
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button> */}
            <Button asChild>
              <Link href="/register">Join Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="text-2xl font-bold text-primary">
                Church Name
              </Link>
              <button
                className="p-2 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xl py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}

              <div className="py-2 border-b border-gray-100">
                <h3 className="text-xl font-medium mb-2">Locations</h3>
                <div className="flex flex-col space-y-2 pl-4">
                  {locations.map((location) => (
                    <Link
                      key={location.href}
                      href={location.href}
                      className="text-gray-600 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {location.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="py-2 border-b border-gray-100">
                <h3 className="text-xl font-medium mb-2">Ministries</h3>
                <div className="flex flex-col space-y-2 pl-4">
                  {ministries.map((ministry) => (
                    <Link
                      key={ministry.href}
                      href={ministry.href}
                      className="text-gray-600 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {ministry.title}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            <div className="mt-8 flex flex-col space-y-4">
              <Button asChild>
                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                  Join Us
                </Link>
              </Button>
              {/* <Button variant="outline" asChild>
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
              </Button> */}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}