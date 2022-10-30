import React, { useState, useEffect } from "react";
import ItemCounter from "./components/ItemCounter";

const ShoppingList = () => {
  const [inputValue, setInputValue] = useState("");
  const [shoppingList, setShoppingList] = useState([
    { itemName: "item1", qty: 2, isSelected: false },
    { itemName: "item2", qty: 4, isSelected: true },
    { itemName: "item3", qty: 6, isSelected: false },
  ]);

  const [total, setTotal] = useState(() => {
    const qtyArray = shoppingList.map((i) => {
      return i.qty;
    });
    let qtySum = 0;
    for (let i = 0; i < qtyArray.length; i++) {
      qtySum += qtyArray[i];
    }
    return qtySum;
  });

  useEffect(() => {
    totalCounter();
  }, [shoppingList]);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addHandler = () => {
    if (inputValue.length > 0) {
      setShoppingList((currentValue) => {
        return [
          ...currentValue,
          { itemName: inputValue, qty: 1, isSelected: false },
        ];
      });
      setInputValue("");
      totalCounter();
    }
  };

  const toggleComplete = (index) => {
    const newShoppingList = [...shoppingList];
    newShoppingList[index].isSelected = !newShoppingList[index].isSelected;
    setShoppingList(newShoppingList);
  };

  const totalCounter = () => {
    const qtyList = shoppingList.map((i) => {
      return i.qty;
    });
    let qtySum = 0;
    for (let i = 0; i < qtyList.length; i++) {
      qtySum += qtyList[i];
    }
    setTotal(qtySum);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <input
        onChange={changeHandler}
        placeholder="Add an item..."
        value={inputValue}
      />
      <button onClick={addHandler}>+</button>

      <ul>
        {shoppingList.map((i, index) => {
          return (
            <div key={index} style={{ display: "flex", flexDirection: "row" }}>
              <li
                onClick={() => {
                  toggleComplete(index);
                }}
                id={index}
                style={{
                  textDecoration:
                    i.isSelected === true ? "line-through" : "none",
                }}
              >
                <input type="checkbox" checked={i.isSelected} />
                {i.itemName}
              </li>
              <ItemCounter
                qty={i.qty}
                totalCounter={totalCounter}
                shoppingList={shoppingList}
                setShoppingList={setShoppingList}
                index={index}
              />
            </div>
          );
        })}
      </ul>

      <p>Total: {total}</p>
    </div>
  );
};

export default ShoppingList;
