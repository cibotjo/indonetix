'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Users, Award, Zap, ChevronRight, Star, TrendingUp, Shield, Clock } from 'lucide-react'

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [activeFeature, setActiveFeature] = useState(0)
  
  const features = [
   
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [features.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-[#f0f9ff] to-[#e1f1ff]" aria-labelledby="hero-heading">
      {/* Clean Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 15px 15px, #41729f 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Soft gradient overlays */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-r from-transparent to-white/30"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-transparent to-white/20"></div>
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
          
          {/* Visual Element - Clean Dashboard Preview */}
          <div className="relative">
            <div className="relative rounded-2xl shadow-xl overflow-hidden border border-[#41729f]/20 bg-white">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-[#001f3f]">Performance Dashboard</h3>
                  <div className="text-xs bg-[#41729f]/10 text-[#001f3f] px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Live Data
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { value: "24%", label: "Conversion Rate", color: "text-[#001f3f]" },
                    { value: "+12%", label: "Growth", color: "text-green-600" },
                    { value: "98%", label: "Uptime", color: "text-blue-600" }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white border border-[#41729f]/10 p-4 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                      <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
                      <div className="text-xs text-[#001f3f]/70 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white rounded-xl border border-[#41729f]/10 p-4 mb-4">
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-semibold text-[#001f3f]">Traffic Sources</span>
                    <span className="text-sm text-[#001f3f]/70">Last 30 days</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Organic Search", value: 75, color: "bg-[#001f3f]" },
                      { name: "Direct", value: 45, color: "bg-[#41729f]" },
                      { name: "Social Media", value: 30, color: "bg-[#e1f1ff]" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-24 text-xs text-[#001f3f]/80">{item.name}</div>
                        <div className="flex-1 ml-2">
                          <div className="h-2 bg-[#e1f1ff] rounded-full overflow-hidden">
                            <div 
                              className={`h-2 ${item.color} rounded-full`}
                              style={{ width: `${item.value}%` }}
                            />
                          </div>
                        </div>
                        <div className="w-10 text-right text-xs text-[#001f3f]/80 font-medium">{item.value}%</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button className="text-xs bg-gradient-to-r from-[#001f3f] to-[#41729f] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-sm">
                    View Full Report
                  </button>
                  <button className="text-xs bg-white text-[#001f3f] border border-[#41729f]/30 px-4 py-2 rounded-lg font-medium hover:bg-[#e1f1ff]/30 transition-colors">
                    Export Data
                  </button>
                </div>
              </div>
            </div>
            
            {/* Interactive Feature Cards */}
            <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-4 shadow-lg border border-[#41729f]/20 cursor-pointer transition-all duration-300 ${
                    activeFeature === index ? 'scale-105 shadow-xl border-[#41729f]/50' : 'opacity-90'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-[#001f3f] to-[#41729f] flex items-center justify-center text-white ${
                      activeFeature === index ? 'animate-pulse' : ''
                    }`}>
                      {feature.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#001f3f]">{feature.title}</div>
                      <div className="text-xs text-[#001f3f]/70">{feature.description}</div>
                    </div>
                  </div>
                </div>
              ))}
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