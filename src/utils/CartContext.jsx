import React, { useEffect, useState } from "react";

const CartContext = React.createContext();

const CartStore = ({ children }) => {
  const [items, setItems] = useState([]);
  const [sumItemsPrice, setSumItemsPrice] = useState("");

  const addItem = (item) => {
    // setItems([...items, item]);

    const existingItemIndex = items.findIndex((i) => i.item === item.item);

    if (existingItemIndex !== -1) {
      const updatedIems = [...items];
      updatedIems[existingItemIndex].qty += item.qty;
      setItems(updatedIems);
    } else {
      setItems([...items, item]);
    }
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const setItemsPrice = () => {
    const total = items.reduce(
      (accumulator, item) => accumulator + (item.qty * item.price),
      0
    );
    setSumItemsPrice(total);
  };

  function clearCart() {
    setItems([]);
  }

  useEffect(() => {
    setItemsPrice();
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        addItem,
        sumItemsPrice,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartStore };
