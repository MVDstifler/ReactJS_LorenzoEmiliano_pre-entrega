import React from 'react';
import CartWidget from '../CartWidget/cartWidget';
import Menus from '../Menus/Menus';

export default function Navbar() {
  const cartCount = 5; 

  return (
    <nav className="header__container--nav">
      <ul>
        <li><Menus option="Inicio" /></li>
        <li><Menus option="Autos" /></li>
        <li><Menus option="Motos" /></li>
        <li><Menus option="Repuestos" /></li>
        <li><Menus option="Asesoramiento" /></li>
        <li><Menus option="Contacto" /></li>
      </ul>
      <CartWidget cartCount={cartCount} /> {/* Añade el CartWidget aquí */}
    </nav>
  );
}
