// src/components/ui/Menu.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa'

interface MenuItem {
  title: string
  href?: string
  items?: MenuItem[]
}

interface MenuProps {
  title: string
  items: MenuItem[]
}

export function Menu({ title, items }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span>{title}</span>
        <FaChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {items.map((item, index) => (
            <div key={index}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.title}
                </Link>
              ) : (
                <span className="block px-4 py-2 text-sm font-medium text-gray-500">
                  {item.title}
                </span>
              )}
              {item.items && (
                <div className="pl-2">
                  {item.items.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href || '#'}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}