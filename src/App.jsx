import { useState } from "react";
import React, { Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const EngAlphabet1 = "qwertyuiop";
  const EngAlphabet2 = "asdfghjkl";
  const EngAlphabet3 = "zxcvbnm";
  const HebAlphabet1 = "קראטוןםפ";
  const HebAlphabet2 = "שדגכעיחלךף";
  const HebAlphabet3 = "זסבהנמצתץ";

  function handleClick(char) {
    // Update the input value with the clicked character
    //this.setState({ inputValue: this.state.inputValue + char });
    setInputValue(inputValue + char);
  }

  // const handleClick = (char) => {
  //   // Update the input value with the clicked character
  //   this.setState({ inputValue: this.state.inputValue + char });
  // };

  const EngKeys1 = EngAlphabet1.split("").map((char) => (
    <button key={char} onClick={() => this.handleClick(char)}>
      {char}
    </button>
  ));
  const EngKeys2 = EngAlphabet2.split("").map((char) => (
    <button key={char} onClick={() => this.handleClick(char)}>
      {char}
    </button>
  ));
  const EngKeys3 = EngAlphabet3.split("").map((char) => (
    <button key={char} onClick={() => this.handleClick(char)}>
      {char}
    </button>
  ));
  const HebKeys1 = HebAlphabet1.split("").map((char) => (
    <button key={char} onClick={() => this.handleClick(char)}>
      {char}
    </button>
  ));
  const HebKeys2 = HebAlphabet2.split("").map((char) => (
    <button key={char} onClick={() => this.handleClick(char)}>
      {char}
    </button>
  ));
  const HebKeys3 = HebAlphabet3.split("").map((char) => (
    <button key={char} onClick={() => this.handleClick(char)}>
      {char}
    </button>
  ));

  return (
    <div className="App">
      <h1>Text editor :)</h1>
      <div className="card">
        <input type="text" value={inputValue} />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>{EngKeys1}</div>
        <div>{EngKeys2}</div>
        <div>{EngKeys3}</div>
        <div>{HebKeys1}</div>
        <div>{HebKeys2}</div>
        <div>{HebKeys3}</div>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
