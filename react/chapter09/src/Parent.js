// import React, { useState } from "react";
import React, { useState, useReducer } from "react";
import "./App.css";
import Child from "./Child";

// reducer
const reducerAction = {
  getLottoNumber: {
    type: "GET_LOTTO",
  },
};
function reducer(state, action) {
  switch (action.type) {
    case "GET_LOTTO":
      let lottoNumber = generateNumber(state);
      return lottoNumber;
    default:
      return state;
  }
}

function generateNumber(state) {
  let lottoArray = [];
  let count = 0;
  let until = 7;
  while (1) {
    if (count === until) break;
    let pop = parseInt(Math.random() * 45) + 1;
    if (lottoArray.indexOf(pop) < 0) {
      lottoArray.push(pop);
      count++;
    }
  }
  return lottoArray;
}

function Parent() {
  // const [lotto, setLotto] = useState([0, 0, 0, 0, 0, 0]);
  const [lotto, dispatch] = useReducer(reducer, [0, 0, 0, 0, 0, 0]);
  const parentLotto = lotto;
  // const makeLotto = () => {
  //   let lottoArray = [];
  //   let count = 0;
  //   let until = 6;
  //   while (1) {
  //     if (count === until) break;
  //     let pop = parseInt(Math.random() * 45) + 1;
  //     if (lottoArray.indexOf(pop) < 0) {
  //       lottoArray.push(pop);
  //       count++;
  //     }
  //   }
  //   console.log(lottoArray);
  //   setLotto(lottoArray);
  // };
  const makeLotto = () => {
    dispatch(reducerAction.getLottoNumber);
  };
  return (
    <div className="App">
      부모 컴포넌트
      <br />
      <button onClick={makeLotto}>로또 생성기</button>
      <br />
      <h1>
        {parentLotto.map((lo, i) => {
          return i == 5 ? lo : lo + ",";
        })}
      </h1>
      <Child lotto={parentLotto} />
    </div>
  );
}

export default Parent;
