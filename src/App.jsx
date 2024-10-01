import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ItemListContainer from './components/ItemListContainer'; 
import Title from './components/Title'; // Ajuste aquí
import Cart from './components/Cart';  
import Autos from './components/Autos'; // Asegúrate de importar los componentes que faltan
import Motos from './components/Motos';
import Repuestos from './components/Repuestos';
import Asesoramiento from './components/Asesoramiento';
import Contacto from './components/Contacto';

function App() {
  const [count, setCount] = useState(0);

  const greeting = "Welcome to Montevideo Cars!"; 
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <Router>
      <header className="header__container">
        <Title title="Montevideo Cars" />
        <Nav />
        <Cart count={count} />
      </header>

      <main className="main__container">
        <Routes>
          <Route path="/" element={<ItemListContainer items={items} greeting={greeting} />} />
          <Route path="/autos" element={<Autos />} />
          <Route path="/motos" element={<Motos />} />
          <Route path="/repuestos" element={<Repuestos />} />
          <Route path="/asesoramiento" element={<Asesoramiento />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <footer className="footer__container">
        Footer content
      </footer>
    </Router>
  );
}

export default App;
