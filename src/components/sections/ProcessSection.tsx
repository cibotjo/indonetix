"use client"

import React, { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Users,
  Code,
  Clock,
  Rocket,
  Award,
  CheckCircle,
  Circle,
  ArrowRight,
  MapPin
} from "lucide-react"

type Step = {
  icon: React.ComponentType<any>
  title: string
  description: string
  color: string
}

export default function ProcessSection() {
  const processSteps: Step[] = [
    { icon: FileText, title: "Konsultasi", description: "Diskusi kebutuhan bisnis Anda", color: "from-[#001f3f] to-[#41729f]" },
    { icon: Users, title: "Desain", description: "Pembuatan desain UI/UX", color: "from-[#41729f] to-[#28a745]" },
    { icon: Code, title: "Development", description: "Pengembangan website", color: "from-[#28a745] to-[#ffc107]" },
    { icon: Clock, title: "Testing", description: "Quality assurance testing", color: "from-[#ffc107] to-[#fd7e14]" },
    { icon: Rocket, title: "Launch", description: "Peluncuran website", color: "from-[#fd7e14] to-[#dc3545]" },
    { icon: Award, title: "Support", description: "Dukungan teknis", color: "from-[#dc3545] to-[#6f42c1]" }
  ]

  const [activeStep, setActiveStep] = useState(0)
  const [visible, setVisible] = useState<boolean[]>(Array(processSteps.length).fill(false))

  useEffect(() => {
    const timers = processSteps.map((_, i) =>
      setTimeout(() => {
        setVisible(prev => {
          const next = [...prev]
          next[i] = true
          return next
        })
      }, 150 * i)
    )

    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % processSteps.length)
    }, 3000)

    return () => {
      timers.forEach(t => clearTimeout(t))
      clearInterval(interval)
    }
  }, [])

  const positions = processSteps.map((_, i) => {
    if (processSteps.length === 1) return 50
    const left = 5 + (i * 90) / (processSteps.length - 1)
    return left
  })

  return (
    <section id="process" className="py-20 px-4 bg-gradient-to-br from-[#e1f1ff] to-[#41729f]/8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-5 py-2 bg-white/40 backdrop-blur-sm border border-[#41729f]/30 rounded-full mb-4 shadow-sm">
            <Clock className="w-4 h-4 text-[#001f3f] mr-2" />
            <span className="text-[#001f3f] text-sm font-semibold">PROSES KERJA</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-2">Bagaimana Kami Bekerja</h2>
          <p className="text-[#001f3f]/80 max-w-3xl mx-auto font-light">Proses kerja kami dirancang secara sistematis agar proyek Anda selesai tepat waktu dan berkualitas.</p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20 md:mt-24 h-[38rem] md:h-[34rem] lg:h-[25rem]">
          {/* Main line */}
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-r from-[#001f3f] to-[#6f42c1] rounded-full opacity-70"></div>

          {/* Moving indicator */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-[#41729f] shadow-lg transition-all duration-700 ease-in-out z-30"
            style={{ left: `${positions[activeStep]}%`, transform: "translate(-50%, -50%)" }}
          >
            <div className="absolute inset-0 rounded-full bg-[#41729f] animate-ping opacity-70"></div>
          </div>

          {/* Start & End markers */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-12 h-12 bg-[#001f3f] rounded-xl flex items-center justify-center shadow-md">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-bold text-[#001f3f] mt-1">MULAI</span>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex flex-col items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#dc3545] to-[#6f42c1] rounded-xl flex items-center justify-center shadow-md">
              <Award className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-bold text-[#001f3f] mt-1">SELESAI</span>
          </div>

          {/* Steps */}
          <div className="hidden md:block">
            {processSteps.map((s, idx) => {
              const Icon = s.icon
              const left = positions[idx]
              const isAbove = idx % 2 === 0
              const isVisible = visible[idx]
              const isActive = activeStep === idx
              const isCompleted = activeStep > idx

              return (
                <div key={idx} style={{ left: `${left}%` }} className="absolute transform -translate-x-1/2 z-20">
                  {/* Dot */}
                  {/* <div className="flex items-center justify-center">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 border-white transition-all duration-300 ${isActive ? "bg-[#41729f] scale-125 shadow-lg" : isCompleted ? "bg-green-500" : "bg-gray-300"}`}
                    />
                  </div> */}

                  {/* Connector */}
                  <div
                    style={{
                      height: 80,
                      marginTop: isAbove ? -12 - 20 : 30,
                      transform: isAbove ? "translateY(400%)" : undefined
                    }}
                    className={`w-[2px] transition-all duration-300 ${isActive ? "bg-[#41729f]" : isCompleted ? "bg-green-500" : "bg-[#cbd5e1]"} mx-auto`}
                  />

                  {/* Card */}
                  <div
                    className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ marginTop: isAbove ? -110 : 150 }}
                    onMouseEnter={() => setActiveStep(idx)}
                  >
                    <Card
                      className={`w-60 transition-all duration-300 ${isActive ? "scale-105 shadow-xl ring-2 ring-[#41729f]/30" : "shadow-md hover:shadow-lg"} rounded-xl cursor-pointer bg-white/95 border border-[#e2e8f0]`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className={`w-10 h-10 bg-gradient-to-br ${s.color} rounded-lg flex items-center justify-center shadow-sm transition-transform duration-300 ${isActive ? "scale-110" : "hover:scale-105"}`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-gradient-to-br ${s.color} shadow-sm`}>
                            <span className="text-xs font-bold text-white">{idx + 1}</span>
                          </div>
                        </div>

                        <h3 className={`text-base font-bold mb-1 ${isActive ? 'text-[#41729f]' : 'text-[#001f3f]'}`}>{s.title}</h3>
                        <p className="text-xs text-[#001f3f]/80 mb-2 leading-snug">{s.description}</p>

                        <div className="flex items-center text-xs">
                          {isCompleted ? (
                            <><CheckCircle className="w-3.5 h-3.5 text-green-500 mr-1" /><span className="text-green-500 font-semibold">Selesai</span></>
                          ) : isActive ? (
                            <><Circle className="w-3.5 h-3.5 text-[#41729f] mr-1 animate-pulse" /><span className="text-[#41729f] font-semibold">Berlangsung</span></>
                          ) : (
                            <><Clock className="w-3.5 h-3.5 text-[#001f3f]/70 mr-1" /><span className="text-[#001f3f]/70">Menunggu</span></>
                          )}
                          <span className="ml-auto text-[#001f3f]/70">{idx + 1}/{processSteps.length}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile view */}
          <div className="md:hidden space-y-4 mt-6">
            {processSteps.map((s, idx) => {
              const Icon = s.icon
              const isActive = activeStep === idx
              const isCompleted = activeStep > idx
              const isVisible = visible[idx]

              return (
                <article key={idx} className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} onMouseEnter={() => setActiveStep(idx)}>
                  <Card className={`bg-white/95 rounded-xl ${isActive ? 'scale-[1.02] shadow-xl ring-2 ring-[#41729f]/30' : 'shadow-md'} transition-all duration-300`}>
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${s.color} rounded-lg flex items-center justify-center flex-shrink-0`}> 
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className={`text-sm font-semibold ${isActive ? 'text-[#41729f]' : ''}`}>{s.title}</h3>
                          <span className="text-xs text-[#001f3f]/70 flex-shrink-0">{idx + 1}/{processSteps.length}</span>
                        </div>
                        <p className="text-xs text-[#001f3f]/80 mt-1">{s.description}</p>
                        <div className="mt-2 text-xs flex items-center gap-2">
                          {isCompleted ? (
                            <><CheckCircle className="w-3.5 h-3.5 text-green-500" /><span className="text-green-500 font-semibold">Selesai</span></>
                          ) : isActive ? (
                            <><Circle className="w-3.5 h-3.5 text-[#41729f] animate-pulse" /><span className="text-[#41729f] font-semibold">Berlangsung</span></>
                          ) : (
                            <><Clock className="w-3.5 h-3.5 text-[#001f3f]/70" /><span className="text-[#001f3f]/70">Menunggu</span></>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-30">
          <div className="bg-gradient-to-r from-white/50 to-[#e1f1ff]/50 rounded-2xl p-8 border border-[#41729f]/20 backdrop-blur-md shadow-lg inline-block max-w-md">
            <h3 className="text-xl font-bold text-[#001f3f] mb-2">Siap Memulai Proyek Anda?</h3>
            <p className="text-[#001f3f]/80 mb-4 text-sm">Hubungi kami untuk konsultasi gratis dan penawaran terbaik</p>
            <Button className="font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-md bg-[#001f3f] text-white" onClick={() => window.open("https://wa.me/6285811290377", "_blank")}>
              Konsultasi Gratis
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}