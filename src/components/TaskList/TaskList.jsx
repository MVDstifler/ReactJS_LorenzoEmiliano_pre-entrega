export default function TaskList ({tareas} ) {
    return (
        <>
        <h2>Lista de tareas pendientes</h2>
        {tareas.map(tarea => <p>{tarea.nommbre}</p>)})
        </>
    )}
const TaskList = () => {
    // Usamos useState para manejar el array de tareas
    const [tasks, setTasks] = useState([
      { id: 1, title: 'Comer', completed: false },
      { id: 2, title: 'Cagar', completed: false },
      { id: 3, title: 'Dormir', completed: false }
    ])}