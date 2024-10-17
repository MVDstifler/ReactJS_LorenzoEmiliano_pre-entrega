import React, { useEffect, useState } from 'react';
import ItemList from './itemList';
import { useParams } from 'react-router-dom';
import { fetchItems } from '../firebase/fetchItems';  

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();  
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchItems(categoryId)
      .then((fetchedItems) => {
        setItems(fetchedItems);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
