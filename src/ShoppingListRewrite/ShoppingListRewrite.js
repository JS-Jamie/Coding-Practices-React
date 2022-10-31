import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const ShoppingListRewrite = () => {
  const [inputValue, setInputValue] = useState("");
  const [itemList, setItemList] = useState([
    { name: "example1", qty: 1, isSelected: false },
    { name: "example2", qty: 2, isSelected: false },
    { name: "example3", qty: 3, isSelected: true },
  ]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    setItemList((currentValue) => {
      return [...currentValue, { name: inputValue, qty: 1, isSelected: false }];
    });
    setInputValue("");
  };

  const handleDecrement = (index) => {
    if (itemList[index].qty > 0) {
      const newItemList = [...itemList];
      newItemList[index].qty = newItemList[index].qty - 1;
      setItemList(newItemList);
    }
  };

  const handleIncrement = (index) => {
    const newItemList = [...itemList];
    newItemList[index].qty = newItemList[index].qty + 1;
    setItemList(newItemList);
  };
  return (
    <div>
      <h1>Shopping List (Updated)</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Add your item..."
        value={inputValue}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {itemList.map((i, index) => {
          return (
            <div key={index} style={{ display: "center" }}>
              <input type="checkbox" />
              {i.name}
              {"   "}
              <button>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  onClick={() => handleDecrement(index)}
                />
              </button>
              <span>{i.qty}</span>
              <button>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  onClick={() => handleIncrement(index)}
                />
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingListRewrite;
