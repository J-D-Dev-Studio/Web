"use client"

import { useRef } from "react"
import { StoreProvider } from "@/lib/store-context"
import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { ProductGrid } from "@/components/product-grid"
import { ProductDetail } from "@/components/product-detail"
import { CartSheet } from "@/components/cart-sheet"
import { Footer } from "@/components/footer"

function StoreContent() {
  const catalogRef = useRef<HTMLDivElement>(null)

  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroBanner onExplore={scrollToCatalog} />
        
        <div ref={catalogRef} className="container mx-auto px-4">
          <ProductGrid />
        </div>
      </main>

      <Footer />

      {/* Modals */}
      <ProductDetail />
      <CartSheet />
    </div>
  )
}

export default function Home() {
  return (
    <StoreProvider>
      <StoreContent />
    </StoreProvider>
  )
}
