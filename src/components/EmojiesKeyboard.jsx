import React, { Component } from 'react';
import "../App.css";


export default class EmojiesKeyboard extends Component {
    constructor(props) {
        super(props);

    }

    render() { 

        const emojy1 = "☺☺☺☺☺☺☺☺☺";
        const emojy2 = "☺☺☺☺☺☺☺☺☺";

        const EmojKeys1 = this.props.emoj(emojy1);
        const EmojKeys2 = this.props.emoj(emojy2);

        return (
            
            <div className="EmojiesKeyboard" style={{ visibility: "hidden" }}>
                <div>{EmojKeys1}</div>
                <div>{EmojKeys2}</div>
            </div>

        );
    }
}
 
