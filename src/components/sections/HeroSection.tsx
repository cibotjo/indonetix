'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Users, Award, Zap, Code, Globe, Smartphone } from 'lucide-react'

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 gradient-bg" aria-labelledby="hero-heading">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-r from-transparent to-[#e1f1ff]/30"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-transparent to-[#001f3f]/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#41729f] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#001f3f] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-60 h-60 bg-[#e1f1ff] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-[#41729f]/40 rounded-full mb-6 shadow-sm">
              <Zap className="w-4 h-4 text-[#001f3f] mr-2" aria-hidden="true" />
              <span className="text-[#001f3f] text-sm font-semibold">Solusi Digital Terdepan Indonesia</span>
            </div>
            
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#001f3f] mb-6 leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-[#e1f1ff] via-[#a3cfff] to-[#41729f] bg-clip-text text-transparent">
                Transformasi Digital 
              </span>
              <span className="block bg-gradient-to-r from-[#e1f1ff] via-[#a3cfff] to-[#41729f] bg-clip-text text-transparent">
                Untuk Bisnis Anda
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#e1f1ff] mb-10 max-w-2xl lg:max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Kami bantu bisnis Anda berkembang pesat di era digital dengan solusi website dan aplikasi yang inovatif, scalable, dan menghasilkan ROI nyata.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg" 
                className="btn-gradient text-white text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 group font-semibold rounded-xl"
              >
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                size="lg" 
                variant="outline" 
                className="border-2 border-[#001f3f] text-[#001f3f] hover:bg-[#001f3f] hover:text-white text-lg px-8 py-4 transition-all duration-300 bg-white/30 backdrop-blur-sm font-semibold rounded-xl shadow-lg"
              >
                Lihat Portofolio
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-[#001f3f]/80 pt-6 border-t border-[#41729f]/20">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#001f3f] mr-3">
                  <CheckCircle className="h-5 w-5 text-[#e1f1ff]" />
                </div>
                <div>
                  <div className="font-bold text-[#001f3f]">100+</div>
                  <div className="text-xs">Proyek Berhasil</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#001f3f] mr-3">
                  <Users className="h-5 w-5 text-[#e1f1ff]" />
                </div>
                <div>
                  <div className="font-bold text-[#001f3f]">50+</div>
                  <div className="text-xs">Klien Puas</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#001f3f] mr-3">
                  <Award className="h-5 w-5 text-[#e1f1ff]" />
                </div>
                <div>
                  <div className="font-bold text-[#001f3f]">3 Tahun</div>
                  <div className="text-xs">Pengalaman</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element - Professional Dashboard Preview */}
          <div className="relative">
            <div className="relative rounded-3xl gradient-card p-1 shadow-2xl overflow-hidden border border-[#41729f]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#001f3f]/5 to-[#41729f]/5 rounded-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden">
                {/* Browser mockup */}
                <div className="bg-gradient-to-r from-[#001f3f] to-[#41729f] p-4 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 ml-4 bg-white/20 rounded-md py-2 px-4 text-xs text-white font-medium">
                    https://www.indonetix.com
                  </div>
                </div>
                
                {/* Dashboard content */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-[#001f3f]">Performance Dashboard</h3>
                    <div className="text-xs bg-[#41729f]/10 text-[#001f3f] px-3 py-1 rounded-full font-medium">
                      Live Data
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-white to-[#e1f1ff]/30 p-4 rounded-xl shadow-sm border border-[#41729f]/10">
                      <div className="text-2xl font-bold text-[#001f3f]">24%</div>
                      <div className="text-xs text-[#001f3f]/70 mt-1">Conversion Rate</div>
                    </div>
                    <div className="bg-gradient-to-br from-white to-[#e1f1ff]/30 p-4 rounded-xl shadow-sm border border-[#41729f]/10">
                      <div className="text-2xl font-bold text-[#001f3f]">+12%</div>
                      <div className="text-xs text-[#001f3f]/70 mt-1">Growth</div>
                    </div>
                    <div className="bg-gradient-to-br from-white to-[#e1f1ff]/30 p-4 rounded-xl shadow-sm border border-[#41729f]/10">
                      <div className="text-2xl font-bold text-[#001f3f]">98%</div>
                      <div className="text-xs text-[#001f3f]/70 mt-1">Uptime</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-[#e1f1ff]/30 rounded-xl shadow-sm border border-[#41729f]/10 p-4 mb-4">
                    <div className="flex justify-between mb-3">
                      <span className="text-sm font-semibold text-[#001f3f]">Traffic Sources</span>
                      <span className="text-sm text-[#001f3f]/70">Last 30 days</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-24 text-xs text-[#001f3f]/80">Organic Search</div>
                        <div className="flex-1 ml-2">
                          <div className="h-2 bg-[#e1f1ff] rounded-full overflow-hidden">
                            <div className="h-2 bg-gradient-to-r from-[#001f3f] to-[#41729f] rounded-full" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                        <div className="w-10 text-right text-xs text-[#001f3f]/80 font-medium">75%</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24 text-xs text-[#001f3f]/80">Direct</div>
                        <div className="flex-1 ml-2">
                          <div className="h-2 bg-[#e1f1ff] rounded-full overflow-hidden">
                            <div className="h-2 bg-gradient-to-r from-[#41729f] to-[#001f3f] rounded-full" style={{ width: '45%' }}></div>
                          </div>
                        </div>
                        <div className="w-10 text-right text-xs text-[#001f3f]/80 font-medium">45%</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24 text-xs text-[#001f3f]/80">Social Media</div>
                        <div className="flex-1 ml-2">
                          <div className="h-2 bg-[#e1f1ff] rounded-full overflow-hidden">
                            <div className="h-2 bg-gradient-to-r from-[#e1f1ff] to-[#41729f] rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                        <div className="w-10 text-right text-xs text-[#001f3f]/80 font-medium">30%</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button className="text-xs bg-gradient-to-r from-[#001f3f] to-[#41729f] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                      View Full Report
                    </button>
                    <button className="text-xs bg-white text-[#001f3f] border border-[#41729f]/30 px-4 py-2 rounded-lg font-medium hover:bg-[#e1f1ff]/30 transition-colors">
                      Export Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements for decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#41729f] to-[#001f3f] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#001f3f] to-[#41729f] rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-[#001f3f] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#001f3f] rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  )
}