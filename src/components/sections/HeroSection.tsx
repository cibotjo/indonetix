'use client'

import { Button } from '@/components/ui/button'
import { Code, Smartphone, Globe, Zap } from 'lucide-react'

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-red-900"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Animated Background */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-red-400 rounded-full opacity-25 animate-pulse"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-1/4 left-1/2 animate-float">
        <Code className="w-8 h-8 text-blue-400 opacity-50" />
      </div>
      <div className="absolute top-1/2 right-1/3 animate-float-delayed">
        <Smartphone className="w-6 h-6 text-red-400 opacity-50" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-float-slow">
        <Globe className="w-7 h-7 text-blue-400 opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Solusi Digital Terdepan</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transformasi Digital untuk
          <span className="block bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
            Bisnis Modern
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Kami menciptakan solusi website dan IT yang inovatif untuk membantu bisnis Anda 
          berkembang pesat di era digital. Dari pembuatan website hingga optimasi SEO, 
          kami hadir sebagai partner terpercaya Anda.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg" 
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg px-8 py-4 shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
          >
            Mulai Proyek Anda
          </Button>
          <Button 
            onClick={() => scrollToSection('services')}
            size="lg" 
            variant="outline" 
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black text-lg px-8 py-4 transition-all duration-300 hover:scale-105"
          >
            Lihat Layanan Kami
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  )
}