"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/5 to-accent/5"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23A0B693' fillOpacity='0.6'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1000 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Kodor
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty transition-all duration-1000 delay-200 ${
              mounted ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Desarrolladores costarricenses apasionados por el diseño, la innovación y la excelencia técnica
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-400 ${
              mounted ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ver Nuestro Trabajo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent shadow-md hover:shadow-lg transition-all duration-300"
            >
              Conocer Más
            </Button>
          </div>

          <div
            className={`flex justify-center space-x-6 transition-all duration-1000 delay-600 ${
              mounted ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-800 ${
            mounted ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <a href="#sobre-nosotros" className="text-muted-foreground hover:text-accent transition-colors duration-200">
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
