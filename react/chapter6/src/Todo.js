import React from "react";
import "./Todo.css";

const Todo = ({ todo, idx }) => {
  return (
    <div>
      <h3>
        {idx + 1}
        {":  "}
        {todo.title}
        {"   "}
        {todo.active === false ? (
          <span className={"active"}>{"안함"}</span>
        ) : (
          <span className={"inactive"}>{"함"}</span>
        )}
        <button className={"innerButton"}>check</button>
        <button className={"activeButton"}>X</button>
      </h3>
    </div>
  );
};

export default Todo;
