import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'; 
import { fetchItemById } from './api'; 

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await fetchItemById(id); 
        setItem(data);
      } catch (error) {
        setError('No se pudo cargar el ítem');
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {}
      <ItemDetail product={item} />
    </div>
  );
};

export default ItemDetailContainer;
