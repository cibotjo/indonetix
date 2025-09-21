'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

interface HeaderProps {
  scrollToSection: (sectionId: string) => void
}

export default function Header({ scrollToSection }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#001f3f] to-[#41729f] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <img 
                src="/assets/logo/logo-indonetix-header.png" 
                alt="Logo Indonetix - Solusi Digital Terbaik untuk Bisnis Anda" 
                className="h-10 w-auto hover:scale-110 transition-transform duration-300"
                width="120"
                height="40"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-[#e1f1ff] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#41729f]/30"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-[#e1f1ff] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#41729f]/30"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-[#e1f1ff] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#41729f]/30"
              >
                Keunggulan
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-[#e1f1ff] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#41729f]/30"
              >
                Portofolio
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-[#e1f1ff] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#41729f]/30"
              >
                Proses
              </button>
              {/* <button
                onClick={() => scrollToSection('pricing')}
                className="text-[#e1f1ff] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#41729f]/30"
              >
                Harga
              </button> */}
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[#e1f1ff] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#41729f]/30"
              >
                Kontak
              </button>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#e1f1ff] text-[#001f3f] hover:bg-white font-medium px-6 py-2 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Mulai Proyek
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#e1f1ff] hover:text-white hover:bg-[#41729f]/50">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-b from-[#001f3f] to-[#41729f] border-l border-[#e1f1ff]/30">
                <div className="flex flex-col space-y-4 mt-8">
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-[#e1f1ff] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors text-left hover:bg-[#41729f]/30"
                  >
                    Beranda
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-[#e1f1ff] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors text-left hover:bg-[#41729f]/30"
                  >
                    Layanan
                  </button>
                  <button
                    onClick={() => scrollToSection('portfolio')}
                    className="text-[#e1f1ff] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors text-left hover:bg-[#41729f]/30"
                  >
                    Portofolio
                  </button>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="text-[#e1f1ff] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors text-left hover:bg-[#41729f]/30"
                  >
                    Keunggulan
                  </button>
                  <button
                    onClick={() => scrollToSection('process')}
                    className="text-[#e1f1ff] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors text-left hover:bg-[#41729f]/30"
                  >
                    Proses
                  </button>
                  <button
                    onClick={() => scrollToSection('pricing')}
                    className="text-[#e1f1ff] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors text-left hover:bg-[#41729f]/30"
                  >
                    Harga
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-[#e1f1ff] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors text-left hover:bg-[#41729f]/30"
                  >
                    Kontak
                  </button>
                  <div className="pt-4 border-t border-[#e1f1ff]/30">
                    <Button 
                      onClick={() => scrollToSection('contact')}
                      className="w-full bg-[#e1f1ff] text-[#001f3f] hover:bg-white"
                    >
                      Mulai Proyek
                    </Button>
                  </div>
                  <div className="pt-4 border-t border-[#e1f1ff]/30">
                    <p className="text-[#e1f1ff] text-sm">
                      📞 +62 858 1129 0377
                    </p>
                    <p className="text-[#e1f1ff] text-sm">
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