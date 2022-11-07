import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import Counter from "./Counter/Counter";
import ToDoList from "./ToDoList/ToDoList";
import ShoppingList from "./ShoppingList/ShoppingList";
import ShoppingListRewrite from "./ShoppingListRewrite/ShoppingListRewrite";
import SearchFilter from "./SearchFilter/SearchFilter";

function App() {
  return (
    <div className="App">
      <SearchFilter />
      <Counter />
      <ToDoList />
      <ShoppingList />
      <ShoppingListRewrite />
    </div>
  );
}

export default App;
