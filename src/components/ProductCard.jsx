import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <article
      style={{
        border: '1px solid white',
        margin: 10,
        padding: 10,
        backgroundColor: 'grey',
      }}
    >
      <h3>{product.title}</h3>
      <img style={{ width: 80 }} src={product.image} alt={product.title} />
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <Link to={`/item/${product.id}`}>Ver detalles</Link>
      <button onClick={() => alert(`Buying ${product.title}`)}>Buy</button>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired, 
  }).isRequired,
};
