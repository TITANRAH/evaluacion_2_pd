import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { IAviso } from '@/types/products/product-types';
import CardProductGrid from './card-product-grid';

interface ProductGridProps {
  products: IAviso[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <CardProductGrid key={product.id} product={product} />
      ))}
    </div>
  );
}
