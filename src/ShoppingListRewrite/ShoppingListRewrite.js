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
  const [total, setTotal] = useState(6);

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

  const totalCounter = () => {
    const newItemList = [...itemList];
    const totalQty = newItemList.reduce(
      (prevValue, currentValue) => prevValue + currentValue.qty,
      0
    );
    return totalQty;
    setTotal(totalQty);
  };

  return (
    <div>
      <h1>Shopping List (Updated)</h1>
      <div className="shoppingListContainter">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Add your item..."
          value={inputValue}
        />
        <button onClick={handleAdd}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <ul style={{ textAlign: "left", marginLeft: "35px" }}>
          {itemList.map((i, index) => {
            return (
              <div key={index} style={{ display: "center" }}>
                <>
                  {i.isSelected ? (
                    <>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <span className="completed">
                        {"  "}
                        {i.name}
                      </span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faCircle} />
                      <span>
                        {"  "}
                        {i.name}
                      </span>
                    </>
                  )}
                </>
                <button onClick={() => handleDecrement(index)}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{i.qty}</span>
                <button onClick={() => handleIncrement(index)}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            );
          })}
        </ul>
        <p>Total: {totalCounter()}</p>
      </div>
    </div>
  );
};

export default ShoppingListRewrite;
