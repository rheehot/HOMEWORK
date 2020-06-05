import React, { Component } from "react";
import ButtonChild01 from "./ButtonChild01";
import ButtonChild02 from "./ButtonChild02";
import Wrapper from "./Wrapper";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <ButtonChild01 title={"보라색 버튼"} color={"purple"} />
        <ButtonChild02 title={"빨간색 버튼"} color={"red"} />
      </Wrapper>
    );
  }
}

export default App;
