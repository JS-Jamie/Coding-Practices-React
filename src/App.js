import React from "react";
import "./App.css";
import Counter from "./Counter/Counter";
import ToDoList from "./ToDoList/ToDoList";
import ShoppingList from "./ShoppingList/ShoppingList";

function App() {
  return (
    <div className="App">
      <Counter />
      <ToDoList />
      <ShoppingList />
    </div>
  );
}

export default App;
