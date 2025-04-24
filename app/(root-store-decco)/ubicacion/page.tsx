import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LocationPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Nuestra Ubicación</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              Visítanos en nuestra tienda física para ver nuestra colección completa de muebles y decoración.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Dirección</h3>
                <p className="text-muted-foreground">Alonso de Córdova 666, Las Condes, Santiago, Chile</p>
              </div>

              <div>
                <h3 className="font-medium">Horario de Atención</h3>
                <p className="text-muted-foreground">Lunes a Viernes: 10:00 - 19:00</p>
                <p className="text-muted-foreground">Sábado: 10:00 - 14:00</p>
                <p className="text-muted-foreground">Domingo: Cerrado</p>
              </div>

              <div>
                <h3 className="font-medium">Estacionamiento</h3>
                <p className="text-muted-foreground">Contamos con estacionamiento gratuito para nuestros clientes.</p>
              </div>

              <div>
                <h3 className="font-medium">Transporte Público</h3>
                <p className="text-muted-foreground">Metro: Estación Manquehue (Línea 1), a 10 minutos caminando.</p>
                <p className="text-muted-foreground">Buses: Recorridos 405, 406, 410 y 426.</p>
              </div>
            </div>
          </div>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Mapa de ubicación</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
