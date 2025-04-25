export interface ICategoria {
    id: number;
    nombre: string;
    padre_id: number | null;
}

export interface IClasificacion {
    id: number;
    sku: string;
}
