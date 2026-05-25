"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Star, Minus, Plus, ShoppingCart, Check } from "lucide-react"
import { useStore } from "@/lib/store-context"
import { formatPrice } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ProductDetail() {
  const { selectedProduct, setSelectedProduct, addToCart, setIsCartOpen } = useStore()
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!selectedProduct) return null

  const images = selectedProduct.images || [selectedProduct.image]
  const isLowStock = selectedProduct.stock <= 5
  const hasDiscount = selectedProduct.originalPrice && selectedProduct.originalPrice > selectedProduct.price
  const discountPercent = hasDiscount 
    ? Math.round(((selectedProduct.originalPrice! - selectedProduct.price) / selectedProduct.originalPrice!) * 100)
    : 0

  const handleClose = () => {
    setSelectedProduct(null)
    setSelectedSize("")
    setQuantity(1)
    setSelectedImageIndex(0)
    setAddedToCart(false)
  }

  const handleAddToCart = () => {
    const size = selectedSize || selectedProduct.sizes?.[0]
    addToCart(selectedProduct, quantity, size)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleBuyNow = () => {
    const size = selectedSize || selectedProduct.sizes?.[0]
    addToCart(selectedProduct, quantity, size)
    handleClose()
    setIsCartOpen(true)
  }

  return (
    <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>{selectedProduct.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image gallery */}
          <div className="relative bg-muted">
            <div className="aspect-square relative">
              <Image
                src={images[selectedImageIndex]}
                alt={selectedProduct.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {hasDiscount && (
                  <Badge className="bg-primary text-primary-foreground font-semibold">
                    -{discountPercent}%
                  </Badge>
                )}
                {isLowStock && (
                  <Badge variant="destructive" className="font-semibold">
                    ¡Últimas unidades!
                  </Badge>
                )}
              </div>
            </div>

            {/* Thumbnail gallery */}
            {images.length > 1 && (
              <div className="flex gap-2 p-4 overflow-x-auto">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? "border-primary" 
                        : "border-transparent hover:border-primary/50"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${selectedProduct.name} ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="p-6 flex flex-col">
            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(selectedProduct.rating)
                        ? "fill-amber-400 text-amber-400"
                        : i < selectedProduct.rating
                        ? "fill-amber-400/50 text-amber-400"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {selectedProduct.rating} ({selectedProduct.reviewCount} reseñas)
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              {selectedProduct.name}
            </h2>

            {/* Material */}
            <p className="text-sm text-primary font-medium mb-4">
              {selectedProduct.material}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-bold text-foreground">
                {formatPrice(selectedProduct.price)}
              </span>
              {hasDiscount && (
                <span className="text-lg text-muted-foreground line-through">
                  {formatPrice(selectedProduct.originalPrice!)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              {selectedProduct.description}
            </p>

            {/* Size selector */}
            {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
              <div className="mb-4">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Tamaño
                </label>
                <Select 
                  value={selectedSize || selectedProduct.sizes[0]} 
                  onValueChange={setSelectedSize}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona un tamaño" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedProduct.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Quantity selector */}
            <div className="mb-6">
              <label className="text-sm font-medium text-foreground mb-2 block">
                Cantidad
              </label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-semibold text-lg">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.min(selectedProduct.stock, quantity + 1))}
                  disabled={quantity >= selectedProduct.stock}
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <span className="text-sm text-muted-foreground">
                  {selectedProduct.stock} disponibles
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 mt-auto">
              <Button 
                size="lg" 
                className="w-full"
                onClick={handleBuyNow}
              >
                Comprar ahora
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={handleAddToCart}
                disabled={addedToCart}
              >
                {addedToCart ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    ¡Añadido!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Añadir al carrito
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
