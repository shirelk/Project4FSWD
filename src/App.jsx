import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // capsLockOn: false,
      bold: false,
      underline: false,
      inputValue: "",
      output: "",
    };
  }

  setInputValue = (inputValue) => {
    this.setState({ inputValue });
  };

  setOutput = (output) => {
    this.setState({ output });
  };

  handleClick = (char) => {
    this.setInputValue(this.state.inputValue + char);
  };

  // Delete button
  handleDelete = () => {
    this.setInputValue(this.state.inputValue.slice(0, -1));
  };

  // Space button
  handleSpace = () => {
    this.setInputValue(this.state.inputValue + " ");
  };

  inputButtons = (alphabet) =>
    alphabet.split("").map((char) => (
      <button key={char} onClick={() => this.handleClick(char)}>
        {char}
      </button>
    ));
  
    

  render() {
    const { capsLockOn } = this.state;
    //const { inputValue } = this.props;
    const { inputValue, output, bold } = this.state;
    // const { inputValue, output } = this.state;
    const EngAlphabet1 = capsLockOn ? "QWERTYUIOP" : "qwertyuiop";
    const EngAlphabet2 = capsLockOn ? "ASDFGHJKL" : "asdfghjkl";
    const EngAlphabet3 = capsLockOn ? "ZXCVBNM" : "zxcvbnm";
    const HebAlphabet1 = "קראטוןםפ";
    const HebAlphabet2 = "שדגכעיחלךף";
    const HebAlphabet3 = "זסבהנמצתץ";
    const numbers = "0123456789";
    // const emojy1 = "😀😁😂🤣😃😄😅😆😉😊";
    // const emojy2 = "😋😎😍😘🥰😗😙🥲😚☺️";
    const specials1 = "!@#$%^&*()-_=+";
    const specials2 = "/'[]{};:?.,";

    const NumKeys = this.inputButtons(numbers);
    const EngKeys1 = this.inputButtons(EngAlphabet1);
    const EngKeys2 = this.inputButtons(EngAlphabet2);
    const EngKeys3 = this.inputButtons(EngAlphabet3);
    const HebKeys1 = this.inputButtons(HebAlphabet1);
    const HebKeys2 = this.inputButtons(HebAlphabet2);
    const HebKeys3 = this.inputButtons(HebAlphabet3);
    //const emojyKeys1 = this.inputButtons(emojy1);
    const hebKeyboard = document.querySelector(".HebKeyboard");
    const engKeyboard = document.querySelector(".EngKeyboard");
  
    return (
      <div className="App">
        {/* <h1>Text editor :)</h1> */}
        <div className="card">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
          {/* <textarea className="container" value={inputValue} /> */}

        <div class="container">
          <div class="options">
                    {/* fontAwesomes icons */}
                {/* Text format */}
                <button id="bold" className="option-button format"> <i class="fa-solid fa-bold"></i></button>
                <button id="italic" className="option-button format"> <i class="fa-solid fa-italic"></i></button>
                <button id="underline" className="option-button format"><i class="fa-solid fa-underline"></i></button>
                <button id="strikethrough" class="option-button format"><i class="fa-solid fa-strikethrough"></i></button>
                <button id="superscript" class="option-button script"><i class="fa-solid fa-superscript"></i></button>
                <button id="subscript" class="option-button script"><i class="fa-solid fa-subscript"></i></button>

              {/*List style*/} 
              <button id="insertOrderedList" class="option-button">
                <div class="fa-solid fa-list-ol"></div>
              </button>
              <button id="insertUnorderedList" class="option-button"><i class="fa-solid fa-list"></i></button>
              
              { /*Undo-Redo*/}
              <button id="uno" class="option-button"><i class="fa-solid fa-rotate-left"></i></button>
              <button id="redo" class="option-button"><i class="fa-solid fa-rotate-right"></i></button>

              {/* Alignment */}
              <button id="justigyLeft" class="option-button align"><i class=" fa-solid fa-align-left"></i></button>
              <button id="justigyRight" class="option-button align"><i class=" fa-solid fa-align-right"></i></button>
              <button id="justigyLeft" class="option-button align"><i class=" fa-solid fa-align-center"></i></button>
              <button id="justigyFull" class="option-button align"><i class=" fa-solid fa-align-justify"></i></button>
              <button id="indent" className="option-button spacing"><i class="fa-solid fa-indent"></i></button>
              <button id="outdent" className="option-button spacing"><i class="fa-solid fa-outdent"></i></button>

              {/* Headings */}
              <select id="formatBlock" class="adv-option-button">
                <option value="H1">H1</option>
                <option value="H2">H2</option>
                <option value="H3">H3</option>
                <option value="H4">H4</option>
                <option value="H5">H5</option>
                <option value="H6">H6</option>
              </select>

              {/* Font */}
              <select id="fontName" class="adv-option-button"></select>
              <select id="fontSize" class="adv-option-button"></select>

              {/* Color */}
              <div class="input-wrapper">
                <input type="color" id="foreColor" class="adv-option-button"></input>
                <label for="foreColor">Font Color</label>
              </div>
              <div class="input-wrapper">
                <input type="color" id="backColor" class="adv-option-button"></input>
                <label for="backColor">Hightlight Color</label>
              </div>
            </div>
          <div id="text-input" contentEditable="true"></div>
          <script src="script.js"></script>
        </div>

          {/* keyboard */}
          <div className="KeyboardInputs">
            <button
              onClick={() => {
                hebKeyboard.style.visibility = "visible";
                engKeyboard.style.visibility = "collapse";
              }}
            >
              Hebrew
            </button>
            <button
              onClick={() => {
                hebKeyboard.style.visibility = "collapse";
                engKeyboard.style.visibility = "visible";
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
          <div className="EngKeyboard" style={{ visibility: "visible" }}>
            <div>{EngKeys1}</div>
            <div>{EngKeys2}</div>
            <div>{EngKeys3}</div>
          </div>
          <div className="HebKeyboard" style={{ visibility: "visible" }}>
            <div>{HebKeys1}</div>
            <div>{HebKeys2}</div>
            <div>{HebKeys3}</div>
          </div>
          {/* <div className="EmojyKeyboard" style={{ visibility: "visible" }}>
            <div>{emojyKeys1}</div>
          </div> */}

     

          {/* <div className="output">{output}</div> */}
        </div> 
        </div>
      
    );
        }
      }
      
  