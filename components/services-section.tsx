"use client"

import { motion } from "framer-motion"
import { Check, Code, Smartphone, Globe, Database, Zap, Shield } from "lucide-react"

const services = [
  {
    title: "Desarrollo Web",
    description: "Sitios web modernos y responsivos con las últimas tecnologías",
    price: "Desde $800",
    features: ["Diseño responsive", "SEO optimizado", "Velocidad optimizada", "Hosting incluido (1 año)"],
    icon: Globe,
    popular: false,
  },
  {
    title: "Aplicaciones Móviles",
    description: "Apps nativas y multiplataforma para iOS y Android",
    price: "Desde $1,500",
    features: ["Desarrollo nativo", "UI/UX profesional", "Integración con APIs", "Publicación en stores"],
    icon: Smartphone,
    popular: true,
  },
  {
    title: "Sistemas Completos",
    description: "Soluciones empresariales completas con backend robusto",
    price: "Desde $2,500",
    features: ["Backend escalable", "Base de datos optimizada", "Panel de administración", "Soporte técnico"],
    icon: Database,
    popular: false,
  },
]

const additionalServices = [
  { icon: Code, title: "Desarrollo Custom", description: "Soluciones personalizadas" },
  { icon: Zap, title: "Optimización", description: "Mejora de rendimiento" },
  { icon: Shield, title: "Seguridad", description: "Implementación de seguridad" },
]

export function ServicesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10" />

      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-500" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ofrecemos soluciones tecnológicas completas desde Costa Rica para el mundo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                service.popular
                  ? "border-accent bg-gradient-to-br from-accent/5 to-primary/5 shadow-lg"
                  : "border-border bg-card/50 backdrop-blur-sm hover:border-accent/50"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl mr-4 ${service.popular ? "bg-accent/10" : "bg-primary/10"}`}>
                  <service.icon className={`w-8 h-8 ${service.popular ? "text-accent" : "text-primary"}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className={`font-semibold text-lg ${service.popular ? "text-accent" : "text-primary"}`}>
                    {service.price}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check
                      className={`w-5 h-5 mr-3 flex-shrink-0 ${service.popular ? "text-accent" : "text-primary"}`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                  service.popular
                    ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Solicitar Cotización
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {additionalServices.map((service, index) => (
            <div
              key={service.title}
              className={`flex items-center p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 ${
                index === 1 ? "hover:border-accent/50" : "hover:border-primary/50"
              }`}
            >
              <div className={`p-3 rounded-lg mr-4 ${index === 1 ? "bg-accent/10" : "bg-primary/10"}`}>
                <service.icon className={`w-6 h-6 ${index === 1 ? "text-accent" : "text-primary"}`} />
              </div>
              <div>
                <h4 className="font-semibold">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
