'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Code, Menu } from 'lucide-react'

interface HeaderProps {
  scrollToSection: (sectionId: string) => void
}

export default function Header({ scrollToSection }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <img 
                src="/assets/logo/logo-indonetix-header.png" 
                alt="Indonetix Logo" 
                className="h-10 w-auto hover:scale-110 transition-transform duration-300"
              />
              {/* <span className="ml-3 text-xl font-bold text-white hover:text-blue-400 transition-colors">
                INDONETIX
              </span> */}
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50"
              >
                Keunggulan
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50"
              >
                Proses
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50"
              >
                Kontak
              </button>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-medium px-6 py-2"
            >
              Mulai Proyek
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-gray-300 hover:bg-gray-800/50">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black/95 backdrop-blur-md border-gray-800">
                <div className="flex flex-col space-y-4 mt-8">
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors text-left hover:bg-gray-800/50"
                  >
                    Beranda
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors text-left hover:bg-gray-800/50"
                  >
                    Layanan
                  </button>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors text-left hover:bg-gray-800/50"
                  >
                    Keunggulan
                  </button>
                  <button
                    onClick={() => scrollToSection('process')}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors text-left hover:bg-gray-800/50"
                  >
                    Proses
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors text-left hover:bg-gray-800/50"
                  >
                    Kontak
                  </button>
                  <div className="pt-4 border-t border-gray-800">
                    <Button 
                      onClick={() => scrollToSection('contact')}
                      className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white"
                    >
                      Mulai Proyek
                    </Button>
                  </div>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-gray-400 text-sm">
                      📞 +62 21 1234 5678
                    </p>
                    <p className="text-gray-400 text-sm">
                      ✉️ hello@indonetix.com
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}