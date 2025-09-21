'use client'

import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Clock, Users, Rocket, FileText, Award, Code, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProcessSection() {
  const processSteps = [
    {
      icon: FileText,
      title: "Konsultasi & Perencanaan",
      description: "Diskusi mendalam tentang kebutuhan bisnis dan tujuan proyek Anda",
      color: "blue"
    },
    {
      icon: Users,
      title: "Desain & Prototype",
      description: "Pembuatan desain UI/UX dan prototype untuk visualisasi",
      color: "blue"
    },
    {
      icon: Code,
      title: "Development",
      description: "Pengembangan website dengan teknologi terkini dan best practices",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Testing & QA",
      description: "Quality assurance dan testing untuk memastikan kualitas terbaik",
      color: "blue"
    },
    {
      icon: Rocket,
      title: "Launch & Deployment",
      description: "Peluncuran website dan konfigurasi server yang optimal",
      color: "blue"
    },
    {
      icon: Award,
      title: "Support & Maintenance",
      description: "Dukungan teknis dan maintenance berkelanjutan",
      color: "blue"
    }
  ]

  return (
    <section id="process" className="py-20 px-4 bg-gradient-to-br from-[#e1f1ff] to-[#41729f]/10 relative overflow-hidden" aria-labelledby="process-heading">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-r from-transparent to-[#001f3f]/5"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-transparent to-[#41729f]/5"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/30 backdrop-blur-sm border border-[#41729f]/40 rounded-full mb-4 shadow-sm">
            <Clock className="w-4 h-4 text-[#001f3f] mr-2" aria-hidden="true" />
            <span className="text-[#001f3f] text-sm font-semibold">PROSES KERJA</span>
          </div>
          <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-4">
            Bagaimana Kami Bekerja
          </h2>
          <p className="text-lg text-[#001f3f]/80 max-w-3xl mx-auto font-light">
            Proses kerja yang terstruktur dan transparan untuk memastikan proyek Anda 
            selesai tepat waktu dengan kualitas terbaik
          </p>
        </div>

        <div className="relative">
          {/* Process Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#001f3f] via-[#41729f] to-[#e1f1ff] opacity-20 hidden lg:block"></div>
          
          <div className="grid lg:grid-cols-2 gap-8 relative">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const isLeft = index % 2 === 0
              
              return (
                <article key={index} className={`relative ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  {/* Timeline Number */}
                  <div className="absolute top-4 -left-4 lg:-left-5 w-10 h-10 bg-gradient-to-br from-[#001f3f] to-[#41729f] rounded-full items-center justify-center z-10 flex shadow-lg">
                    <span className="text-base font-bold text-white">{index + 1}</span>
                  </div>
                  
                  <Card className="bg-white/80 backdrop-blur-sm border border-[#41729f]/30 hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#001f3f] to-[#41729f] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold text-[#001f3f] mb-3 group-hover:text-[#41729f] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[#001f3f]/80 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="mt-4 flex items-center text-sm text-[#001f3f]/70">
                        <CheckCircle className="w-4 h-4 text-[#41729f] mr-2" aria-hidden="true" />
                        <span>Langkah {index + 1} dari {processSteps.length}</span>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-white/40 to-[#e1f1ff]/40 rounded-3xl p-8 border border-[#41729f]/30 backdrop-blur-sm shadow-xl">
            <h3 className="text-2xl font-bold text-[#001f3f] mb-4">
              Siap Memulai Proyek Anda?
            </h3>
            <p className="text-[#001f3f]/80 mb-6 max-w-2xl mx-auto font-light">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik 
              untuk kebutuhan digital bisnis Anda
            </p>
            <Button 
              className="btn-gradient font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg group text-lg"
              onClick={() => window.open("https://wa.me/6285811290377", "_blank")}
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}