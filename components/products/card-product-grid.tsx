import React from 'react';
import { Card, CardContent, CardFooter } from '../ui/card';
import { IAviso } from '@/types/products/product-types';
import Image from 'next/image';
import { getImageUrl } from '@/utils/get-image-url.utils';
import { Button } from '../ui/button';

interface CardProductGridProps {
  product: IAviso;
}

function CardProductGrid({ product }: CardProductGridProps) {
  return (
    <Card key={product.id} className="overflow-hidden">
      <div className="relative aspect-square bg-gray-100">
        <Image
          src={getImageUrl(product.imagen)}
          alt={product.titulo}
          fill
          className="object-cover p-4"
        />
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="mb-1 text-lg font-medium">{product.titulo}</h3>
        <p className="text-lg font-semibold">${product.precio.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground">Stock: {product.stock}</p>
        <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" className="w-full text-xs uppercase">
          Agregar al carro
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardProductGrid;
