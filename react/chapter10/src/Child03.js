import React, { useContext, useState } from "react";
import { testContext } from "./Context";

const Child03 = () => {
  const test = useContext(testContext);
  const { changeInput, state } = test;
  return (
    <div>
      <h4>나 자식 3</h4>
      이름:
      <input
        type="text"
        name="name"
        value={state.inputState.name}
        onChange={changeInput}
      />
      번호:
      <input
        type="text"
        name="phone"
        value={state.inputState.phone}
        onChange={changeInput}
      />
    </div>
  );
};

export default Child03;
