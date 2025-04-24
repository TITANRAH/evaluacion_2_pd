import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';

function ButtonDropDownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="p-0 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
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
  );
}

export default ButtonDropDownMenu;
