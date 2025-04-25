// tienda/infrastructure/services/categories/menu.service.ts
import { ItemMenu } from '@/types/menu/item-menu.types';
import { CategoriaService } from './category.service';
import { ICategoria } from '@/types/category/category';

export class MenuService {
  private categoriaService: CategoriaService;

  constructor() {
    this.categoriaService = new CategoriaService();
  }

  async getMenuItems(): Promise<ItemMenu[]> {
    try {
      const categorias = await this.categoriaService.getCategorias();

      return this.convertirCategoriasAMenu(categorias);
    } catch (error) {
    //   console.error('Error al construir menú:', error);
      return [];
    }
  }

  private convertirCategoriasAMenu(categorias: ICategoria[]): ItemMenu[] {
   
    const categoriasMap = new Map<number, ItemMenu>();
    const menuItems: ItemMenu[] = [];

    categorias.forEach((categoria) => {
      const menuItem: ItemMenu = {
        texto: categoria.nombre,
        enlace: `/categoria/${categoria.id}/${this.generarSlug(categoria.nombre)}`,
        slug: this.generarSlug(categoria.nombre),
        hijos: [],
      };

      categoriasMap.set(categoria.id, menuItem);

      if (!categoria.padre_id) {
        menuItems.push(menuItem);
      }
    });

    categorias.forEach((categoria) => {
      if (categoria.padre_id) {
        const padre = categoriasMap.get(categoria.padre_id);

        const hijo = categoriasMap.get(categoria.id);

        if (padre && hijo) {
          padre.hijos = padre.hijos || [];
          padre.hijos.push(hijo);
        }
      }
    });

    return menuItems;
  }

  private generarSlug(texto: string): string {
    return texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }
}
