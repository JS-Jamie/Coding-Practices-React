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
    setItemList((currentValue) => {
      return [...currentValue, toDoItem];
    });
    setToDoItem("");
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
          {itemList.map((i, index) => {
            return <li key={index}>{i}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
