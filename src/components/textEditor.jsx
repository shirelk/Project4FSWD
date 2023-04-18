import React, { Component } from "react";
import "./App.css";

export default class TextEditor extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  handleClick = (char) => {
    this.setState({ input: this.state.input + char });
  };

  render() {
    const engAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const hebAlphabet = "פםןוטארקףךלחיעכגדשץתצמנהבסז";
    const keys = alphabet.split("").map((char) => (
      <button key={char} onClick={() => this.handleClick(char)}>
        {char}
      </button>
    ));

    return (
      <div className="keyboard-container">
        <input type="text" value={this.state.input} className="input-box" />
        <div className="keyboard-keys">{keys}</div>
      </div>
    );
  }
}
