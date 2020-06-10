import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TitleComponent from "./TitleComponent";

class AppUnControlled extends Component {
  inputRef = React.createRef();
  state = {
    title: "",
  };
  setTitle = () => {
    this.setState({
      title: this.inputRef.current.value,
    });
  };
  render() {
    const { title } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{title}</p>
          <TitleComponent ref={this.inputRef} />
          <button onClick={this.setTitle}>{"버튼"}</button>
        </header>
      </div>
    );
  }
}

export default AppUnControlled;
