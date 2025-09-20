import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">

      {/* Main Footer Content */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src="/assets/logo/logo-indonetix.png" 
                  alt="Indonetix Logo" 
                  className="h-10 w-auto"
                />
                <span className="ml-3 text-xl font-bold text-white">INDONETIX</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Perusahaan digital terdepan yang menyediakan solusi website dan IT comprehensive untuk bisnis modern di era digital.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white text-xl font-bold mb-6">Layanan Kami</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                    Custom Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                    E-Commerce Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                    Company Profile Website
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                    Web Application
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                    SEO Setup & Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                    Maintenance & Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                    <span className="w-1 h-1 bg-red-400 rounded-full mr-3"></span>
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                    <span className="w-1 h-1 bg-red-400 rounded-full mr-3"></span>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                    <span className="w-1 h-1 bg-red-400 rounded-full mr-3"></span>
                    Blog & Artikel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                    <span className="w-1 h-1 bg-red-400 rounded-full mr-3"></span>
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                    <span className="w-1 h-1 bg-red-400 rounded-full mr-3"></span>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors flex items-center">
                    <span className="w-1 h-1 bg-red-400 rounded-full mr-3"></span>
                    Kebijakan Privasi
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white text-xl font-bold mb-6">Hubungi Kami</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">DKI JAKARTA, Jakarta Selatan</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">+62 858 1129 0377</p>
                    <p className="text-gray-400 text-sm">Satria</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">hello@indonetix.com</p>
                    <p className="text-gray-400 text-sm">support@indonetix.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-800" />

          {/* Bottom Footer */}
          <div className="mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Indonetix. All rights reserved.
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span>System Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}