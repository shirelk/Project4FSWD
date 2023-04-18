import { useState } from "react";
import "./App.css";

function App(props) {
  // const [count, setCount] = useState(0);

  const EngAlphabet1 = "qwertyuiop";
  const EngAlphabet2 = "asdfghjkl";
  const EngAlphabet3 = "zxcvbnm";
  const HebAlphabet1 = "קראטוןםפ";
  const HebAlphabet2 = "שדגכעיחלךף";
  const HebAlphabet3 = "זסבהנמצתץ";
  const numbers = "0123456789";

  const handleClick = (char) => {
    props.setInputValue(props.inputValue + char);
  };

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
      <h1>Text editor :)</h1>
      <div className="card">
        <input type="text" value={props.inputValue} />
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <div className="KeyboardOptions">
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

        <div className="output">{props.output}</div>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default function KeyboardLayout() {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div>
      <App
        inputValue={inputValue}
        setInputValue={setInputValue}
        output={output}
        setOutput={setOutput}
      />
    </div>
  );
}
