// infrastructure/services/bodega/bodega.service.ts
import { IProducto } from '@/types/products/product-types';
import { StockRepository } from '../../repositories/stock.repository';
import { ProductoRepository } from '@/infrastructure/repositories/product.repository';

export class BodegaService {
  private productoRepository: ProductoRepository;
  private stockRepository: StockRepository;

  constructor() {
    this.productoRepository = new ProductoRepository();
    this.stockRepository = new StockRepository();
  }

  async getAllProductos(): Promise<IProducto[]> {
    return this.productoRepository.findAll(); // Necesitamos crear este método
}

  async getProductoBySku(sku: string): Promise<IProducto | null> {
    return this.productoRepository.findBySku(sku);
  }

  async getStockConsolidado(productoId: number): Promise<number> {
    return this.stockRepository.getStockConsolidado(productoId);
  }

  async getProductosPorCategoria(categoriaId: number): Promise<IProducto[]> {
    return this.productoRepository.findByCategoriaId(categoriaId);
  }
}
