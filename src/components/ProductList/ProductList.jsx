import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
      .finally(() => console.log('Finalizo la peticion'));
  }, []);

  return (
    <>
      <section>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}
