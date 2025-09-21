'use client'

import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Clock, Users, Rocket, FileText, Award, Code } from 'lucide-react'

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
      color: "red"
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
      color: "red"
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
      color: "red"
    }
  ]

  return (
    <section id="process" className="py-20 px-4 bg-gradient-to-br from-blue-900/20 via-black to-red-900/20" aria-labelledby="process-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full mb-4">
            <Clock className="w-4 h-4 text-blue-400 mr-2" aria-hidden="true" />
            <span className="text-blue-400 text-sm font-medium">Proses Kerja</span>
          </div>
          <h2 id="process-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bagaimana Kami Bekerja
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proses kerja yang terstruktur dan transparan untuk memastikan proyek Anda 
            selesai tepat waktu dengan kualitas terbaik
          </p>
        </div>

        <div className="relative">
          {/* Process Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-red-600 to-blue-600 opacity-30 hidden lg:block"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const isLeft = index % 2 === 0
              const colorClass = step.color === 'blue' ? 'border-blue-500' : 'border-red-500'
              const bgClass = step.color === 'blue' ? 'bg-blue-600' : 'bg-red-600'
              const textClass = step.color === 'blue' ? 'text-blue-400' : 'text-red-400'
              
              return (
                <article key={index} className="relative">
                  
                  <Card className={`bg-gray-900 border ${colorClass} hover:shadow-2xl transition-all duration-300 hover:scale-105 group ${isLeft ? 'lg:mr-8' : 'lg:ml-8 lg:mt-16'}`}>
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 ${bgClass} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <CheckCircle className={`w-4 h-4 ${textClass} mr-2`} aria-hidden="true" />
                        <span>Step {index + 1} of {processSteps.length}</span>
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
          <div className="bg-gradient-to-r from-blue-900/50 to-red-900/50 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              Siap Memulai Proyek Anda?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik 
              untuk kebutuhan digital bisnis Anda
            </p>
            <button 
              className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://wa.me/6285811290377", "_blank")}
            >
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}