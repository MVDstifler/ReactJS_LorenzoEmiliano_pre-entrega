import CardComponent from "./CardComponent";

export default function TaskList({ tareas }) {
  return (
    <>
      <h2>Lista de tareas pendientes</h2>
      {tareas.map((tarea) => (
        <CardComponent key={tarea.id} tarea={tarea}/>
      ))}
    </>
  );
}
