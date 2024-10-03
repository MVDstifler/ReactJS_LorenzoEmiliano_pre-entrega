import React from 'react';

const ItemDetail = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: '20px auto' }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: '100%', borderRadius: '10px' }} />
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ItemDetail;
