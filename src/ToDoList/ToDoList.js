import React, { useState } from "react";

/*1.Write and add a to-do item.
2. Show a to-do list
3. Cross out a to-do-list item
4. Remove a to-do item from the list*/

const ToDoList = () => {
  const [toDoItem, setToDoItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const onChangeHandler = (e) => {
    setToDoItem(e.target.value);
  };

  const onClickHandler = () => {
    if (toDoItem.length > 0) {
      setItemList((currentValue) => {
        return [...currentValue, toDoItem];
      });
      setToDoItem("");
    }
  };

  const crossoutHandler = (e) => {
    if (e.target.tagName === "LI") {
      if (e.target.style.textDecoration) {
        e.target.style.removeProperty("text-decoration");
      } else {
        e.target.style.setProperty("text-decoration", "line-through");
      }
    }
  };

  return (
    <div>
      <h1>My To-do List</h1>

      <input
        value={toDoItem}
        onChange={onChangeHandler}
        placeholder="Write your to-do item here"
      />
      <button onClick={onClickHandler}>Add</button>
      <div>
        <ul>
          {itemList.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginLeft: "100px",
                }}
              >
                <li onClick={crossoutHandler}>
                  {item}
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => {
                      setItemList((currentList) => {
                        return currentList.filter((eachItem) => {
                          return eachItem !== item;
                          /*item = the one that user chose to delete 
                          (by clicking its delete button) */
                        });
                      });
                    }}
                  >
                    Delete
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
