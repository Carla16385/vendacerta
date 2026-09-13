export const AFFILIATE_ID = "18379590013"

export type Niche = {
  id: string
  label: string
  icon: "shirt" | "utensils" | "baby" | "pawprint"
}

export const niches: Niche[] = [
  { id: "moda-beleza", label: "Moda e beleza", icon: "shirt" },
  { id: "casa", label: "Casa", icon: "utensils" },
  { id: "infantil", label: "Infantil", icon: "baby" },
  { id: "pets", label: "Pets", icon: "pawprint" },
]

export type Product = {
  id: string
  name: string
  sales: string
  commission: string
  image: string
}

export const products: Product[] = [
  {
    id: "meias-nuvem",
    name: "Kit 5 Meias Nuvem",
    sales: "1.2k vendas",
    commission: "R$4,20 comissão",
    image: "/produtos/meias-nuvem.png",
  },
  {
    id: "bolsa-transversal",
    name: "Bolsa Transversal Feminina",
    sales: "856 vendas",
    commission: "R$8,50 comissão",
    image: "/produtos/bolsa-transversal.png",
  },
  {
    id: "escova-secadora",
    name: "Escova Secadora 3 em 1",
    sales: "623 vendas",
    commission: "R$15,00 comissão",
    image: "/produtos/escova-secadora.png",
  },
]

export const videoOptions = [3, 5, 7] as const
