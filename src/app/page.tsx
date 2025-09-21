'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Code, Database, Globe, Laptop, Smartphone, Server, Star, Users, ShoppingCart, Building, Search, Wrench, Monitor } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProcessSection from '@/components/sections/ProcessSection'
import PortfolioSection from '@/components/sections/PortfolioSection'

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e1f1ff] to-[#41729f]/10">
      {/* Breadcrumbs Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Beranda",
                "item": "https://indonetix.com/"
              }
            ]
          })
        }}
      />
      
      {/* Local Business Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Indonetix",
            "image": "https://indonetix.com/logo.png",
            "telephone": "+62-21-1234-5678",
            "email": "hello@indonetix.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Pasar Minggu Jakarta",
              "addressLocality": "Jakarta Selatan",
              "postalCode": "12940",
              "addressCountry": "ID"
            },
            "url": "https://indonetix.com",
            "priceRange": "$$$",
            "openingHours": "Mo-Fr 09:00-18:00"
          })
        }}
      />
      
      <Header scrollToSection={scrollToSection} />
      
      <HeroSection scrollToSection={scrollToSection} />

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-[#e1f1ff] to-[#41729f]/10 relative overflow-hidden" aria-labelledby="services-heading">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-r from-transparent to-[#001f3f]/5"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-transparent to-[#41729f]/5"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/30 backdrop-blur-sm border border-[#41729f]/40 rounded-full mb-4 shadow-sm">
              <span className="text-[#001f3f] text-sm font-semibold">LAYANAN KAMI</span>
            </div>
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-[#001f3f]/80 max-w-2xl mx-auto font-light">
              Kami menawarkan berbagai layanan digital untuk memenuhi kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custom Web Development */}
            <article>
              <Card className="bg-gradient-card border border-[#41729f]/30 hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden service-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#001f3f] to-[#41729f] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#001f3f] group-hover:text-[#41729f] transition-colors">
                    Custom Web Development
                  </CardTitle>
                  <CardDescription className="text-[#001f3f]/80 font-light">
                    Pengembangan website tailored sesuai kebutuhan bisnis Anda
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Design custom dan unik</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Backend development scalable</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Integrasi API pihak ketiga</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Security & performance optimized</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </article>

            {/* E-Commerce Solutions */}
            <article>
              <Card className="bg-gradient-card border border-[#41729f]/30 hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden service-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#001f3f] to-[#41729f] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#001f3f] group-hover:text-[#41729f] transition-colors">
                    E-Commerce Solutions
                  </CardTitle>
                  <CardDescription className="text-[#001f3f]/80 font-light">
                    Toko online profesional dengan fitur lengkap
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Payment gateway integration</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Inventory management system</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Customer dashboard</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Analytics & reporting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </article>

            {/* Company Profile Website */}
            <article>
              <Card className="bg-gradient-card border border-[#41729f]/30 hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden service-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#001f3f] to-[#41729f] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#001f3f] group-hover:text-[#41729f] transition-colors">
                    Company Profile
                  </CardTitle>
                  <CardDescription className="text-[#001f3f]/80 font-light">
                    Website perusahaan yang profesional dan kredibel
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Corporate identity design</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Team & portfolio showcase</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Contact & inquiry forms</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Blog & news integration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </article>

            {/* Web Application */}
            <article>
              <Card className="bg-gradient-card border border-[#41729f]/30 hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden service-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#001f3f] to-[#41729f] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#001f3f] group-hover:text-[#41729f] transition-colors">
                    Web Application
                  </CardTitle>
                  <CardDescription className="text-[#001f3f]/80 font-light">
                    Aplikasi web berbasis cloud yang powerful
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Real-time data processing</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">User management system</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Dashboard & reporting</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Multi-platform access</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </article>

            {/* SEO Setup & Optimization */}
            <article>
              <Card className="bg-gradient-card border border-[#41729f]/30 hover:shadow-xl transition-all duration-300 group service-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#001f3f] to-[#41729f] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#001f3f] group-hover:text-[#41729f] transition-colors">
                    SEO Setup & Optimization
                  </CardTitle>
                  <CardDescription className="text-[#001f3f]/80">
                    Optimasi website untuk ranking mesin pencari terbaik
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Keyword research & analysis</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">On-page optimization</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Technical SEO audit</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Performance monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </article>

            {/* Maintenance & Support */}
            <article>
              <Card className="bg-gradient-card border border-[#41729f]/30 hover:shadow-xl transition-all duration-300 group service-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#001f3f] to-[#41729f] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#001f3f] group-hover:text-[#41729f] transition-colors">
                    Maintenance & Support
                  </CardTitle>
                  <CardDescription className="text-[#001f3f]/80">
                    Perawatan dan dukungan teknis berkelanjutan
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Regular updates & backup</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Security monitoring</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">24/7 technical support</span>
                    </li>
                    <li className="flex items-center text-[#001f3f]/80">
                      <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                      <span className="text-sm">Performance optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </article>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-br from-[#e1f1ff] to-[#41729f]/10" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#001f3f]/10 border border-[#41729f]/30 rounded-full mb-4">
              <span className="text-[#001f3f] text-sm font-medium">KEUNGGULAN KAMI</span>
            </div>
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-lg text-[#001f3f]/80 max-w-2xl mx-auto">
              Kami memberikan nilai tambah yang maksimal untuk setiap proyek
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-card p-8 rounded-xl border border-[#41729f]/30 hover:shadow-lg transition-shadow feature-box">
              <div className="w-20 h-20 bg-gradient-to-br from-[#001f3f] to-[#41729f] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#001f3f] mb-2">Tim Profesional</h3>
              <p className="text-[#001f3f]/80">
                Developer berpengalaman dengan track record terbukti
              </p>
            </div>

            <div className="text-center bg-gradient-card p-8 rounded-xl border border-[#41729f]/30 hover:shadow-lg transition-shadow feature-box">
              <div className="w-20 h-20 bg-gradient-to-br from-[#001f3f] to-[#41729f] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#001f3f] mb-2">Global Standard</h3>
              <p className="text-[#001f3f]/80">
                Mengikuti standar internasional dalam pengembangan
              </p>
            </div>

            <div className="text-center bg-gradient-card p-8 rounded-xl border border-[#41729f]/30 hover:shadow-lg transition-shadow feature-box">
              <div className="w-20 h-20 bg-gradient-to-br from-[#001f3f] to-[#41729f] rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#001f3f] mb-2">Scalable Solution</h3>
              <p className="text-[#001f3f]/80">
                Solusi yang dapat berkembang seiring dengan bisnis Anda
              </p>
            </div>

            <div className="text-center bg-gradient-card p-8 rounded-xl border border-[#41729f]/30 hover:shadow-lg transition-shadow feature-box">
              <div className="w-20 h-20 bg-gradient-to-br from-[#001f3f] to-[#41729f] rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#001f3f] mb-2">24/7 Support</h3>
              <p className="text-[#001f3f]/80">
                Dukungan teknis yang siap membantu kapan saja
              </p>
            </div>
          </div>
        </div>
      </section>

      <PortfolioSection />
      {/* TestimonialsSection removed as per user request */}
      <ProcessSection />
      {/* PricingSection removed as per user request */}

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 gradient-bg cta-section" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-[#e1f1ff]/30 border border-[#41729f]/30 rounded-full mb-4">
            <span className="text-[#001f3f] text-sm font-medium">KONTAK KAMI</span>
          </div>
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-6">
            Siap Untuk Memulai Proyek Anda?
          </h2>
          <p className="text-xl text-[#001f3f]/80 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan solusi digital 
            terbaik untuk kebutuhan bisnis Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-gradient text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=hello@indonetix.com&su=Butuh%20Solusi%20Aplikasi&body=Halo%20tim%20Indonetix%2C%0A%0ASaya%20tertarik%20untuk%20mendapatkan%20solusi%20aplikasi%20untuk%20bisnis%20saya.%20Berikut%20detail%20informasi%20yang%20saya%20butuhkan%3A%0A%0A1.%20Nama%20Perusahaan%3A%0A2.%20Jenis%20Bisnis%3A%0A3.%20Deskripsi%20Kebutuhan%3A%0A4.%20Target%20Pengguna%3A%0A5.%20Fitur%20Utama%20yang%20Dibutuhkan%3A%0A6.%20Target%20Deadline%3A%0A7.%20Budget%20Perkiraan%3A%0A%0AMohon%20informasi%20lebih%20lanjut%20mengenai%20layanan%20dan%20penawaran%20dari%20Indonetix.%0A%0ATerima%20kasih.", "_blank")}
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}