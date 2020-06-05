import React from "react";

const Wrapper = ({ children }) => {
  const WrapperStyle = {
    padding: 100,
    margin: 100,
    border: "1px solid #333",
  };
  return (
    <div className="App" style={WrapperStyle}>
      <h2>{"부모 컴포넌트"}</h2>
      {children}
    </div>
  );
};

export default Wrapper;
