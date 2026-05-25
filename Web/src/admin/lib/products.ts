import type { Product } from "./store-context"

export const products: Product[] = [
  // Sábanas
  {
    id: "sab-001",
    name: "Juego de Sábanas Algodón Egipcio 400 Hilos",
    description: "Juego completo de sábanas en algodón egipcio de 400 hilos. Incluye sábana ajustable, sábana plana y 2 fundas de almohada. Suavidad excepcional y durabilidad garantizada.",
    material: "100% Algodón Egipcio - 400 hilos",
    price: 189900,
    originalPrice: 249900,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop"
    ],
    category: "sabanas",
    rating: 4.8,
    reviewCount: 234,
    stock: 3,
    sizes: ["Sencillo", "Doble", "Queen", "King"]
  },
  {
    id: "sab-002",
    name: "Sábanas de Microfibra Premium",
    description: "Sábanas ultra suaves de microfibra de alta densidad. Resistentes a las arrugas y de fácil cuidado. Perfectas para el uso diario.",
    material: "Microfibra Premium 1800 TC",
    price: 89900,
    image: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=800&h=800&fit=crop"
    ],
    category: "sabanas",
    rating: 4.5,
    reviewCount: 156,
    stock: 45,
    sizes: ["Sencillo", "Doble", "Queen", "King"]
  },
  {
    id: "sab-003",
    name: "Sábanas de Satén de Bambú",
    description: "Sábanas ecológicas de fibra de bambú con acabado satinado. Termorregulador natural, ideal para climas cálidos.",
    material: "70% Bambú, 30% Algodón",
    price: 159900,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=600&fit=crop",
    category: "sabanas",
    rating: 4.7,
    reviewCount: 89,
    stock: 12,
    sizes: ["Sencillo", "Doble", "Queen", "King"]
  },
  // Cortinas
  {
    id: "cor-001",
    name: "Cortinas Blackout Premium",
    description: "Cortinas blackout de triple tejido. Bloquean el 99% de la luz y reducen el ruido exterior. Ideales para dormitorios.",
    material: "Poliéster Triple Tejido Blackout",
    price: 129900,
    originalPrice: 169900,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop"
    ],
    category: "cortinas",
    rating: 4.9,
    reviewCount: 312,
    stock: 2,
    sizes: ["140x220 cm", "180x220 cm", "220x220 cm", "280x220 cm"]
  },
  {
    id: "cor-002",
    name: "Cortinas de Lino Natural",
    description: "Cortinas de lino 100% natural con caída elegante. Filtran suavemente la luz creando un ambiente cálido y acogedor.",
    material: "100% Lino Natural",
    price: 149900,
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&h=600&fit=crop",
    category: "cortinas",
    rating: 4.6,
    reviewCount: 78,
    stock: 18,
    sizes: ["140x220 cm", "180x220 cm", "220x220 cm"]
  },
  {
    id: "cor-003",
    name: "Cortinas Térmicas Aislantes",
    description: "Cortinas con tecnología térmica que mantienen la temperatura ideal en tu hogar. Ahorra energía todo el año.",
    material: "Poliéster con capa térmica",
    price: 109900,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    category: "cortinas",
    rating: 4.4,
    reviewCount: 145,
    stock: 25,
    sizes: ["140x220 cm", "180x220 cm", "220x220 cm", "280x220 cm"]
  },
  // Almohadas
  {
    id: "alm-001",
    name: "Almohada Memory Foam Ergonómica",
    description: "Almohada de espuma viscoelástica con diseño ergonómico. Se adapta perfectamente a tu cuello y cabeza para un descanso óptimo.",
    material: "Memory Foam de Alta Densidad",
    price: 79900,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?w=800&h=800&fit=crop"
    ],
    category: "almohadas",
    rating: 4.7,
    reviewCount: 423,
    stock: 4,
    sizes: ["Estándar", "King"]
  },
  {
    id: "alm-002",
    name: "Almohada de Plumas de Ganso",
    description: "Almohada premium rellena de plumas de ganso blanco. Suavidad incomparable y soporte natural.",
    material: "90% Plumas de Ganso, 10% Plumón",
    price: 119900,
    originalPrice: 149900,
    image: "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=600&h=600&fit=crop",
    category: "almohadas",
    rating: 4.8,
    reviewCount: 167,
    stock: 8,
    sizes: ["Estándar", "King"]
  },
  {
    id: "alm-003",
    name: "Almohada Antiácaros Hipoalergénica",
    description: "Almohada especialmente diseñada para personas alérgicas. Tratamiento antiácaros y antibacterial.",
    material: "Fibra Hueca Siliconada",
    price: 59900,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&h=600&fit=crop",
    category: "almohadas",
    rating: 4.5,
    reviewCount: 234,
    stock: 35,
    sizes: ["Estándar", "King"]
  },
  // Cubrelechos
  {
    id: "cub-001",
    name: "Cubrelecho Acolchado Reversible",
    description: "Cubrelecho de doble cara con acolchado premium. Dos diseños en uno para renovar tu habitación.",
    material: "Algodón 200 hilos con relleno de poliéster",
    price: 219900,
    originalPrice: 289900,
    image: "https://images.unsplash.com/photo-1616627451515-cbc80e5ece35?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1616627451515-cbc80e5ece35?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=800&fit=crop"
    ],
    category: "cubrelechos",
    rating: 4.9,
    reviewCount: 189,
    stock: 1,
    sizes: ["Sencillo", "Doble", "Queen", "King"]
  },
  {
    id: "cub-002",
    name: "Edredón Nórdico Premium",
    description: "Edredón nórdico con relleno de fibra hueca para máximo abrigo. Ligero pero increíblemente cálido.",
    material: "Microfibra con relleno 300g/m²",
    price: 179900,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=600&fit=crop",
    category: "cubrelechos",
    rating: 4.6,
    reviewCount: 98,
    stock: 15,
    sizes: ["Sencillo", "Doble", "Queen", "King"]
  },
  {
    id: "cub-003",
    name: "Manta de Algodón Tejida",
    description: "Manta artesanal 100% algodón con diseño tejido. Perfecta para noches frescas o como decoración.",
    material: "100% Algodón Orgánico",
    price: 139900,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop",
    category: "cubrelechos",
    rating: 4.7,
    reviewCount: 76,
    stock: 22,
    sizes: ["Individual", "Matrimonial"]
  }
]

export const categories = [
  { id: "sabanas", name: "Sábanas", icon: "bed" },
  { id: "cortinas", name: "Cortinas", icon: "blinds" },
  { id: "almohadas", name: "Almohadas", icon: "pillow" },
  { id: "cubrelechos", name: "Cubrelechos", icon: "blanket" }
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}
