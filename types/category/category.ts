export interface ICategoria {
    id: number;
    nombre: string;
    padre_id: number | null;
}

export interface IClasificacion {
    id: number;
    sku: string;
}

export interface IAviso {
    id: number;
    sku: string;
    titulo: string;
    imagen: string;
    precio: number;
    stock: number;
}