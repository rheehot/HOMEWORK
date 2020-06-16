import React, { useReducer } from "react";

const date = new Date();
const initialState = {
  inputState: {
    name: "",
    phone: "",
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        inputState: {
          ...state.inputState,
          [action.name]: action.value,
        },
      };
  }
};
export const testContext = React.createContext(null);
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeInput = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name: name,
      value: value,
    });
  };
  const data = { state, dispatch, changeInput };
  return <testContext.Provider value={data}>{children}</testContext.Provider>;
};

export default Context;
