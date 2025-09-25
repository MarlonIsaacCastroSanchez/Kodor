"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "CEO, TechStart CR",
    company: "San José, Costa Rica",
    content:
      "Kodor transformó completamente nuestra presencia digital. Su trabajo en nuestra plataforma e-commerce aumentó nuestras ventas en un 300%. Profesionales excepcionales.",
    rating: 5,
    avatar: "/professional-man-costa-rica.jpg",
  },
  {
    name: "María González",
    role: "Directora de Marketing",
    company: "Innovate Solutions",
    content:
      "La aplicación móvil que desarrollaron superó todas nuestras expectativas. La interfaz es intuitiva y el rendimiento es excelente. Altamente recomendados.",
    rating: 5,
    avatar: "/professional-woman-marketing.png",
  },
  {
    name: "Roberto Jiménez",
    role: "Fundador",
    company: "EcoTech CR",
    content:
      "Trabajar con Kodor fue una experiencia increíble. Entendieron perfectamente nuestra visión y la convirtieron en realidad. El sistema que crearon es robusto y escalable.",
    rating: 5,
    avatar: "/entrepreneur-man-eco-tech.jpg",
  },
  {
    name: "Ana Vargas",
    role: "Gerente de Operaciones",
    company: "Digital Pura Vida",
    content:
      "Su expertise técnico y atención al detalle son impresionantes. Nos ayudaron a automatizar procesos que nos ahorraron horas de trabajo manual cada semana.",
    rating: 5,
    avatar: "/professional-woman-operations.png",
  },
  {
    name: "Enrique Herrera",
    role: "CTO",
    company: "StartupCR",
    content:
      "Kodor no solo desarrolla código, crean soluciones. Su capacidad para entender problemas complejos y ofrecer soluciones elegantes es excepcional.",
    rating: 5,
    avatar: "/tech-professional-man-cto.jpg",
  },
  {
    name: "Sofía Ramírez",
    role: "Directora Creativa",
    company: "Design Studio CR",
    content:
      "La colaboración con Kodor fue perfecta. Respetaron nuestros diseños y los implementaron con una precisión pixel-perfect. Definitivamente volveremos a trabajar juntos.",
    rating: 5,
    avatar: "/creative-director-woman-design.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-accent/5 to-primary/5" />

      <div className="absolute top-32 right-20 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-bounce" />
      <div className="absolute bottom-32 left-20 w-36 h-36 bg-primary/15 rounded-full blur-3xl animate-pulse delay-500" />
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-secondary/10 rounded-full blur-xl animate-pulse delay-700" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Lo que dicen nuestros <span className="text-accent">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Testimonios reales de empresas que han confiado en Kodor para sus proyectos tecnológicos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                index % 3 === 1 ? "hover:border-accent/50" : "hover:border-primary/50"
              }`}
            >
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className={`w-8 h-8 ${index % 3 === 1 ? "text-accent" : "text-primary"}`} />
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center">
                <Avatar className="w-12 h-12 mr-4">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback
                    className={`font-semibold ${
                      index % 3 === 1 ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className={`text-xs font-medium ${index % 3 === 1 ? "text-accent" : "text-primary"}`}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Proyectos Completados</div>
          </div>
          <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Satisfacción Cliente</div>
          </div>
          <div className="p-6 rounded-xl bg-secondary/5 border border-secondary/20">
            <div className="text-3xl font-bold text-secondary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Años Experiencia</div>
          </div>
          <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Soporte Técnico</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
