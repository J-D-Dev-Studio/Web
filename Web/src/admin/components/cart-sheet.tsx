"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight, Check } from "lucide-react"
import { useStore } from "@/lib/store-context"
import { formatPrice } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

type CheckoutStep = "cart" | "checkout" | "success"

export function CartSheet() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    cartTotal, 
    cartCount,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useStore()
  
  const [step, setStep] = useState<CheckoutStep>("cart")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
    paymentMethod: "transfer"
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const TAX_RATE = 0.19
  const subtotal = cartTotal
  const tax = Math.round(subtotal * TAX_RATE)
  const total = subtotal + tax

  const handleClose = () => {
    setIsCartOpen(false)
    // Reset to cart view after closing
    setTimeout(() => setStep("cart"), 300)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate order submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setStep("success")
    setIsSubmitting(false)
    clearCart()
  }

  const renderCartItems = () => (
    <div className="flex-1 overflow-y-auto py-4">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <ShoppingBag className="h-16 w-16 text-muted-foreground/50 mb-4" />
          <h3 className="font-semibold text-foreground mb-2">Tu carrito está vacío</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Explora nuestra colección y añade productos a tu carrito.
          </p>
          <Button onClick={handleClose}>Explorar productos</Button>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div 
              key={`${item.product.id}-${item.size}`}
              className="flex gap-4 p-3 bg-muted/50 rounded-lg"
            >
              <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm text-foreground line-clamp-2">
                  {item.product.name}
                </h4>
                {item.size && (
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Tamaño: {item.size}
                  </p>
                )}
                <p className="font-semibold text-foreground mt-1">
                  {formatPrice(item.product.price)}
                </p>
                
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-6 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size)}
                      disabled={item.quantity >= item.product.stock}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-destructive hover:text-destructive"
                    onClick={() => removeFromCart(item.product.id, item.size)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  const renderCartSummary = () => (
    <div className="border-t border-border pt-4 mt-auto">
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">IVA (19%)</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between text-base">
          <span className="font-semibold">Total</span>
          <span className="font-bold text-primary">{formatPrice(total)}</span>
        </div>
      </div>
      <Button 
        className="w-full mt-4" 
        size="lg"
        disabled={cart.length === 0}
        onClick={() => setStep("checkout")}
      >
        Continuar con el pedido
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  )

  const renderCheckoutForm = () => (
    <form onSubmit={handleSubmitOrder} className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto py-4 space-y-6">
        {/* Order summary */}
        <div className="bg-muted/50 rounded-lg p-4">
          <h3 className="font-medium text-sm mb-2">Resumen del pedido</h3>
          <p className="text-sm text-muted-foreground">
            {cartCount} producto{cartCount !== 1 ? "s" : ""} · Total: <span className="font-semibold text-foreground">{formatPrice(total)}</span>
          </p>
        </div>

        {/* Shipping info */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Información de envío</h3>
          
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo *</Label>
            <Input
              id="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="300 123 4567"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Dirección de entrega *</Label>
            <Textarea
              id="address"
              placeholder="Calle, número, barrio, ciudad"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              required
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notas para el repartidor</Label>
            <Textarea
              id="notes"
              placeholder="Indicaciones adicionales (opcional)"
              value={formData.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              rows={2}
            />
          </div>
        </div>

        {/* Payment method */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Método de pago</h3>
          
          <RadioGroup
            value={formData.paymentMethod}
            onValueChange={(value) => handleInputChange("paymentMethod", value)}
            className="space-y-3"
          >
            <div className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:border-primary transition-colors">
              <RadioGroupItem value="transfer" id="transfer" />
              <Label htmlFor="transfer" className="flex-1 cursor-pointer">
                <span className="font-medium">Transferencia bancaria</span>
                <span className="block text-sm text-muted-foreground">
                  Recibirás los datos de la cuenta por WhatsApp
                </span>
              </Label>
            </div>
            <div className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:border-primary transition-colors">
              <RadioGroupItem value="cash" id="cash" />
              <Label htmlFor="cash" className="flex-1 cursor-pointer">
                <span className="font-medium">Contra entrega</span>
                <span className="block text-sm text-muted-foreground">
                  Paga cuando recibas tu pedido
                </span>
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      {/* Summary and submit */}
      <div className="border-t border-border pt-4 mt-auto space-y-3">
        <div className="flex justify-between text-base">
          <span className="font-semibold">Total a pagar</span>
          <span className="font-bold text-primary">{formatPrice(total)}</span>
        </div>
        <Button 
          type="submit" 
          className="w-full" 
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Procesando..." : "Confirmar pedido"}
        </Button>
        <Button 
          type="button"
          variant="ghost" 
          className="w-full"
          onClick={() => setStep("cart")}
          disabled={isSubmitting}
        >
          Volver al carrito
        </Button>
      </div>
    </form>
  )

  const renderSuccess = () => (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <Check className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">
        ¡Pedido realizado!
      </h3>
      <p className="text-muted-foreground mb-6">
        Gracias por tu compra. Te contactaremos pronto por WhatsApp para confirmar los detalles de tu pedido.
      </p>
      <Button onClick={handleClose}>Seguir comprando</Button>
    </div>
  )

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle>
            {step === "cart" && `Carrito (${cartCount})`}
            {step === "checkout" && "Finalizar compra"}
            {step === "success" && "Pedido confirmado"}
          </SheetTitle>
        </SheetHeader>

        {step === "cart" && (
          <>
            {renderCartItems()}
            {cart.length > 0 && renderCartSummary()}
          </>
        )}
        
        {step === "checkout" && renderCheckoutForm()}
        
        {step === "success" && renderSuccess()}
      </SheetContent>
    </Sheet>
  )
}
