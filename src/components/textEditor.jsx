import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capsLockOn: false,
    };
  }

  handleClick = (char) => {
    this.props.setInputValue(this.props.inputValue + char);
  };

  handleCapsLockClick = () => {
    this.setState({ capsLockOn: !this.state.capsLockOn });
  };

  render() {
    const { capsLockOn, handleClick, handleCapsLockClick } = this;

    const EngAlphabet1 = capsLockOn ? "QWERTYUIOP" : "qwertyuiop";
    const EngAlphabet2 = capsLockOn ? "ASDFGHJKL" : "asdfghjkl";
    const EngAlphabet3 = capsLockOn ? "ZXCVBNM" : "zxcvbnm";
    const HebAlphabet1 = "קראטוןםפ";
    const HebAlphabet2 = "שדגכעיחלךף";
    const HebAlphabet3 = "זסבהנמצתץ";
    const numbers = "0123456789";

    const NumKeys = numbers.split("").map((char) => (
      <button key={char} onClick={() => handleClick(char)}>
        {char}
      </button>
    ));
    const EngKeys1 = EngAlphabet1.split("").map((char) => (
      <button key={char} onClick={() => handleClick(char)}>
        {char}
      </button>
    ));
    const EngKeys2 = EngAlphabet2.split("").map((char) => (
      <button key={char} onClick={() => handleClick(char)}>
        {char}
      </button>
    ));
    const EngKeys3 = EngAlphabet3.split("").map((char) => (
      <button key={char} onClick={() => handleClick(char)}>
        {char}
      </button>
    ));
    const HebKeys1 = HebAlphabet1.split("").map((char) => (
      <button key={char} onClick={() => handleClick(char)}>
        {char}
      </button>
    ));
    const HebKeys2 = HebAlphabet2.split("").map((char) => (
      <button key={char} onClick={() => handleClick(char)}>
        {char}
      </button>
    ));
    const HebKeys3 = HebAlphabet3.split("").map((char) => (
      <button key={char} onClick={() => handleClick(char)}>
        {char}
      </button>
    ));

    return (
      <div className="App">
        <h1>Text editor2 - classes</h1>
        <div className="card">
          <input type="text" value={this.props.inputValue} />

          <div className="KeyboardInputs">
            <button
              onClick={() => {
                const hebKeyboard = document.querySelector(".HebKeyboard");
                hebKeyboard.style.visibility =
                  hebKeyboard.style.visibility === "collapse"
                    ? "visible"
                    : "collapse";
              }}
            >
              Hebrew
            </button>
            <button
              onClick={() => {
                const engKeyboard = document.querySelector(".EngKeyboard");
                engKeyboard.style.visibility =
                  engKeyboard.style.visibility === "collapse"
                    ? "visible"
                    : "collapse";
              }}
            >
              English
            </button>
            <button
              onClick={() => {
                const numbersKeyboard =
                  document.querySelector(".NumbersKeyboard");
                numbersKeyboard.style.visibility =
                  numbersKeyboard.style.visibility === "collapse"
                    ? "visible"
                    : "collapse";
              }}
            >
              Numbers
            </button>
            <button onClick={handleCapsLockClick}>
              {this.state.capsLockOn ? "Caps Lock On" : "Caps Lock Off"}
            </button>
          </div>

          <div className="HebKeyboard" style={{ visibility: "collapse" }}>
            {HebKeys1}
            {HebKeys2}
            {HebKeys3}
          </div>
          <div className="EngKeyboard" style={{ visibility: "collapse" }}>
            {EngKeys1}
            {EngKeys2}
            {EngKeys3}
          </div>
          <div className="NumbersKeyboard" style={{ visibility: "collapse" }}>
            {NumKeys}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
