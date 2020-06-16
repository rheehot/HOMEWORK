import React, { useState, useRef } from "react";
import "./App.css";
import Todo from "./Todo";

const App = () => {
  const todoInputRef = useRef();
  const [todo, setState] = useState([
    { _id: 0, title: "치킨먹기", active: false },
    { _id: 1, title: "피자먹기", active: false },
    { _id: 2, title: "햄버거먹기", active: false },
  ]);
  const addTodo = () => {
    const newToDoTitle = todoInputRef.current.value;
    const nextId = todo[todo.length - 1]._id + 1;
    const newToDo = {
      _id: nextId,
      title: newToDoTitle,
      active: false,
    };
    // setState([...todo, newToDo]);
    setState(todo.concat(newToDo));
    todoInputRef.current.value = "";
  };

  const inputPress = (e) => {
    if (e.key == "Enter") {
      console.log("enter press here! ");
      addTodo();
    }
  };
  return (
    <div className="App">
      <h2 className="Title">{"오늘의 할 일"}</h2>
      {todo.map((td, i) => (
        <Todo todo={td} idx={i} key={td._id} />
      ))}

      <input
        className="addToDoInput"
        type="text"
        name="addTodo"
        ref={todoInputRef}
        onKeyPress={inputPress}
      />
      <button className="addToDoButton" onClick={addTodo}>
        {"할일 추가"}
      </button>
    </div>
  );
};

export default App;
