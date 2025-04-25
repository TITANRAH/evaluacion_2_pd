import EmptyState from '@/components/products/empty-state';
import { ProductGrid } from '@/components/products/product-grid';
import { AvisoService } from '@/infrastructure/services/products/aviso.service';

interface CategoriaPageProps {
  params: {
    id: string;
    name: string;
  };
}

export default async function CategoriaPage({ params }: CategoriaPageProps) {
  const { id, name } = params;
  console.log('ID de categoría:', id);
  console.log('Nombre de categoría:', name);

  const avisoService = new AvisoService();
  const avisos = await avisoService.getAvisosPorCategoria(Number(id));

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto py-12">
        {avisos.length < 0 && <h1 className="mb-6 text-2xl font-bold">Categoría: {name}</h1>}

        {avisos.length > 0 ? <ProductGrid products={avisos} /> : <EmptyState categoryName={name} />}
      </div>
    </main>
  );
}
