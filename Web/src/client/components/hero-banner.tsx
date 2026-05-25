import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroBannerProps {
  onExplore: () => void
}

export function HeroBanner({ onExplore }: HeroBannerProps) {
  return (
    <section className="relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-12 lg:py-20">
          {/* Content */}
          <div className="relative z-10 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Nueva colección 2026
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4 text-balance">
              Transforma tu hogar en un{" "}
              <span className="text-primary">refugio de confort</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed text-pretty">
              Descubre nuestra selección premium de sábanas, cortinas, almohadas y cubrelechos. 
              Calidad textil colombiana para tu descanso perfecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base" onClick={onExplore}>
                Explorar colección
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Ver ofertas
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop"
                alt="Elegante habitación con ropa de cama premium"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 lg:bottom-8 lg:-left-8 bg-card rounded-xl p-4 shadow-lg border border-border max-w-[200px]">
              <p className="text-sm text-muted-foreground mb-1">Más vendido</p>
              <p className="font-semibold text-foreground text-sm">Sábanas Algodón 400 hilos</p>
              <p className="text-primary font-bold mt-1">$189.900</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
