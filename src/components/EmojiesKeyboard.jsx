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
    const emojis1 = [
      "\u{1F600}", // Grinning face
      "\u{1F601}", // Grinning face with smiling eyes
      "\u{1F602}", // Face with tears of joy
      "\u{1F603}", // Smiling face with open mouth
      "\u{1F604}", // Smiling face with open mouth and smiling eyes
      "\u{1F605}", // Smiling face with open mouth and cold sweat
      "\u{1F606}", // Smiling face with open mouth and tightly-closed eyes
      "\u{1F609}", // Winking face
      "\u{1F60A}", // Smiling face with smiling eyes
      "\u{1F60B}", // Face savoring food
    ];

    const emojis2 = [
      "\u{1F60E}", // Smiling face with sunglasses
      "\u{1F60D}", // Smiling face with heart-eyes
      "\u{1F618}", // Face blowing a kiss
      "\u{1F617}", // Kissing face
      "\u{1F619}", // Kissing face with smiling eyes
      "\u{1F61A}", // Kissing face with closed eyes
      "\u{1F60C}", // Relieved face
      "\u{1F44D}", // Thumbs up
      "\u{1F44E}", // Thumbs down
      "\u{1F44C}", // OK hand
    ];

    const emojis3 = [
      "\u{1F44C}", // OK hand
      "\u{1F44F}", // Clapping hands
      "\u{1F525}", // Fire
      "\u{1F60F}", // Smirking face
      "\u{1F648}", // See-no-evil monkey
      "\u{1F649}", // Hear-no-evil monkey
      "\u{1F64A}", // Speak-no-evil monkey
    ];

    const heartEmojis1 = [
      "\u{1F49D}", // Heart with ribbon
      "\u{1F49E}", // Heart with arrow
      "\u{1F48C}", // Love letter
      "\u{1F495}", // Two hearts
      "\u{1F496}", // Sparkling heart
      "\u{1F497}", // Growing heart
      "\u{1F498}", // Heart with arrow
    ];

    const heartEmojis2 = [
      "\u{1F499}", // Blue heart
      "\u{1F49A}", // Green heart
      "\u{1F49B}", // Yellow heart
      "\u{1F5A4}", // Black heart
      "\u{1F9E1}", // Orange heart
      "\u{1F90E}", // Brown heart
      "\u{1F90D}", // White heart
      "\u{1F49C}", // Purple heart
    ];

    return (
      <div className="EmojiesKeyboard" style={{ visibility: "hidden" }}>
        {emojis1.map((emoji, index) => (
          <Button
            key={index}
            variant="primary"
            onClick={() => this.EmojiHandleClick(emoji)}
          >
            <Emoji text={emoji} />
          </Button>
        ))}
        <br />
        {emojis2.map((emoji, index) => (
          <Button
            key={index}
            variant="primary"
            onClick={() => this.EmojiHandleClick(emoji)}
          >
            <Emoji text={emoji} />
          </Button>
        ))}
        <br />
        {emojis3.map((emoji, index) => (
          <Button
            key={index}
            variant="primary"
            onClick={() => this.EmojiHandleClick(emoji)}
          >
            <Emoji text={emoji} />
          </Button>
        ))}
        <br />
        {heartEmojis1.map((emoji, index) => (
          <Button
            key={index}
            variant="primary"
            onClick={() => this.EmojiHandleClick(emoji)}
          >
            <Emoji text={emoji} />
          </Button>
        ))}
        <br />
        {heartEmojis2.map((emoji, index) => (
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
