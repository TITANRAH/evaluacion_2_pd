import prisma from '@/lib/prismadb';
import { IStock } from '@/types/products/product-types';

export class StockRepository {

    // DEJO ESTE METODO PARA VER PRODUCTOS POR BODEGA 
  async findByProductoId(productoId: number): Promise<IStock[]> {
    try {
    //   console.log('Buscando stock para producto:', productoId);
      const stocks = await prisma.stock.findMany({
        where: {
          producto_id: productoId,
        },
      });
    //   console.log('Stocks encontrados:', stocks);
      return stocks;
    } catch (error) {
    //   console.error('Error al obtener stock por producto:', error);
      return [];
    }
  }

  async getStockConsolidado(productoId: number): Promise<number> {
    try {
    //   console.log('Calculando stock consolidado para producto:', productoId);
      const stocks = await prisma.stock.findMany({
        where: {
          producto_id: productoId,
        },
      });
    //   console.log('Stocks encontrados:', stocks);
      return stocks.reduce((total, stock) => total + stock.cantidad, 0);
    } catch (error) {
    //   console.error('Error al obtener stock consolidado:', error);
      return 0;
    }
  }
}
