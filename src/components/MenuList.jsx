import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ menuItems, setCurrentItem, deleteMenuItem }) => {
  
  return (
    <div>
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          setCurrentItem={setCurrentItem}
          deleteMenuItem={deleteMenuItem}
        />
      ))}
    </div>
  );
};

export default MenuList;
