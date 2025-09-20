'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, Code, Database, Globe, Laptop, Smartphone, Server, Star, Users, ShoppingCart, Building, Search, Wrench, Monitor } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProcessSection from '@/components/sections/ProcessSection'

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-red-900">
      <Header scrollToSection={scrollToSection} />
      
      <HeroSection scrollToSection={scrollToSection} />

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Kami menawarkan berbagai layanan digital untuk memenuhi kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custom Web Development */}
            <Card className="bg-gray-900 border-blue-500 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">
                  Custom Web Development
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Pengembangan website tailored sesuai kebutuhan bisnis Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Design custom dan unik</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Backend development scalable</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Integrasi API pihak ketiga</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Security & performance optimized</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* E-Commerce Solutions */}
            <Card className="bg-gray-900 border-red-500 hover:border-red-400 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-red-400 transition-colors">
                  E-Commerce Solutions
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Toko online profesional dengan fitur lengkap
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Payment gateway integration</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Inventory management system</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Customer dashboard</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Analytics & reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Company Profile Website */}
            <Card className="bg-gray-900 border-blue-500 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">
                  Company Profile
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Website perusahaan yang profesional dan kredibel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Corporate identity design</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Team & portfolio showcase</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Contact & inquiry forms</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Blog & news integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Web Application */}
            <Card className="bg-gray-900 border-red-500 hover:border-red-400 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-red-400 transition-colors">
                  Web Application
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Aplikasi web berbasis cloud yang powerful
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Real-time data processing</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">User management system</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Dashboard & reporting</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Multi-platform access</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* SEO Setup & Optimization */}
            <Card className="bg-gray-900 border-blue-500 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">
                  SEO Setup & Optimization
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Optimasi website untuk ranking mesin pencari terbaik
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Keyword research & analysis</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">On-page optimization</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Technical SEO audit</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Performance monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Maintenance & Support */}
            <Card className="bg-gray-900 border-red-500 hover:border-red-400 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-red-400 transition-colors">
                  Maintenance & Support
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Perawatan dan dukungan teknis berkelanjutan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Regular updates & backup</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Security monitoring</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">24/7 technical support</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">Performance optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-red-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Kami memberikan nilai tambah yang maksimal untuk setiap proyek
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tim Profesional</h3>
              <p className="text-gray-300">
                Developer berpengalaman dengan track record terbukti
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Standard</h3>
              <p className="text-gray-300">
                Mengikuti standar internasional dalam pengembangan
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Scalable Solution</h3>
              <p className="text-gray-300">
                Solusi yang dapat berkembang seiring dengan bisnis Anda
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">
                Dukungan teknis yang siap membantu kapan saja
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-900 to-red-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Siap Untuk Memulai Proyek Anda?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan solusi digital 
            terbaik untuk kebutuhan bisnis Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4"
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