import React from 'react';
import { Link } from 'react-router-dom'; 
import CartWidget from '../CartWidget/cartWidget';
import Menus from '../Menus/Menus';

export default function Navbar() {
  const cartCount = 5; 

  return (
    <nav className="header__container--nav">
      <ul>
        <li><Link to="/"><Menus option="Inicio" /></Link></li>
        <li><Link to="/autos"><Menus option="Autos" /></Link></li>
        <li><Link to="/motos"><Menus option="Motos" /></Link></li>
        <li><Link to="/repuestos"><Menus option="Repuestos" /></Link></li>
        <li><Link to="/asesoramiento"><Menus option="Asesoramiento" /></Link></li>
        <li><Link to="/contacto"><Menus option="Contacto" /></Link></li>
      </ul>
      <CartWidget cartCount={cartCount} />
    </nav>
  );
}
