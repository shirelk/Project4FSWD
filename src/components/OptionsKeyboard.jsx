import React, { Component } from "react";
import "../App.css";

export default class OptionsKeyboard extends Component {
  constructor(props) {
    super(props);
  }

  boldUpdate = () => { this.props.styleFunctionsProp.boldUpdate();};
  italicUpdate = () => { this.props.styleFunctionsProp.italicUpdate();};
  underlineUpdate = () => { this.props.styleFunctionsProp.underlineUpdate();};
  undoUpdate = () => { this.props.styleFunctionsProp.undoUpdate();};
  clearAll =() => { this.props.styleFunctionsProp.clearAll();};
  alignLeftUpdate = () => { this.props.styleFunctionsProp.alignLeftUpdate();};
  alignRightUpdate = () => { this.props.styleFunctionsProp.alignRightUpdate();};
  alignCenterUpdate = () => { this.props.styleFunctionsProp.alignCenterUpdate();};
  alignFullUpdate = () => { this.props.styleFunctionsProp.alignFullUpdate();};
  fontSizeUpdate = (event) => { this.props.styleFunctionsProp.fontSizeUpdate(event);};
  fontNameUpdate = (event) => { this.props.styleFunctionsProp.fontNameUpdate(event);};
  colorUpdate = (event) => { this.props.styleFunctionsProp.colorUpdate(event);};

  render() {
    return (
      <div className="options">
        {/* Text format */}
        <button id="bold" onClick={this.boldUpdate} className="option-button format">{" "}<i className="fa-solid fa-bold"></i></button>
        <button id="italic" onClick={this.italicUpdate} className="option-button format">{" "}<i className="fa-solid fa-italic"></i></button>
        <button id="underline" onClick={this.underlineUpdate} className="option-button format"><i className="fa-solid fa-underline"></i></button>

        {/*Undo-Redo*/}
        <button id="undo" onClick={this.undoUpdate} className="option-button"><i className="fa-solid fa-rotate-left"></i></button>
        {/* <button id="redo" className="option-button"><i className="fa-solid fa-rotate-right"></i></button> */}
        <button id="clear" onClick={this.clearAll} className="option-button"><i class="fa-solid fa-trash"></i></button>

        {/* Alignment */}
        <button id="justigyLeft" onClick={this.alignLeftUpdate} className="option-button align"><i className=" fa-solid fa-align-left"></i></button>
        <button id="justigyRight" onClick={this.alignRightUpdate} className="option-button align"><i className=" fa-solid fa-align-right"></i></button>
        <button id="justigyCenter" onClick={this.alignCenterUpdate} className="option-button align"><i className=" fa-solid fa-align-center"></i></button>
        <button id="justigyFull" onClick={this.alignFullUpdate} className="option-button align"><i className=" fa-solid fa-align-justify"></i></button>

        {/* Font */}
        <select id="fontName" onChange={this.fontNameUpdate} className="adv-option-button"> 
            <option key="Ariel" value="Ariel">{" "}Ariel{" "}</option>
            <option key="Verdana" value="Verdana">{" "}Verdana{" "}</option>
            <option key="Tahoma" value="Tahoma">{" "}Tahoma{" "}</option>
            <option key="Georgia" value="Georgia">{" "}Georgia{" "}</option>
        </select>
        <select id="fontSize" onChange={this.fontSizeUpdate} className="adv-option-button">
            <option key="1" value="1">{" "}1px{" "}</option>
            <option key="10" value="10">{" "}10px{" "}</option>
            <option key="15" value="15">{" "}15px{" "}</option>
            <option key="20" value="20">{" "}20px{" "}</option>
            <option key="25" value="25">{" "}25px{" "}</option>
            <option key="30" value="30">{" "}30px{" "}</option>
        </select>

        {/* Color */}
        <div className="input-wrapper">
          <input type="color" id="foreColor" onChange={this.colorUpdate} className="adv-option-button"></input>
          <label className="font-color" htmlFor="foreColor">{" "}Font Color</label>
        </div>
      </div>
    );
  }
}
