import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Product } from "@/types/products/product-types"


interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="aspect-square relative bg-gray-100">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover p-4" />
          </div>
          <CardContent className="p-4 text-center">
            <h3 className="font-medium text-lg mb-1">{product.name}</h3>
            <p className="text-lg font-semibold">${product.price.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Stock: {product.stock}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button variant="outline" className="w-full uppercase text-xs">
              Agregar al carro
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
