import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import './CartWidget.css'; // Asegúrate de que la ruta sea correcta

const CartWidget = ({ cartCount }) => {
  return (
    <div className="cart-widget" aria-label="Cart">
      <FaShoppingCart size={24} />
      {cartCount > 0 && (
        <span className="cart-count">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
