import React from 'react';
import { Button } from '../ui/button';
import { ShoppingCart } from 'lucide-react';

function ButtonCar() {
  return (
    <Button variant="outline" size="sm" className="relative">
      <ShoppingCart className="mr-2 h-4 w-4" />
      CARRO
      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
        0
      </span>
    </Button>
  );
}

export default ButtonCar;
