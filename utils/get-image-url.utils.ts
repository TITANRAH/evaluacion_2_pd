export const getImageUrl = (imagen: string) => {
    if (imagen.startsWith('http')) return imagen;
    return `/images/${imagen}`;
  };