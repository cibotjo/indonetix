'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Users, Award, Zap, ChevronRight } from 'lucide-react'

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "E-Commerce Solutions",
      image: "/assets/images/ecommerce-showcase.jpg"
    },
    {
      title: "Corporate Website",
      image: "/assets/images/corporate-showcase.jpg"
    },
    {
      title: "Mobile Applications",
      image: "/assets/images/mobile-showcase.jpg"
    }
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-[#f0f9ff] to-[#e1f1ff]" aria-labelledby="hero-heading">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle wave patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(ellipse at center, #41729f 0%, transparent 70%)`,
            backgroundSize: '800px 800px',
            backgroundPosition: 'center top'
          }}></div>
        </div>
        
        {/* Soft gradient overlays */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-r from-transparent to-white/20"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-transparent to-white/10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm border border-[#41729f]/30 rounded-full mb-6 shadow-sm">
              <Zap className="w-4 h-4 text-[#001f3f] mr-2" aria-hidden="true" />
              <span className="text-[#001f3f] text-sm font-semibold">Solusi Digital Terdepan Indonesia</span>
            </div>
            
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#001f3f] mb-6 leading-tight tracking-tight">
              <span className="block">
                Transformasi Digital 
              </span>
              <span className="block text-[#41729f]">
                Untuk Bisnis Anda
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#001f3f]/80 mb-10 max-w-2xl lg:max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Kami bantu bisnis Anda berkembang pesat di era digital dengan solusi website dan aplikasi yang inovatif, scalable, dan menghasilkan ROI nyata.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg" 
                className="bg-gradient-to-r from-[#001f3f] to-[#41729f] text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 group font-semibold rounded-xl"
              >
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                size="lg" 
                variant="outline" 
                className="border-2 border-[#001f3f] text-[#001f3f] hover:bg-[#001f3f] hover:text-white text-lg px-8 py-4 transition-all duration-300 bg-white/50 font-semibold rounded-xl shadow-md"
              >
                Lihat Portofolio
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-[#001f3f]/80 pt-6 border-t border-[#41729f]/20">
              {[
                { icon: <CheckCircle className="h-5 w-5 text-[#41729f]" />, value: "100+", label: "Proyek Berhasil" },
                { icon: <Users className="h-5 w-5 text-[#41729f]" />, value: "50+", label: "Klien Puas" },
                { icon: <Award className="h-5 w-5 text-[#41729f]" />, value: "3 Tahun", label: "Pengalaman" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#41729f]/30 mr-3 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-[#001f3f]">{item.value}</div>
                    <div className="text-xs">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual Element - Clean Slide Presentation */}
          <div className="relative flex justify-center">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-[#41729f]/20 bg-white/90 backdrop-blur-sm max-w-md w-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-[#001f3f]">
                    Solusi Bisnis Kami
                  </h3>
                  <div className="text-xs bg-[#41729f]/10 text-[#001f3f] px-3 py-1 rounded-full font-medium">
                    Showcase
                  </div>
                </div>
                
                {/* Slide Carousel */}
                <div className="relative h-80 rounded-xl overflow-hidden">
                  {slides.map((slide, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center justify-center p-8 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {/* Placeholder for business image */}
                      <div className="bg-gradient-to-br from-[#001f3f]/10 to-[#41729f]/10 h-full w-full rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl mb-4">💼</div>
                          <div className="text-xl font-bold text-[#001f3f]">{slide.title}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Navigation Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide 
                          ? 'bg-[#001f3f] w-6' 
                          : 'bg-[#41729f]/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block animate-bounce">
        <div className="w-6 h-10 border-2 border-[#001f3f] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#001f3f] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}