"use client"

import { Github, Linkedin, Mail, Heart, MapPin, Phone, Code, MessageCircle } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <footer className="bg-gradient-to-br from-background via-muted/20 to-muted/40 border-t border-border relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(160,182,147,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(115,160,88,0.1),transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section - Completely Redesigned */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">K</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary">Kodor</h3>
                  <p className="text-sm text-muted-foreground">Desarrollo & Diseño</p>
                </div>
              </div>

              <p className="text-muted-foreground text-pretty leading-relaxed text-lg max-w-lg">
                Desde Costa Rica, transformamos ideas en experiencias digitales excepcionales. Especializados en
                desarrollo web moderno y diseño creativo que impulsa el crecimiento de tu negocio.
              </p>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Proyectos</div>
                </div>
                <div className="text-center p-4 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">Años</div>
                </div>
                <div className="text-center p-4 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfacción</div>
                </div>
                <div className="text-center p-4 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Soporte</div>
                </div>
              </div>
            </div>

            {/* Services Section - New */}
            <div>
              <h4 className="font-semibold text-foreground mb-6 text-lg flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Servicios
              </h4>
              <ul className="space-y-4">
                {[
                  { label: "Desarrollo Web", desc: "Apps modernas y escalables" },
                  { label: "Diseño UI/UX", desc: "Interfaces intuitivas" },
                  { label: "E-commerce", desc: "Tiendas online completas" },
                  { label: "Consultoría", desc: "Estrategia digital" },
                ].map((service) => (
                  <li key={service.label} className="group">
                    <div className="p-3 rounded-lg hover:bg-card/50 transition-all duration-300 cursor-pointer">
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {service.label}
                      </div>
                      <div className="text-sm text-muted-foreground">{service.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social - Enhanced */}
            <div>
              <h4 className="font-semibold text-foreground mb-6 text-lg flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Contacto
              </h4>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">hola@kodor.dev</div>
                    <div className="text-xs text-muted-foreground">Email principal</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">+506 1234-5678</div>
                    <div className="text-xs text-muted-foreground">WhatsApp disponible</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">San José, Costa Rica</div>
                    <div className="text-xs text-muted-foreground">Zona horaria: GMT-6</div>
                  </div>
                </div>
              </div>

              {/* Social Links - Redesigned */}
              <div>
                <p className="text-sm text-muted-foreground mb-4 font-medium">Síguenos en redes</p>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-900" },
                    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
                    { icon: Mail, href: "#", label: "Email", color: "hover:bg-primary" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`group w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-white ${social.color} hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Improved */}
          <div className="border-t border-border/50 mt-16 pt-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="text-muted-foreground flex items-center gap-2 text-sm">
                © 2025 Kodor. Todos los derechos reservados.
              </p>
              <p className="text-muted-foreground flex items-center gap-2 text-sm">
                Hecho con <Heart className="h-4 w-4 text-red-500 animate-pulse" /> en Costa Rica
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/50612345678?text=Hola%20Kodor,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-6 w-6 group-hover:animate-bounce" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
        </a>
      </div>
    </>
  )
}
