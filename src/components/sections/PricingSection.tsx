'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Rocket, Crown, Zap } from 'lucide-react'

export default function PricingSection() {
  const plans = [
    {
      id: 1,
      name: "Starter",
      description: "Solusi ideal untuk bisnis kecil yang baru memulai kehadiran digital",
      price: "2.500.000",
      period: "project",
      icon: Zap,
      features: [
        "Website landing page 5 halaman",
        "Desain responsif mobile",
        "Hosting gratis 1 tahun",
        "Domain gratis 1 tahun",
        "Form kontak dasar",
        "Integrasi media sosial",
        "Optimasi SEO dasar",
        "Support 24/7"
      ],
      cta: "Pilih Paket Starter",
      popular: false
    },
    {
      id: 2,
      name: "Professional",
      description: "Solusi lengkap untuk bisnis menengah yang ingin berkembang",
      price: "5.000.000",
      period: "project",
      icon: Rocket,
      features: [
        "Website custom hingga 10 halaman",
        "Desain responsif mobile",
        "Hosting gratis 1 tahun",
        "Domain gratis 1 tahun",
        "CMS untuk update konten",
        "Form kontak & newsletter",
        "Integrasi media sosial",
        "Optimasi SEO lanjutan",
        "Analytics & reporting",
        "Support 24/7"
      ],
      cta: "Pilih Paket Professional",
      popular: true
    },
    {
      id: 3,
      name: "Enterprise",
      description: "Solusi premium untuk bisnis besar dengan kebutuhan kompleks",
      price: "10.000.000",
      period: "project",
      icon: Crown,
      features: [
        "Website custom unlimited halaman",
        "Desain responsif mobile",
        "Hosting premium 1 tahun",
        "Domain gratis 1 tahun",
        "CMS lengkap dengan user management",
        "E-commerce integration",
        "Form kontak, newsletter & booking",
        "Integrasi API pihak ketiga",
        "Optimasi SEO premium",
        "Analytics & reporting lengkap",
        "Maintenance 1 tahun",
        "Support 24/7 priority"
      ],
      cta: "Pilih Paket Enterprise",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-[#e1f1ff] to-[#41729f]/10 relative overflow-hidden" aria-labelledby="pricing-heading">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-r from-transparent to-[#001f3f]/5"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-transparent to-[#41729f]/5"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/30 backdrop-blur-sm border border-[#41729f]/40 rounded-full mb-4 shadow-sm">
            <span className="text-[#001f3f] text-sm font-semibold">HARGA TRANSPARAN</span>
          </div>
          <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-4">
            Paket Layanan Kami
          </h2>
          <p className="text-lg text-[#001f3f]/80 max-w-2xl mx-auto font-light">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah termasuk support dan maintenance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <Card 
                key={plan.id} 
                className={`bg-gradient-card border border-[#41729f]/30 shadow-xl hover:shadow-2xl transition-all duration-300 relative rounded-2xl overflow-hidden pricing-card ${
                  plan.popular ? 'ring-2 ring-[#001f3f] scale-105 popular' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#001f3f] to-[#41729f] text-white text-xs font-bold px-6 py-2 rounded-full shadow-lg">
                    POPULAR
                  </div>
                )}
                <CardHeader className="text-center pb-4 pt-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#001f3f] to-[#41729f] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#001f3f]">{plan.name}</CardTitle>
                  <CardDescription className="text-[#001f3f]/80 mt-2 font-light">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center px-6">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#001f3f]">Rp {plan.price}</span>
                    <span className="text-[#001f3f]/80">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-left">
                        <CheckCircle className="w-5 h-5 text-[#41729f] mr-3 flex-shrink-0" />
                        <span className="text-[#001f3f]/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full font-semibold rounded-xl py-4 ${
                      plan.popular 
                        ? 'btn-gradient text-white shadow-lg' 
                        : 'border-2 border-[#001f3f] text-[#001f3f] hover:bg-[#001f3f] hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-[#001f3f]/80 font-light">
            Butuh solusi khusus?{" "}
            <a href="#contact" className="text-[#001f3f] hover:underline font-medium">
              Hubungi kami untuk penawaran khusus
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}