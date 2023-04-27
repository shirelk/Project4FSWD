import React, { Component } from 'react';


class HebrewKeyboard extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        const HebAlphabet1 = "קראטוןםפ";
        const HebAlphabet2 = "שדגכעיחלךף";
        const HebAlphabet3 = "זסבהנמצתץ";

        const HebKeys1 = this.props.func(HebAlphabet1);
        const HebKeys2 = this.props.func(HebAlphabet2);
        const HebKeys3 = this.props.func(HebAlphabet3);

        return (
                <div className="HebKeyboard" style={{ visibility: "visible" }}>
                    <div>{HebKeys1}</div>
                    <div>{HebKeys2}</div>
                    <div>{HebKeys3}</div>
                </div>

        );
    }
}

export default HebrewKeyboard;