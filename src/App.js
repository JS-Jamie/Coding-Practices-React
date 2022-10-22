import React from "react";
import "./App.css";
import Counter from "./Counter/Counter";
import ToDoList from "./ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
      <Counter />
      <ToDoList />
    </div>
  );
}

export default App;
