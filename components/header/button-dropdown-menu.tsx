// tienda/components/header/button-dropdown-menu.tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { MenuService } from '@/infrastructure/services/categories/menu.service';
import { ItemMenu } from '@/types/menu/item-menu.types';
import Link from 'next/link';

async function ButtonDropDownMenu() {
  const menuService = new MenuService();
  const categorias = await menuService.getMenuItems();

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
        <MenuItems items={categorias} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MenuItems({ items }: { items: ItemMenu[] }) {
  return (
    <>
      {items.map((item) => (
        <MenuItem key={item.enlace} item={item} />
      ))}
    </>
  );
}

function MenuItem({ item }: { item: ItemMenu }) {
  if (item.hijos && item.hijos.length > 0) {
    return (
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>{item.texto}</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <MenuItems items={item.hijos} />
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    );
  }

  return (
    <DropdownMenuItem asChild>
      <Link href={item.enlace}>{item.texto}</Link>
    </DropdownMenuItem>
  );
}

export default ButtonDropDownMenu;