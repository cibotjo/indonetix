'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Quote, Star, User } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "CEO, TechInovasi",
      company: "TechInovasi",
      content: "Indonetix benar-benar mengubah cara bisnis kami beroperasi secara digital. Website yang mereka buat meningkatkan konversi penjualan kami hingga 150% dalam 6 bulan pertama.",
      rating: 5,
      avatar: "/assets/testimonials/budi.jpg"
    },
    {
      id: 2,
      name: "Siti Rahmawati",
      role: "Marketing Director, FashionStyle",
      company: "FashionStyle",
      content: "Proses kerja yang transparan dan komunikasi yang baik membuat kami merasa tenang selama pengembangan aplikasi e-commerce kami. Hasilnya melampaui ekspektasi kami.",
      rating: 5,
      avatar: "/assets/testimonials/siti.jpg"
    },
    {
      id: 3,
      name: "Ahmad Prasetyo",
      role: "Founder, StartupNusantara",
      company: "StartupNusantara",
      content: "Sebagai startup, kami membutuhkan solusi yang scalable dan cost-effective. Indonetix memberikan solusi yang tepat dengan kualitas tinggi dan harga yang terjangkau.",
      rating: 5,
      avatar: "/assets/testimonials/ahmad.jpg"
    }
  ]

  return (
    <section id="testimonials" className="py-20 px-4 gradient-bg-alt relative overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-r from-transparent to-[#001f3f]/10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-transparent to-[#41729f]/10"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/30 backdrop-blur-sm border border-[#41729f]/40 rounded-full mb-4 shadow-sm">
            <Quote className="w-4 h-4 text-[#001f3f] mr-2" aria-hidden="true" />
            <span className="text-[#001f3f] text-sm font-semibold">TESTIMONIAL</span>
          </div>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-4">
            Apa Kata Klien Kami
          </h2>
          <p className="text-lg text-[#001f3f]/80 max-w-2xl mx-auto font-light">
            Dengarkan langsung dari klien yang telah bekerja sama dengan kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/80 backdrop-blur-sm border border-[#41729f]/30 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden testimonial-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-[#001f3f]/80 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center pt-4 border-t border-[#41729f]/10">
                  {testimonial.avatar ? (
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-[#41729f]/30"
                    />
                  ) : (
                    <div className="w-14 h-14 bg-gradient-to-br from-[#001f3f] to-[#41729f] rounded-full flex items-center justify-center mr-4 shadow-md">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-[#001f3f]">{testimonial.name}</div>
                    <div className="text-sm text-[#001f3f]/70">{testimonial.role}</div>
                    <div className="text-xs text-[#001f3f]/60">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}