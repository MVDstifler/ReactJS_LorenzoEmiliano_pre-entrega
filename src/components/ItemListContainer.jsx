import React from "react";
import { Link } from "react-router-dom"; 


const ItemListContainer = ({ items, greeting }) => {
  return (
    <div>
      <h1>{greeting}</h1>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}> 
            <Link to={`/item/${item.id}`}>{item.name}</Link> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
