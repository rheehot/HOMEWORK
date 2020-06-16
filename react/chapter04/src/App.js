import React from "react";
import "./App.css";

function App() {
  const inputLogin = () => {
    console.log("사용자 아이디 입력중");
  };
  const inputPassword = () => {
    console.log("사용자 비밀번호 입력중");
  };
  const btnLogin = () => {
    console.log("로그인 시도");
  };
  return (
    <div className="wrap">
      <input type="text" placeholder="아이디" onChange={inputLogin} />
      <input type="password" placeholder="비밀번호" onChange={inputPassword} />
      <button type="button" onClick={btnLogin}>
        로그인
      </button>
    </div>
  );
}

export default App;
