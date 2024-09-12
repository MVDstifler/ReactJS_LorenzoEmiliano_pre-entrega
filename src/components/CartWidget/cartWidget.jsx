import React from "react";
import Nav from "../Nav/Nav";

import { FaShoppingCart } from 'react-icons/fa'; // Font Awesome shopping cart icon

const CartWidget = ({ cartCount }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <FaShoppingCart size={24} />
      {cartCount > 0 && (
        <span
          style={{
            marginLeft: '8px',
            backgroundColor: '#ff6347',
            color: 'white',
            borderRadius: '50%',
            padding: '4px 8px',
            fontSize: '12px',
          }}
        >
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
