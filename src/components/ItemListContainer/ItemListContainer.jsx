import React from "react";
import Nav from "../Nav/Nav";

const ItemListContainer = ({ items }) => {
    return (
      <div>
        <h2>Item List</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };