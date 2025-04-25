import { ICategoria } from '../category/category';

export interface IProducto {
  id: number;
  sku: string;
  nombre: string;
  imagen: string;
  costo: number;
  categoria_id: number;
  categoria: ICategoria;
}

export interface IStock {
  id: number;
  cantidad: number;
  producto_id: number;
  bodega_id: number;
}

export interface IAviso {
  id: number;
  sku: string;
  titulo: string;
  imagen: string;
  precio: number;
  stock: number;
  categoria?: ICategoria;
}
