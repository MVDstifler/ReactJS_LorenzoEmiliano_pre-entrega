import React, { useState } from 'react';

const Checkout = ({ cart }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    confirmEmail: '',
  });

  const handleSubmit = () => {
    // Lógica para crear orden en Firebase
  };

  return (
    <div>
      <h2>Resumen de compra</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
        {/* Más campos para apellido, teléfono, correo */}
        <button type="submit">Realizar compra</button>
      </form>
    </div>
  );
};

export default Checkout;
