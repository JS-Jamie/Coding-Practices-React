import React from "react";
import "./App.css";
import Counter from "./Counter/Counter";
import ToDoList from "./ToDoList/ToDoList";
import ShoppingList from "./ShoppingList/ShoppingList";
import ShoppingListRewrite from "./ShoppingListRewrite/ShoppingListRewrite";

function App() {
  return (
    <div className="App">
      <Counter />
      <ToDoList />
      <ShoppingList />
      <ShoppingListRewrite />
    </div>
  );
}

export default App;
