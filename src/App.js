import React, { useState } from "react";
import useMenuItems from "./hooks/useMenuItems";
import MenuItemForm from "./components/MenuItemForm";
import MenuList from "./components/MenuList";
// import "./styles.css";

const App = () => {
  const { menuItems, addMenuItem, updateMenuItem, deleteMenuItem } =
    useMenuItems();
  const [currentItem, setCurrentItem] = useState(null);

  return (
    <div className="app">
      <h1>Restaurant Menu Management</h1>
      <MenuItemForm
        addMenuItem={addMenuItem}
        updateMenuItem={updateMenuItem}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <MenuList
        menuItems={menuItems}
        setCurrentItem={setCurrentItem}
        deleteMenuItem={deleteMenuItem}
      />
    </div>
  );
};

export default App;
