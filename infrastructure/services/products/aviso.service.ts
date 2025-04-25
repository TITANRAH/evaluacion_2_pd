// infrastructure/services/aviso/aviso.service.ts
import { IProducto, IAviso } from '@/types/products/product-types';
import { BodegaService } from './bodega.service';

export class AvisoService {
  private bodegaService: BodegaService;

  constructor() {
    this.bodegaService = new BodegaService();
  }

  async getAllAvisos(): Promise<IAviso[]> {
    // console.log('Obteniendo todos los avisos');
    const productos = await this.bodegaService.getAllProductos();
    return Promise.all(productos.map((p) => this.convertirAAviso(p)));
  }

  async convertirAAviso(producto: IProducto): Promise<IAviso> {
    // console.log('Convirtiendo producto a aviso:', producto);
    const stock = await this.bodegaService.getStockConsolidado(producto.id);
    // console.log('Stock obtenido:', stock);

    return {
      id: producto.id,
      sku: producto.sku,
      titulo: producto.nombre,
      imagen: producto.imagen,
      precio: producto.costo * 1.3,
      stock,
      categoria: producto.categoria,
    };
  }

  async getAvisosPorCategoria(categoriaId: number): Promise<IAviso[]> {
    // console.log('Obteniendo avisos para categoría:', categoriaId);
    const productos = await this.bodegaService.getProductosPorCategoria(categoriaId);
    // console.log('Productos obtenidos:', productos);
    return Promise.all(productos.map((p) => this.convertirAAviso(p)));
  }
}
