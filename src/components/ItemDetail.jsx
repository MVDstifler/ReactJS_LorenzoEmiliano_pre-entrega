import React, { useState } from 'react';

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Lógica para agregar al carrito
  };

  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
