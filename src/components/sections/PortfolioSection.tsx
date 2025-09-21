'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Globe } from 'lucide-react'

export default function PortfolioSection() {
  const projects = [
      {
        id: 1,
        title: "Huu Villas Bali",
        category: "Web Application",
        image: "/assets/images/portofolio/huuvillasbali.png",
        icon: Globe,
        results: "40% time saved",
        link: "https://huuvillasbali.com/"
      },
      {
        id: 2,
        title: "Shortcut Beats",
        category: "Web Application",
        image: "/assets/images/portofolio/shortcutbeats.png",
        icon: Globe,
        results: "500k+ downloads",
        link: "https://shortcutbeats.com/"
      },
      {
        id: 3,
        title: "Woods Bali",
        category: "Web Application",
        image: "/assets/images/portofolio/woodsbali.png",
        icon: Globe,
        results: "85% improvement in engagement",
        link: "https://woodsbali.com/"
      },
      {
        id: 4,
        title: "Molten",
        category: "Web Application",
        image: "/assets/images/portofolio/molten.png",
        icon: Globe,
        results: "200% increase in sales",
        link: "https://www.moltengarments.com/"
      }
  ]

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-br from-[#e1f1ff] to-[#41729f]/10 relative overflow-hidden" aria-labelledby="portfolio-heading">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-r from-transparent to-[#001f3f]/5"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-transparent to-[#41729f]/5"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/30 backdrop-blur-sm border border-[#41729f]/40 rounded-full mb-4 shadow-sm">
            <span className="text-[#001f3f] text-sm font-semibold">PORTOFOLIO KAMI</span>
          </div>
          <h2 id="portfolio-heading" className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-4">
            Proyek yang Telah Kami Kerjakan
          </h2>
          <p className="text-lg text-[#001f3f]/80 max-w-2xl mx-auto font-light">
            Lihat bagaimana kami telah membantu berbagai bisnis mencapai tujuan digital mereka
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <Card key={project.id} className="bg-gradient-card hover:shadow-xl transition-all duration-300 group border border-[#41729f]/30 rounded-2xl overflow-hidden service-card">
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/80 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#001f3f]/80 text-white rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#001f3f] to-[#41729f] rounded-xl flex items-center justify-center mr-4 shadow-md">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#001f3f] mt-2 group-hover:text-[#41729f] transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#41729f]/10">
                      <span className="inline-flex items-center px-3 py-1 text-sm font-semibold bg-gradient-to-r from-[#41729f]/10 to-[#001f3f]/10 text-[#001f3f] rounded-full">
                        {project.results}
                      </span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#001f3f] hover:text-[#41729f] group font-medium px-4 py-2 rounded-md transition-colors inline-flex items-center"
                        style={{ border: 'none', background: 'none', cursor: 'pointer', fontWeight: 500, pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
                        onClick={e => {
                          console.log('Klik link:', project.link);
                        }}
                      >
                        Lihat Detail
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* <div className="text-center">
          <Button 
            size="lg" 
            className="btn-gradient px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold rounded-xl"
          >
            Lihat Semua Proyek
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div> */}
      </div>
    </section>
  )
}