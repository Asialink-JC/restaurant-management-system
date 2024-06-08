import React, { useState, useEffect } from "react";

const MenuItemForm = ({
  addMenuItem,
  updateMenuItem,
  currentItem,
  setCurrentItem,
}) => {
  const [item, setItem] = useState({
    category: "",
    name: "",
    options: "",
    price: "",
    cost: "",
    stock: "",
  });

  useEffect(() => {
    if (currentItem) {
      setItem(currentItem);
    } else {
      setItem({
        category: "",
        name: "",
        options: "",
        price: "",
        cost: "",
        stock: "",
      });
    }
  }, [currentItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentItem) {
      updateMenuItem(currentItem.id, item);
    } else {
      addMenuItem(item);
    }
    setItem({
      category: "",
      name: "",
      options: "",
      price: "",
      cost: "",
      stock: "",
    });
    setCurrentItem(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="category"
        value={item.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        type="text"
        name="name"
        value={item.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="options"
        value={item.options}
        onChange={handleChange}
        placeholder="Options (comma-separated)"
      />
      <input
        type="number"
        name="price"
        value={item.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <input
        type="number"
        name="cost"
        value={item.cost}
        onChange={handleChange}
        placeholder="Cost"
        required
      />
      <input
        type="number"
        name="stock"
        value={item.stock}
        onChange={handleChange}
        placeholder="Stock"
        required
      />
      <button type="submit">{currentItem ? "Update" : "Add"} Item</button>
    </form>
  );
};

export default MenuItemForm;
