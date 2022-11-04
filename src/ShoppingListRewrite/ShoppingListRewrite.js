import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const ShoppingListRewrite = () => {
  const [inputValue, setInputValue] = useState("");
  const [itemList, setItemList] = useState([
    { name: "example1", qty: 1, isSelected: false },
    { name: "example2", qty: 2, isSelected: false },
    { name: "example3", qty: 3, isSelected: true },
  ]);
  const [total, setTotal] = useState(6);

  useEffect(() => {
    totalCounter();
  }, [itemList]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    if (inputValue.length > 0) {
      setItemList((currentValue) => {
        return [
          ...currentValue,
          { name: inputValue, qty: 1, isSelected: false },
        ];
      });
      setInputValue("");
    }
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

  const handleToggle = (index) => {
    const newItemList = [...itemList];
    newItemList[index].isSelected = !newItemList[index].isSelected;
    setItemList(newItemList);
  };

  const totalCounter = () => {
    const newItemList = [...itemList];
    const totalQty = newItemList.reduce(
      (prevValue, currentValue) => prevValue + currentValue.qty,
      0
    );
    setTotal(totalQty);
  };

  return (
    <div className="shoppingListApp">
      <h1>Shopping List (Updated)</h1>
      <div className="shoppingListContainter">
        <div className="newItemBox">
          <input
            className="newItemInput"
            onChange={handleChange}
            type="text"
            placeholder="Add your item..."
            value={inputValue}
          />
          <FontAwesomeIcon icon={faPlus} onClick={handleAdd} />
        </div>
        <div className="itemList">
          <ul style={{ padding: 0 }}>
            {itemList.map((i, index) => {
              return (
                <div>
                  <div className="itemListContainer" key={index}>
                    <span
                      className="itemName"
                      onClick={() => handleToggle(index)}
                    >
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
                    </span>

                    <span className="qty">
                      <button
                        className="shoppingButton"
                        onClick={() => {
                          handleDecrement(index);
                          totalCounter();
                        }}
                      >
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </button>
                      <span>{i.qty}</span>
                      <button
                        className="shoppingButton"
                        onClick={() => {
                          handleIncrement(index);
                          totalCounter();
                        }}
                      >
                        <FontAwesomeIcon icon={faChevronRight} />
                      </button>
                    </span>
                    <span className="trashCan">
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        onClick={() => {
                          setItemList((currentList) => {
                            return currentList.filter((eachItem) => {
                              return eachItem !== i;
                            });
                          });
                        }}
                      />
                    </span>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
        <p className="total">Total: {total}</p>
      </div>
    </div>
  );
};

export default ShoppingListRewrite;
