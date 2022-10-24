//Rewrite todo list app, just for practice.

import React, { useState } from "react";

//  1. input area and an add button to add a todo item
//  2. todo item list
//  3. cross out an item from list
//  4. delete item from list

const todolistRewrite = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const changeHandler = (e) => {
    setTodoItem(e.target.value);
  };

  const addHandler = () => {
    if (todoItem.length > 0) {
      setTodoList((currnetValue) => {
        return [...currnetValue, todoItem];
      });
      setTodoItem("");
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
      <h1>My Todo List</h1>
      <input
        type="text"
        placeholder="Write your todo item here..."
        value={todoItem}
        onChange={changeHandler}
      />
      <button onClick={addHandler}>Add</button>
      <ul>
        {todoList.map((item, index) => {
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
                  onClick={() => {
                    setTodoList((currentList) => {
                      return currentList.filter((eachItem) => {
                        return eachItem !== item;
                      });
                    });
                  }}
                >
                  delete
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default todolistRewrite;
