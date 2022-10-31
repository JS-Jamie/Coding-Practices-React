import React from "react";

const ItemCounter = ({
  qty,
  totalCounter,
  shoppingList,
  setShoppingList,
  index,
}) => {
  const decrementHandler = (index) => {
    if (qty > 0) {
      const newShoppingList = [...shoppingList];
      newShoppingList[index].qty = newShoppingList[index].qty - 1;

      setShoppingList(newShoppingList);
      totalCounter();
    }
  };

  const incrementHandler = (index) => {
    const newShoppingList = [...shoppingList];
    newShoppingList[index].qty = newShoppingList[index].qty + 1;
    setShoppingList(newShoppingList);
    totalCounter();
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <button onClick={() => decrementHandler(index)}>&lt;</button>
      <p>{qty}</p>
      <button onClick={() => incrementHandler(index)}>&gt;</button>
    </div>
  );
};

export default ItemCounter;
