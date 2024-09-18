import React from "react";
import Nav from "../Nav/Nav";

const ItemListContainer = ({ items, greeting }) => {
  return (
    <div>
      <h1>{greeting}</h1> {}
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
