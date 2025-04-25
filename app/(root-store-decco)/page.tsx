import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { ProductGrid } from '@/components/products/product-grid';
import { AvisoService } from '@/infrastructure/services/products/aviso.service';

export default async function Home() {
  const avisoService = new AvisoService();
  const avisos = await avisoService.getAllAvisos();
  // console.log('avisos', avisos);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto py-12">
        <ProductGrid products={avisos} />
      </div>
    </main>
  );
}
