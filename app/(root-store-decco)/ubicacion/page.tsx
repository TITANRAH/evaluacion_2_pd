export default function LocationPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-6 text-3xl font-bold">Nuestra Ubicación</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-lg">
              Visítanos en nuestra tienda física para ver nuestra colección completa de muebles y
              decoración.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Dirección</h3>
                <p className="text-muted-foreground">
                  Alonso de Córdova 666, Las Condes, Santiago, Chile
                </p>
              </div>

              <div>
                <h3 className="font-medium">Horario de Atención</h3>
                <p className="text-muted-foreground">Lunes a Viernes: 10:00 - 19:00</p>
                <p className="text-muted-foreground">Sábado: 10:00 - 14:00</p>
                <p className="text-muted-foreground">Domingo: Cerrado</p>
              </div>

              <div>
                <h3 className="font-medium">Estacionamiento</h3>
                <p className="text-muted-foreground">
                  Contamos con estacionamiento gratuito para nuestros clientes.
                </p>
              </div>

              <div>
                <h3 className="font-medium">Transporte Público</h3>
                <p className="text-muted-foreground">
                  Metro: Estación Manquehue (Línea 1), a 10 minutos caminando.
                </p>
                <p className="text-muted-foreground">Buses: Recorridos 405, 406, 410 y 426.</p>
              </div>
            </div>
          </div>
          <div className="flex aspect-video items-center justify-center rounded-lg bg-gray-200">
            <p className="text-muted-foreground">Mapa de ubicación</p>
          </div>
        </div>
      </div>
    </main>
  );
}
