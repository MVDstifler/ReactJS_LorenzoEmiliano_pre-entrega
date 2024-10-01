import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // Obtener el ID del producto de la URL

  // Aquí deberías implementar la lógica para obtener el detalle del producto usando el ID
  // Puede ser mediante una llamada a una API o usando datos simulados.

  return (
    <div>
      <h1>Detalles del Producto {id}</h1>
      {/* Renderiza la información del producto aquí */}
    </div>
  );
};

export default ProductDetail;
