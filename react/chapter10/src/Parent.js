import React, { useReducer } from "react";
import "./App.css";
import Child01 from "./Child01";
import Context from "./Context";

const Parent = () => {
  return (
    <div className="App">
      <h1>나 부모</h1>

      <Context>
        <Child01 />
      </Context>
    </div>
  );
};

export default Parent;
