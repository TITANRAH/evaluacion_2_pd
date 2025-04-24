// tienda/services/categoria.service.ts
import { ICategoria } from '@/types/category/category';
import { CategoriaRepository } from '../../repositories/categories.repository';

export class CategoriaService {
  private repository: CategoriaRepository;

  constructor() {
    this.repository = new CategoriaRepository();
  }

  async getCategorias(): Promise<ICategoria[]> {
    return this.repository.findAll();
  }

  async getCategoriaById(id: number): Promise<ICategoria | null> {
    return this.repository.findById(id);
  }
}
