import React, { Component } from "react";
import "./App.css";
import HebrewKeyboard from "./components/HebrewKeyboard";
import EnglishKeyboard from "./components/EnglishKeyboard";
import OptionsKeyboard from "./components/OptionsKeyboard";

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
      alignment: "left"
    };
  }

  //Style function
  boldUpdate = () => { this.setState({isBold: !this.state.isBold});}
  underlineUpdate = () => {console.log("underline!"); this.setState({underline: !this.state.underline});}
  italicUpdate = () => { this.setState({italic: !this.state.italic});}

  fontSizeUpdate = (event)=>{this.setState({fontSize: event.target.value})}
  fontNameUpdate = (event)=>{this.setState({fontName: event.target.value})}
  colorUpdate = (event)=>{this.setState({color: event.target.value})}

  alignFullUpdate =()   =>  {this.setState(   {alignment: "justify"}   );}
  alignCenterUpdate =() =>  {this.setState(   {alignment: "center"}    );}
  alignRightUpdate =()  =>  {this.setState(   {alignment: "right"}     );}
  alignLeftUpdate =()   =>  {this.setState(   {alignment: "left"}      );}


  //object the hold the fields of the style functions
  setInputValue = (newChar) => {
    let designChar = {
      value: newChar,
      fontSize: this.state.fontSize,
      fontName: this.state.fontName,
      color: this.state.color,
      boldC: this.state.isBold? 'bold' : '',
      underline: this.state.underline? 'underline':'',
      italic: this.state.italic? 'italic':'',
      align: this.state.alignment

  }
    this.setState((prev)=> ({ inputValue: [...prev.inputValue, designChar ] }));
  };

  handleClick = (char) => {
    this.setInputValue(char);
  };

  // Delete button
  handleDelete = () => {
    this.setState({inputValue: this.state.inputValue.slice(0, -1)} );
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
      fontNameUpdate: this.fontNameUpdate,
      fontSizeUpdate: this.fontSizeUpdate,
      alignFullUpdate: this.alignFullUpdate,
      alignCenterUpdate: this.alignCenterUpdate,
      alignRightUpdate: this.alignRightUpdate,
      alignLeftUpdate: this.alignLeftUpdate,
      colorUpdate: this.colorUpdate
    }

    const { capsLockOn } = this.state;
    const { inputValue, output, bold } = this.state;

    const numbers = "0123456789";
    // const emojy1 = "😀😁😂🤣😃😄😅😆😉😊";
    // const emojy2 = "😋😎😍😘🥰😗😙🥲😚☺️";
    const specials1 = "!@#$%^&*()-_=+";
    const specials2 = "/'[]{};:?.,";

    const NumKeys = this.inputButtons(numbers);

    let input=[...this.state.inputValue];
    return (
      <div className="App">
        <div className="card">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

          <div className="container">
            <OptionsKeyboard styleFunctionsProp ={styleFunctions}  />
            <div id="text-input" style={{textAlign: this.state.alignment}}>
              {input.map((char) =>(
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
                const hebrewKeyboard =
                  document.querySelector(".HebKeyboard");
                hebrewKeyboard.style.visibility =
                  hebrewKeyboard.style.visibility === "collapse"
                    ? "visible"
                    : "collapse";

              }}
            >
              Hebrew
            </button>
            <button
              onClick={() => {
                const englishKeyboard =
                  document.querySelector(".EngKeyboard");
                englishKeyboard.style.visibility =
                  englishKeyboard.style.visibility === "collapse"
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

          <EnglishKeyboard capsLockOn={this.state.capsLockOn} inputButtons={this.inputButtons} />
          <HebrewKeyboard func={this.inputButtons} />

        </div>
      </div>
    </div>

    );
  }
}

