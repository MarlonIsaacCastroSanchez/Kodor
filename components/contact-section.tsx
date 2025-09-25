"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
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

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-secondary/15 via-muted/20 to-primary/10 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="absolute -top-20 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trabajemos Juntos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            ¿Tienes un proyecto en mente? Nos encantaría escuchar tus ideas y ayudarte a hacerlas realidad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">contacto@kodor.cr</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-secondary/5 to-transparent hover:from-secondary/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center shadow-lg">
                    <Phone className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Teléfono</p>
                    <p className="text-muted-foreground">+506 8888-8888</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Ubicación</p>
                    <p className="text-muted-foreground">San José, Costa Rica</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-card to-secondary/5 rounded-lg p-6 border-0 shadow-xl">
              <h4 className="font-semibold text-foreground mb-4">¿Por qué elegirnos?</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Experiencia combinada en desarrollo y diseño</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-secondary to-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Enfoque centrado en el usuario y la calidad</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Comunicación clara y entregas puntuales</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card
            className={`transition-all duration-1000 delay-400 border-0 shadow-2xl bg-gradient-to-br from-card to-primary/5 hover:shadow-3xl ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre
                    </label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Asunto
                  </label>
                  <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea id="message" rows={5} placeholder="Cuéntanos sobre tu proyecto..." />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
