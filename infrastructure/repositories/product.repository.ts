// infrastructure/repositories/producto.repository.ts
import prisma from '@/lib/prismadb';
import { IProducto } from '@/types/products/product-types';

export class ProductoRepository {
  async findBySku(sku: string): Promise<IProducto | null> {
    try {
    //   console.log('Buscando producto por SKU:', sku);
      const producto = await prisma.producto.findUnique({
        where: { sku },
        include: {
          categoria: true,
        },
      });
    //   console.log('Producto encontrado:', producto);
      return producto;
    } catch (error) {
    //   console.error('Error al obtener producto por SKU:', error);
      return null;
    }
  }


  async findAll(): Promise<IProducto[]> {
    try {
        // console.log('Buscando todos los productos');
        const productos = await prisma.producto.findMany({
            include: {
                categoria: true
            }
        });
        // console.log('Productos encontrados:', productos);
        return productos;
    } catch (error) {
        // console.error('Error al obtener todos los productos:', error);
        return [];
    }
}

//   DEJO ESTE METODO POR SI SE NECESITARA EN UN FUTURO
  async findBySkus(skus: string[]): Promise<IProducto[]> {
    try {
      return await prisma.producto.findMany({
        where: {
          sku: { in: skus },
        },
        include: {
          categoria: true,
        },
      });
    } catch (error) {
    //   console.error('Error al obtener productos por SKUs:', error);
      return [];
    }
  }

  async findByCategoriaId(categoriaId: number): Promise<IProducto[]> {
    try {
    //   console.log('Buscando productos para categoría:', categoriaId);
      const productos = await prisma.producto.findMany({
        where: {
          categoria_id: categoriaId,
        },
        include: {
          categoria: true,
        },
      });
    //   console.log('Productos encontrados:', productos);
      return productos;
    } catch (error) {
    //   console.error('Error al obtener productos por categoría:', error);
      return [];
    }
  }
}
