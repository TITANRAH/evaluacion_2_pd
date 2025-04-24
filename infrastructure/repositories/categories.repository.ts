// tienda/infrastructure/repositories/categoria.repository.ts
import prisma from '@/lib/prismadb';
import { ICategoria } from '@/types/category/category';

export class CategoriaRepository {
  async findAll(): Promise<ICategoria[]> {
    try {
      return await prisma.categoria.findMany();
    } catch (error) {
      console.error('Error al obtener categorías:', error);
      return [];
    }
  }

  async findById(id: number): Promise<ICategoria | null> {
    try {
      return await prisma.categoria.findUnique({
        where: { id },
      });
    } catch (error) {
      console.error('Error al obtener categoría:', error);
      return null;
    }
  }
}
