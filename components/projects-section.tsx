"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Plataforma de comercio electrónico completa con panel de administración, gestión de inventario y pasarela de pagos integrada.",
      image: "/modern-ecommerce-interface.png",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      author: "Marlon Castro",
      type: "development",
    },
    {
      title: "Brand Identity - TechStart",
      description:
        "Identidad visual completa para startup tecnológica, incluyendo logo, paleta de colores, tipografía y aplicaciones.",
      image: "/modern-tech-startup-branding-design.jpg",
      tags: ["Branding", "Logo Design", "Visual Identity"],
      author: "Malca Sofía Achán",
      type: "design",
    },
    {
      title: "Task Management App",
      description:
        "Aplicación web para gestión de tareas y proyectos con colaboración en tiempo real y notificaciones push.",
      image: "/task-management-dashboard.png",
      tags: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL"],
      author: "Marlon Castro",
      type: "development",
    },
    {
      title: "Restaurant Brand Package",
      description:
        "Paquete completo de branding para restaurante gourmet, incluyendo menús, señalética y material promocional.",
      image: "/elegant-restaurant-branding-design.jpg",
      tags: ["Print Design", "Menu Design", "Photography"],
      author: "Malca Sofía Achán",
      type: "design",
    },
    {
      title: "Portfolio Website",
      description: "Sitio web portafolio responsive con animaciones fluidas y optimización SEO para artista digital.",
      image: "/creative-portfolio-website.png",
      tags: ["React", "Framer Motion", "SEO", "Performance"],
      author: "Colaboración",
      type: "collaboration",
    },
    {
      title: "Mobile App UI/UX",
      description:
        "Diseño de interfaz y experiencia de usuario para aplicación móvil de fitness con seguimiento personalizado.",
      image: "/fitness-mobile-app-ui-design.jpg",
      tags: ["UI/UX", "Mobile Design", "Prototyping"],
      author: "Malca Sofía Achán",
      type: "design",
    },
  ]

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background via-primary/5 to-secondary/10 relative overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-secondary/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Proyectos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Una selección de nuestros trabajos más destacados, desde desarrollo web hasta diseño creativo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-background hover:scale-105 hover:rotate-1 ${
                isVisible ? `animate-fade-in-up animate-delay-${index * 100}` : "opacity-0"
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={
                      project.type === "development" ? "default" : project.type === "design" ? "secondary" : "outline"
                    }
                    className="bg-background/90 backdrop-blur-sm"
                  >
                    {project.author}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Proyecto
                  </Button>
                  {project.type === "development" && (
                    <Button size="sm" variant="ghost">
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
