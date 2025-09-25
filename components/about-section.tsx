"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const marlonSkills = ["React", "Next.js", "TypeScript", "Node.js", "Python", "UI/UX Design"]

  const malcaSkills = ["Graphic Design", "Branding", "Illustration", "Adobe Creative Suite", "Figma", "Photography"]

  return (
    <section
      id="sobre-nosotros"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-muted/20 via-secondary/10 to-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary opacity-30"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sobre Nosotros</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Somos un equipo creativo de Costa Rica dedicado a transformar ideas en experiencias digitales excepcionales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Marlon Castro */}
          <Card
            className={`transition-all duration-1000 delay-200 border-0 shadow-xl bg-gradient-to-br from-card to-primary/5 hover:shadow-2xl hover:scale-105 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
          >
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">MC</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Marlon Castro</h3>
                <p className="text-primary font-medium">Desarrollador Full Stack</p>
              </div>

              <p className="text-muted-foreground mb-6 text-pretty">
                Especializado en crear aplicaciones web modernas y escalables. Con experiencia en tecnologías frontend y
                backend, me enfoco en desarrollar soluciones que combinan funcionalidad robusta con interfaces
                intuitivas.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Habilidades:</h4>
                <div className="flex flex-wrap gap-2">
                  {marlonSkills.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`transition-all duration-300 delay-${index * 100}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Malca Sofía Achán */}
          <Card
            className={`transition-all duration-1000 delay-400 border-0 shadow-xl bg-gradient-to-br from-card to-secondary/5 hover:shadow-2xl hover:scale-105 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
          >
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-4xl font-bold text-secondary">MSA</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Malca Sofía Achán</h3>
                <p className="text-secondary font-medium">Diseñadora Creativa</p>
              </div>

              <p className="text-muted-foreground mb-6 text-pretty">
                Apasionada por el diseño visual y la comunicación efectiva. Me especializo en crear identidades de marca
                memorables y experiencias visuales que conectan con las audiencias de manera auténtica y emocional.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Habilidades:</h4>
                <div className="flex flex-wrap gap-2">
                  {malcaSkills.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={`border-secondary text-secondary transition-all duration-300 delay-${index * 100}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
