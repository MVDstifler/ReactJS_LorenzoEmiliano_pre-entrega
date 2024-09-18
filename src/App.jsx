import React, { useState } from 'react'; 
import './App.css';
import Nav from './components/Nav/Nav';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 
import Title from './components/Title/Title'; 
import Cart from './components/Cart/Cart'; 

function App() {
  const [count, setCount] = useState(0);

  const greeting = "Welcome to Montevideo Cars!"; 

  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <>
      <header className="header__container">
        <Title title="Montevideo Cars" />
        <Nav />
        <Cart count={count} /> {5}
      </header>
      <main className="main__container">
        <ItemListContainer items={items} greeting={greeting} /> {Bienvenido}
      </main>
      <footer className="footer__container">
        {'footer content'}
      </footer>
    </>
  );
}

export default App;
