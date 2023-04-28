import React, { Component } from "react";
import "./App.css";
import HebrewKeyboard from "./components/HebrewKeyboard";
import EnglishKeyboard from "./components/EnglishKeyboard";
import OptionsKeyboard from "./components/OptionsKeyboard";
import SpecialChars from "./components/specialChars";
import EmojiesKeyboard from "./components/EmojiesKeyboard";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // capsLockOn: false,
      underline: false,
      italic: false,
      inputValue: "",
      output: "",
      isBold: false,
      fontSize: "16px",
      fontName: "Arial",
      color: "black",
      alignment: "left",
      undo: "",
    };
  }

  //Style function
  boldUpdate = () => {
    this.setState({ isBold: !this.state.isBold });
  };
  underlineUpdate = () => {
    this.setState({ underline: !this.state.underline });
  };
  italicUpdate = () => {
    this.setState({ italic: !this.state.italic });
  };

  fontSizeUpdate = (event) => {
    this.setState({ fontSize: event.target.value });
  };
  fontNameUpdate = (event) => {
    this.setState({ fontName: event.target.value });
  };
  colorUpdate = (event) => {
    this.setState({ color: event.target.value });
  };

  undoUpdate = () => {
    this.setState({ undo: !this.state.undo });
  };

  alignFullUpdate = () => {
    this.setState({ alignment: "justify" });
  };
  alignCenterUpdate = () => {
    this.setState({ alignment: "center" });
  };
  alignRightUpdate = () => {
    this.setState({ alignment: "right" });
  };
  alignLeftUpdate = () => {
    this.setState({ alignment: "left" });
  };

  //object the hold the fields of the style functions
  setInputValue = (newChar) => {
    let designChar = {
      value: newChar,
      fontSize: this.state.fontSize,
      fontName: this.state.fontName,
      color: this.state.color,
      boldC: this.state.isBold ? "bold" : "",
      underline: this.state.underline ? "underline" : "",
      italic: this.state.italic ? "italic" : "",
      align: this.state.alignment,
      undo: this.state.undo,
    };
    this.setState((prev) => ({ inputValue: [...prev.inputValue, designChar] }));
  };

  handleClick = (char) => {
    this.setInputValue(char);
  };

  // Delete button
  handleDelete = () => {
    this.setState({ inputValue: this.state.inputValue.slice(0, -1) });
  };

  // Space button
  handleSpace = () => {
    this.setInputValue(" ");
  };

  inputButtons = (alphabet) =>
    alphabet.split("").map((char) => (
      <button key={char} onClick={() => this.handleClick(char)}>
        {char}
      </button>
    ));

  render() {
    //object that hold all the style funnctions
    let styleFunctions = {
      boldUpdate: this.boldUpdate,
      underlineUpdate: this.underlineUpdate,
      italicUpdate: this.italicUpdate,
      undoUpdate: this.undoUpdate,
      fontNameUpdate: this.fontNameUpdate,
      fontSizeUpdate: this.fontSizeUpdate,
      alignFullUpdate: this.alignFullUpdate,
      alignCenterUpdate: this.alignCenterUpdate,
      alignRightUpdate: this.alignRightUpdate,
      alignLeftUpdate: this.alignLeftUpdate,
      colorUpdate: this.colorUpdate,
    };

    const { capsLockOn } = this.state;
    // const { inputValue, output, bold } = this.state;

    const numbers = "0123456789";
    const NumKeys = this.inputButtons(numbers);

    let input = [...this.state.inputValue];
    return (
      <div className="App">
        <div className="card">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          />

          <div className="container">
            <OptionsKeyboard styleFunctionsProp={styleFunctions} />
            <div id="text-input" style={{ textAlign: this.state.alignment }}>
              {input.map((char) => (
                <span
                  style={{
                    fontWeight: `${char.boldC}`,
                    textDecoration: `${char.underline}`,
                    fontStyle: `${char.italic}`,
                    fontSize: `${char.fontSize}px`,
                    fontFamily: `${char.fontName}`,
                    color: `${char.color}`,
                  }}
                >
                  {char.value}
                </span>
              ))}
            </div>

            {/* keyboard */}
            <div className="KeyboardInputs">
              <button
                onClick={() => {
                  const englishKeyboard =
                    document.querySelector(".EngKeyboard");
                  const hebrewKeyboard = document.querySelector(".HebKeyboard");
                  hebrewKeyboard.style.visibility = "visible";
                  englishKeyboard.style.visibility = "collapse";
                }}
              >
                Hebrew
              </button>
              <button
                onClick={() => {
                  const englishKeyboard =
                    document.querySelector(".EngKeyboard");
                  const hebrewKeyboard = document.querySelector(".HebKeyboard");
                  englishKeyboard.style.visibility = "visible";
                  hebrewKeyboard.style.visibility = "collapse";
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
              <button
                onClick={() => {
                  const specialChars = document.querySelector(".SpecialChars");
                  specialChars.style.visibility =
                    specialChars.style.visibility === "collapse"
                      ? "visible"
                      : "collapse";
                }}
              >
                Specials
              </button>
              <button
                onClick={() => {
                  const emojies = document.querySelector(".EmojiesKeyboard");
                  emojies.style.visibility =
                    emojies.style.visibility === "collapse"
                      ? "visible"
                      : "collapse";
                }}
              >
                Emojies
              </button>
            </div>

            <div className="KeyboardOptions">
              <button
                onClick={() => {
                  this.setState({ capsLockOn: !capsLockOn });
                }}
              >
                Caps lock
              </button>
              <button className="space" onClick={this.handleSpace}>
                Space
              </button>
              <button onClick={this.handleDelete}>Delete</button>
            </div>

            <div className="NumbersKeyboard" style={{ visibility: "visible" }}>
              {NumKeys}
            </div>

            <EnglishKeyboard
              capsLockOn={this.state.capsLockOn}
              inputButtons={this.inputButtons}
            />
            <HebrewKeyboard func={this.inputButtons} />
            <SpecialChars input={this.inputButtons} />
            <EmojiesKeyboard setInputValue={this.setInputValue} />
          </div>
        </div>
      </div>
    );
  }
}
