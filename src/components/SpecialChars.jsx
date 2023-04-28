import React, { Component } from "react";
import "../App.css";

export default class SpecialChars extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const specials1 = "!@#$%^&*()-_=+";
    const specials2 = "/'[]{};:?.,";

    const SpecKeys1 = this.props.input(specials1);
    const SpecKeys2 = this.props.input(specials2);

    return (
      <div className="SpecialChars" style={{ visibility: "hidden" }}>
        <div>{SpecKeys1}</div>
        <div>{SpecKeys2}</div>
      </div>
    );
  }
}
