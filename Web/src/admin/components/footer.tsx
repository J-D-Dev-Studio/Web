import { Phone, Mail, Clock, MapPin, Shield, RefreshCw, Truck } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      {/* Trust badges */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Envío a todo Colombia</h3>
                <p className="text-sm text-muted-foreground">Entrega segura a domicilio</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Cambios y devoluciones</h3>
                <p className="text-sm text-muted-foreground">15 días para cambiar tu producto</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Garantía de calidad</h3>
                <p className="text-sm text-muted-foreground">Productos 100% garantizados</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-primary">J-D</span>
              <span className="text-xl font-light text-foreground">Hogar</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tu tienda de confianza para ropa de cama y hogar de la mejor calidad. 
              Transformamos tu descanso con productos premium.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+57 300 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>ventas@jdhogar.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Horarios de atención</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Lunes a Viernes</span>
              </li>
              <li className="pl-6">8:00 AM - 6:00 PM</li>
              <li className="flex items-center gap-2 mt-3">
                <Clock className="h-4 w-4 text-primary" />
                <span>Sábados</span>
              </li>
              <li className="pl-6">9:00 AM - 2:00 PM</li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Políticas</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de cambios
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Garantías de sábanas
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 J-D Hogar. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <span>Aceptamos:</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-muted rounded text-xs font-medium">Transferencia</span>
                <span className="px-2 py-1 bg-muted rounded text-xs font-medium">Contra entrega</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
