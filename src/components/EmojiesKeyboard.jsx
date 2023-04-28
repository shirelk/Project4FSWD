import React, { Component } from "react";
import Emoji from "react-emoji-render";
import { Button } from "react-bootstrap";
import "../App.css";

export default class EmojiesKeyboard extends Component {
  constructor(props) {
    super(props);
    this.EmojiHandleClick = this.EmojiHandleClick.bind(this);
  }

  EmojiHandleClick(emoji) {
    this.props.setInputValue(emoji);
  }

  render() {
    const emojis = [
      "\u{1F600}", // Grinning face
      "\u{1F601}", // Grinning face with smiling eyes
      "\u{1F602}",
    ];
    // const emojy1 = "☺☺☺☺☺☺☺☺☺";
    // const emojy2 = "☺☺☺☺☺☺☺☺☺";

    // const EmojKeys1 = this.props.emoj(emojy1);
    // const EmojKeys2 = this.props.emoj(emojy2);

    return (
      <div className="EmojiesKeyboard" style={{ visibility: "hidden" }}>
        {emojis.map((emoji, index) => (
          <Button
            key={index}
            variant="primary"
            onClick={() => this.EmojiHandleClick(emoji)}
          >
            <Emoji text={emoji} />
          </Button>
        ))}

        {/* <div>{EmojKeys}</div> */}
        {/* <div>{EmojKeys2}</div> */}
      </div>
    );
  }
}
