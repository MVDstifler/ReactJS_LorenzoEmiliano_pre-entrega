import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Montevideo Cars</Link>
      <Link to="/categories/autos">Autos</Link>
      <Link to="/categories/motos">Motos</Link>
      <Link to="/categories/repuestos">Repuestos</Link>
      <Link to="/cart"><CartWidget /></Link>
    </nav>
  );
};

export default NavBar;
