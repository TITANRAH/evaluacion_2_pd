import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            Deccos
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Inicio
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="text-sm font-medium text-muted-foreground hover:text-foreground p-0">
                  Categorías
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Lámparas</DropdownMenuItem>
                <DropdownMenuItem>Sillas</DropdownMenuItem>
                <DropdownMenuItem>Mesas</DropdownMenuItem>
                <DropdownMenuItem>Decoración</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/ubicacion" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Ubicación
            </Link>
            <Link href="/contacto" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Contacto
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground">
            Bienvenido Anónimo (
            <Link href="/auth/login" className="text-primary hover:underline">
              Ingresar
            </Link>
            )
          </div>
          <Button variant="outline" size="sm" className="relative">
            <ShoppingCart className="h-4 w-4 mr-2" />
            CARRO
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}
