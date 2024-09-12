import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/Cart/Cart'
import CartWidget from './components/CartWidget/cartWidget'
import Menus from './components/Menus/Menus'
import Nav from './components/Nav/Nav'
import Title from './components/Title/Title'
import { useState } from 'react'
import TaskList from './components/TaskList/TaskList'



  // Función para marcar una tarea como completada
  const completeTask = (id) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
            <button onClick={() => completeTask(task.id)}>
              {task.completed ? 'Desmarcar' : 'Completar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header class="header__container">
        <Title title="Montevideo Cars"/>
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
