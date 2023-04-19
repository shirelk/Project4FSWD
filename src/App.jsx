// import { useState } from "react";
// import "./App.css";

// function App(props) {
//   const [capsLockOn, setCapsLockOn] = useState(false); // state variable to track caps lock status
//   const EngAlphabet1 = capsLockOn ? "QWERTYUIOP" : "qwertyuiop";
//   const EngAlphabet2 = capsLockOn ? "ASDFGHJKL" : "asdfghjkl";
//   const EngAlphabet3 = capsLockOn ? "ZXCVBNM" : "zxcvbnm";
//   const HebAlphabet1 = "קראטוןםפ";
//   const HebAlphabet2 = "שדגכעיחלךף";
//   const HebAlphabet3 = "זסבהנמצתץ";
//   const numbers = "0123456789";

//   const handleClick = (char) => {
//     props.setInputValue(props.inputValue + char);
//   };

//   // Delete button
//   const handleDelete = () => {
//     props.setInputValue(props.inputValue.slice(0, -1));
//   };

//   //space button
//   const handleSpace = () => {
//     props.setInputValue(props.inputValue + " ");
//   };

//   const inputButtons = (alphabet) =>
//     alphabet.split("").map((char) => (
//       <button key={char} onClick={() => handleClick(char)}>
//         {char}
//       </button>
//     ));

//   const NumKeys = inputButtons(numbers);
//   const EngKeys1 = inputButtons(EngAlphabet1);
//   const EngKeys2 = inputButtons(EngAlphabet2);
//   const EngKeys3 = inputButtons(EngAlphabet3);
//   const HebKeys1 = inputButtons(HebAlphabet1);
//   const HebKeys2 = inputButtons(HebAlphabet2);
//   const HebKeys3 = inputButtons(HebAlphabet3);

//   return (
//     <div className="App">
//       <h1>Text editor :)</h1>
//       <div className="card">
//         <input type="text" value={props.inputValue} />

//         <div className="KeyboardInputs">
//           <button
//             onClick={() => {
//               const hebKeyboard = document.querySelector(".HebKeyboard");
//               const engKeyboard = document.querySelector(".EngKeyboard");
//               hebKeyboard.style.visibility = "visible";
//               engKeyboard.style.visibility = "collapse";
//             }}
//           >
//             Hebrew
//           </button>
//           <button
//             onClick={() => {
//               const hebKeyboard = document.querySelector(".HebKeyboard");
//               const engKeyboard = document.querySelector(".EngKeyboard");
//               hebKeyboard.style.visibility = "collapse";
//               engKeyboard.style.visibility = "visible";
//             }}
//           >
//             English
//           </button>

//           <button
//             onClick={() => {
//               const numbersKeyboard =
//                 document.querySelector(".NumbersKeyboard");
//               numbersKeyboard.style.visibility =
//                 numbersKeyboard.style.visibility === "collapse"
//                   ? "visible"
//                   : "collapse";
//             }}
//           >
//             Numbers
//           </button>
//         </div>

//         <div className="KeyboardOptions">
//           <button
//             onClick={() => {
//               setCapsLockOn(!capsLockOn);
//             }}
//           >
//             Caps lock
//           </button>
//           <button className="space" onClick={handleSpace}>
//             Space
//           </button>
//           <button onClick={handleDelete}>Delete</button>
//         </div>

//         <div className="NumbersKeyboard" style={{ visibility: "visible" }}>
//           {NumKeys}
//         </div>
//         <div className="EngKeyboard" style={{ visibility: "visible" }}>
//           <div>{EngKeys1}</div>
//           <div>{EngKeys2}</div>
//           <div>{EngKeys3}</div>
//         </div>
//         <div className="HebKeyboard" style={{ visibility: "visible" }}>
//           <div>{HebKeys1}</div>
//           <div>{HebKeys2}</div>
//           <div>{HebKeys3}</div>
//         </div>

//         <div className="output">{props.output}</div>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function KeyboardLayout() {
//   const [inputValue, setInputValue] = useState("");
//   const [output, setOutput] = useState("");

//   return (
//     <div>
//       <App
//         inputValue={inputValue}
//         setInputValue={setInputValue}
//         output={output}
//         setOutput={setOutput}
//       />
//     </div>
//   );
// }

import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capsLockOn: false,
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
    this.props.setInputValue(this.props.inputValue + char);
  };

  // Delete button
  handleDelete = () => {
    this.props.setInputValue(this.props.inputValue.slice(0, -1));
  };

  // Space button
  handleSpace = () => {
    this.props.setInputValue(this.props.inputValue + " ");
  };

  inputButtons = (alphabet) =>
    alphabet.split("").map((char) => (
      <button key={char} onClick={() => this.handleClick(char)}>
        {char}
      </button>
    ));

  render() {
    const { capsLockOn } = this.state;
    // const { inputValue } = this.props;
    const { inputValue, output } = this.state;
    const EngAlphabet1 = capsLockOn ? "QWERTYUIOP" : "qwertyuiop";
    const EngAlphabet2 = capsLockOn ? "ASDFGHJKL" : "asdfghjkl";
    const EngAlphabet3 = capsLockOn ? "ZXCVBNM" : "zxcvbnm";
    const HebAlphabet1 = "קראטוןםפ";
    const HebAlphabet2 = "שדגכעיחלךף";
    const HebAlphabet3 = "זסבהנמצתץ";
    const numbers = "0123456789";

    const NumKeys = this.inputButtons(numbers);
    const EngKeys1 = this.inputButtons(EngAlphabet1);
    const EngKeys2 = this.inputButtons(EngAlphabet2);
    const EngKeys3 = this.inputButtons(EngAlphabet3);
    const HebKeys1 = this.inputButtons(HebAlphabet1);
    const HebKeys2 = this.inputButtons(HebAlphabet2);
    const HebKeys3 = this.inputButtons(HebAlphabet3);
    const hebKeyboard = document.querySelector(".HebKeyboard");
    const engKeyboard = document.querySelector(".EngKeyboard");

    return (
      <div className="App">
        <h1>Text editor :)</h1>
        <div className="card">
          <input type="text" value={inputValue} />

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

          <div className="NumbersKeyboard" style={{ visibility: "collapse" }}>
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

          <div className="output">{output}</div>
          {/* <div>
            <App
              inputValue={inputValue}
              setInputValue={this.setInputValue}
              output={output}
              setOutput={this.setOutput}
            />
          </div> */}
        </div>
      </div>
    );
  }
}
