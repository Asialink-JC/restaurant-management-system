import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        p: 3,
        borderRadius: 2,
        boxShadow: 1,
        bgcolor: "background.paper",
      }}
    >
      <Typography
        variant="h6"
        component="h2"
        sx={{ mb: 2, textAlign: "center" }}
      >
        {currentItem ? "Update" : "Add"} Menu Item
      </Typography>
      <TextField
        label="Category"
        name="category"
        value={item.category}
        onChange={handleChange}
        required
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Name"
        name="name"
        value={item.name}
        onChange={handleChange}
        required
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Options (comma-separated)"
        name="options"
        value={item.options}
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Price"
        name="price"
        type="number"
        value={item.price}
        onChange={handleChange}
        required
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Cost"
        name="cost"
        type="number"
        value={item.cost}
        onChange={handleChange}
        required
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Stock"
        name="stock"
        type="number"
        value={item.stock}
        onChange={handleChange}
        required
        fullWidth
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        {currentItem ? "Update" : "Add"} Item
      </Button>
    </Box>
  );
};

export default MenuItemForm;
