import { Product } from "@/types/products/product-types";
import lamparaCarrie from "@/public/images/carrie-table-lamp.jpg"
import lamparaNordicBeam from "@/public/images/carrie-table-lamp2.jpg"
import lamparaNomadLight from "@/public/images/table-lamp-14x29cm.jpg"
import lamparaHaloTouch from "@/public/images/pendant-lamp-light.jpg"
import sillaLounge from "@/public/images/simple-model-chair.jpg"
import sillaClasicaModerna from "@/public/images/modern-classic-chairs.jpg"


export const products: Product[] = [
  {
    id: "1",
    name: "Lámpara LumiGlow",
    price: 26000,
    stock: 18,
    image: lamparaCarrie.src,
    category: "lamps",
  },
  {
    id: "2",
    name: "Lámpara NordicBeam",
    price: 64999,
    stock: 60,
    image: lamparaNordicBeam.src,
    category: "lamps",
  },
  {
    id: "3",
    name: "Lámpara Nomad Light",
    price: 58499,
    stock: 9,
    image: lamparaNomadLight.src,
    category: "lamps",
  },
  {
    id: "4",
    name: "Lámpara HaloTouch",
    price: 19500,
    stock: 2,
    image: lamparaHaloTouch.src,
    category: "lamps",
  },
  {
    id: "5",
    name: "Silla Lounge",
    price: 32499,
    stock: 3,
    image: sillaLounge.src,
    category: "chairs",
  },
  {
    id: "6",
    name: "Silla Clásica Moderna",
    price: 26000,
    stock: 1,
    image: sillaClasicaModerna.src,
    category: "chairs",
  },
]
