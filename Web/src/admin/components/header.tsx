"use client"

import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"
import { useStore } from "@/lib/store-context"
import { categories } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const { 
    cartCount, 
    setIsCartOpen, 
    searchQuery, 
    setSearchQuery,
    selectedCategory,
    setSelectedCategory 
  } = useStore()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const categoryIcons: Record<string, string> = {
    sabanas: "🛏️",
    cortinas: "🪟",
    almohadas: "🛋️",
    cubrelechos: "🧶"
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">J-D</span>
            <span className="text-xl font-light text-foreground">Hogar</span>
          </div>

          {/* Search bar - desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="flex flex-col gap-6 mt-6">
                  {/* Mobile search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Buscar productos..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  {/* Mobile categories */}
                  <nav className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Categorías</p>
                    <Button
                      variant={selectedCategory === null ? "default" : "ghost"}
                      className="justify-start"
                      onClick={() => {
                        setSelectedCategory(null)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Todos los productos
                    </Button>
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "ghost"}
                        className="justify-start gap-2"
                        onClick={() => {
                          setSelectedCategory(category.id)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        <span>{categoryIcons[category.id]}</span>
                        {category.name}
                      </Button>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            {/* Cart button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary text-primary-foreground"
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </Badge>
              )}
              <span className="sr-only">Carrito de compras</span>
            </Button>
          </div>
        </div>

        {/* Category bar - desktop */}
        <nav className="hidden md:flex items-center gap-1 pb-3 overflow-x-auto">
          <Button
            variant={selectedCategory === null ? "default" : "ghost"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            Todos
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "ghost"}
              size="sm"
              className="gap-2"
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="text-base">{categoryIcons[category.id]}</span>
              {category.name}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  )
}
