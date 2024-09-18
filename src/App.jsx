import React, { useState } from 'react'; // Asegúrate de importar React
import './App.css';
import Nav from './components/Nav/Nav';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; // Importa ItemListContainer
import Title from './components/Title/Title'; // Asegúrate de importar Title
import Cart from './components/Cart/Cart'; // Asegúrate de importar Cart

function App() {
  const [count, setCount] = useState(0);

  // Define el mensaje de bienvenida
  const greeting = "Welcome to Montevideo Cars!"; 

  // Ejemplo de lista de ítems
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <>
      <header className="header__container">
        <Title title="Montevideo Cars" />
        <Nav />
        <Cart count={count} /> {/* Asegúrate de pasar el valor correcto a Cart */}
      </header>
      <main className="main__container">
        <ItemListContainer items={items} greeting={greeting} /> {/* Pasa greeting aquí */}
      </main>
      <footer className="footer__container">
        {/* Contenido del pie de página */}
      </footer>
    </>
  );
}

export default App;
