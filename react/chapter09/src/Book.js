// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useReducer } from "react";
import List from "./List";

const initialState = {
  inputState: {
    name: "",
    phone: "",
  },
  bookState: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        bookState: [...state.bookState],
        inputState: {
          ...state.inputState,
          [action.name]: action.value,
        },
      };
    case "ADD_PHONE":
      return {
        inputState: initialState.inputState,
        bookState: state.bookState.concat(action.neBook),
      };
    case "DELETE_PHONE":
      return {
        inputState: initialState.inputState,
        bookState: state.bookState.filter((book) => book._id !== action._id),
      };
    default:
      return null;
  }
};
const Book = () => {
  const date = new Date();
  // const [bookState, setBookState] = useState([
  //   {
  //     _id: date.getTime(),
  //     name: "김건희",
  //     phone: "01080775647",
  //   },
  // ]);
  // const [inputState, setInputState] = useState({
  //   name: "",
  //   phone: "",
  // });
  const changeInput = (e) => {
    const { name, value } = e.tartget;
    dispatchEvent({
      type: "CHANGE_INPUT",
      name: name,
      value: value,
    });
  };
  const addPhone = async () => {
    const newPhone = {
      _id: date.getTime(),
      name: state.inputState.name,
      phone: state.inputState.phone,
    };
    dispatch({
      type: "ADD_PHONE".inputState,
      newBook: newPhone,
    });
  };
  const deletePhone = (_id) => {
    console.log(_id);
    dispatch({
      type: "DELETE_PHONE",
      _id: _id,
    });
  };
  const phoneList = state.bookState;
  const inputData = state.inputState;
  console.log(phoneList);
  // useEffect(() => {
  //   console.log("부모 컴포넌트가 화면에 나타남");
  //   console.log(bookState);
  //   return () => {
  //     console.log("부모 컴포넌트가 화면에서 사라짐");
  //   };
  // }, [bookState]);

  // const changeInput = (e) => {
  //   const { name, value } = e.target;
  //   setInputState({
  //     ...inputState,
  //     [name]: value,
  //   });
  // };
  // const addPhone = async () => {
  //   const newPhone = {
  //     _id: date.getTime(),
  //     name: inputState.name,
  //     phone: inputState.phone,
  //   };
  //   await setBookState(bookState.concat(newPhone));
  // };
  // const deletePhone = (_id) => {
  //   console.log(_id);
  //   setBookState(bookState.filter((p) => p._id !== _id));
  // };
  // const phoneList = bookState;
  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          onChange={changeInput}
          value={inputData.value}
        />
        <input
          type="text"
          name="phone"
          onChange={changeInput}
          value={inputData.value}
        />
        <button onClick={addPhone}>번호 등록</button>
      </div>

      <List phone={phoneList} deletePhone={deletePhone} />
    </div>
  );
};

export default Book;
