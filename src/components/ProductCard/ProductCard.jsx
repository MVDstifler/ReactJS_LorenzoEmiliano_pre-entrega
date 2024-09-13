export default function ProductCard({ product }) {
    return (
      <>
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
          <button>Buy</button>
        </article>
      </>
    );
  }
  