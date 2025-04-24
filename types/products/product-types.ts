import { StaticImageData } from "next/image"

export interface Product {
    id: string
    name: string
    price: number
    stock: number
    image: StaticImageData
    category: string
  }
  