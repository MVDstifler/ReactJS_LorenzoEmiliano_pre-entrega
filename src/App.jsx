import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/Cart/Cart'
import Nav from './components/Nav/Nav'
import Title from './components/Title/Title'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header class="header__container">
        <Title title="GamePlayers"/>
        <Nav />
        <Cart count='2'/>
    </header>
    <main class="main__container">

    </main>
    <footer class="footer__container">

    </footer>
    </>
  )
}

export default App
