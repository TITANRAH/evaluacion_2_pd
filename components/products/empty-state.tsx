import React from 'react';

interface EmptyStateProps {
  categoryName?: string;
}

function EmpyState({ categoryName }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-center">
        <h3 className="mt-2 text-xl font-semibold text-gray-900">No hay productos disponibles</h3>
        <p className="mt-1 text-gray-500">
          No se encontraron productos para la categoría{' '}
          <span className="font-bold text-slate-800">{categoryName}</span>
        </p>
      </div>
    </div>
  );
}

export default EmpyState;
