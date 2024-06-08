import { useState, useEffect } from "react";
import { ref, onValue, push, update, remove } from "firebase/database";
import { database } from "../firebase/config";

const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const menuItemsRef = ref(database, "menuItems");
    onValue(menuItemsRef, (snapshot) => {
      const items = snapshot.val();
      const menuList = items
        ? Object.keys(items).map((key) => ({ id: key, ...items[key] }))
        : [];
      setMenuItems(menuList);
    });
  }, []);

  const addMenuItem = (item) => {
    const menuItemsRef = ref(database, "menuItems");
    push(menuItemsRef, item);
  };

  const updateMenuItem = (id, updatedItem) => {
    const menuItemRef = ref(database, `menuItems/${id}`);
    update(menuItemRef, updatedItem);
  };

  const deleteMenuItem = (id) => {
    const menuItemRef = ref(database, `menuItems/${id}`);
    remove(menuItemRef);
  };

  return {
    menuItems,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
  };
};

export default useMenuItems;
    