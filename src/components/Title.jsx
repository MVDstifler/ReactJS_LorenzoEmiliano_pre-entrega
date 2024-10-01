import PropTypes from 'prop-types'; // Importa PropTypes

export default function Title({ title }) {
  return (
    <div className="header__container--title"> {/* Cambiado a className */}
      <h1>{title}</h1>
    </div>
  );
}

// Ejemplo de validaciones de PropTypes
Title.propTypes = {
  title: PropTypes.string.isRequired, // Asegúrate de que sea un string
};
