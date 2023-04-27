import React, { Component } from 'react';
import "../App.css";


export default class EnglishKeyboard extends Component {

    constructor(props) {
        super(props);

    }

    render(){

        const EngAlphabet1 = this.props.capsLockOn ? "QWERTYUIOP" : "qwertyuiop";
        const EngAlphabet2 = this.props.capsLockOn ? "ASDFGHJKL" : "asdfghjkl";
        const EngAlphabet3 = this.props.capsLockOn ? "ZXCVBNM" : "zxcvbnm";


        const EngKeys1 = this.props.inputButtons(EngAlphabet1);
        const EngKeys2 = this.props.inputButtons(EngAlphabet2);
        const EngKeys3 = this.props.inputButtons(EngAlphabet3);

        return (

            <div className="EngKeyboard" style={{ visibility: "hidden" }}>
                <div>{EngKeys1}</div>
                <div>{EngKeys2}</div>
                <div>{EngKeys3}</div>
            </div>
        );
    }

}