export default function CardComponent({ tarea }) {
    return (
      <>
        <article>
          <h3>Tarea: {tarea.nombre}</h3>
          <p>Id de tarea: {tarea.id}</p>
        </article>
      </>
    );
  }
  