import React from "react";

const MenuItem = ({ item, setCurrentItem, deleteMenuItem }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Category: {item.category}</p>
      <p>Options: {item.options}</p>
      <p>Price: ${item.price}</p>
      <p>Cost: ${item.cost}</p>
      <p>Stock: {item.stock}</p>
      <button onClick={() => setCurrentItem(item)}>Edit</button>
      <button onClick={() => deleteMenuItem(item.id)}>Delete</button>
    </div>
  );
};

export default MenuItem;
