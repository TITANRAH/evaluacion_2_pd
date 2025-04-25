import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-3xl font-bold">Contacto</h1>
            <p className="mb-6 text-muted-foreground">
              Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo
              lo antes posible.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Dirección</h3>
                <p className="text-muted-foreground">
                  Alonso de Córdova 666, Las Condes, Santiago, Chile
                </p>
              </div>

              <div>
                <h3 className="font-medium">Teléfono</h3>
                <p className="text-muted-foreground">+56 2 2123 4567</p>
              </div>

              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">contacto@deccos.cl</p>
              </div>

              <div>
                <h3 className="font-medium">Horario de Atención</h3>
                <p className="text-muted-foreground">Lunes a Viernes: 10:00 - 19:00</p>
                <p className="text-muted-foreground">Sábado: 10:00 - 14:00</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
              <CardDescription>
                Completa el formulario y te responderemos a la brevedad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="Asunto de tu mensaje" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" placeholder="Escribe tu mensaje aquí" rows={5} />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Enviar mensaje</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
