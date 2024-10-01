import CardComponent from "./CardComponent";

export default function TaskList({ tareas }) {
  return (
    <>
      <h2>Lista de tareas pendientes</h2>
      {tareas.length === 0 ? (
        <p>No hay tareas pendientes.</p>
      ) : (
        tareas.map((tarea) => (
          <CardComponent key={tarea.id} tarea={tarea} />
        ))
      )}
    </>
  );
}
