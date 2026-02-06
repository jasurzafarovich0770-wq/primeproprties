'use client'

import Link from 'next/link'
import { Facebook, Instagram, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Prime Properties</h3>
            <p className="text-gray-400 mb-6">
              {t.footerDescription}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Telegram"
              >
                <MessageCircle size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {t.home}
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {t.projects}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.contactInfo}</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Business District</p>
              <p>Metropolitan City, MC 12345</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@primeproperties.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Prime Properties. {t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  )
}