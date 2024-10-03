import React from 'react';
import { Link } from 'react-router-dom'; 
import CartWidget from './CartWidget'; 
import Menus from './Menus';

export default function Navbar() {
  const cartCount = 5; 

  return (
<nav className="header__container--nav">
  <ul>
    <li><Link to="/" className="brand">Montevideo Cars</Link></li>
    <li><Link to="/"><Menus option="Inicio" /></Link></li>
    <li><Link to="/category/autos"><Menus option="Autos" /></Link></li>
    <li><Link to="/category/motos"><Menus option="Motos" /></Link></li>
    <li><Link to="/category/repuestos"><Menus option="Repuestos" /></Link></li>
    <li><Link to="/asesoramiento"><Menus option="Asesoramiento" /></Link></li>
    <li><Link to="/contacto"><Menus option="Contacto" /></Link></li>

  </ul>
  <CartWidget cartCount={cartCount} />
</nav>

  );
}
