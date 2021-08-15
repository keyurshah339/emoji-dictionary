import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "🤔": "thinking",
  "😨": "surprised",
  "😫": "tired"
};

var emojis = Object.keys(emojiDictionary);

export default function App() {
  const [ret, setret] = useState("");

  function printer(event) {
    var x = event.target.value;
    var d = emojiDictionary[x];
    setret(d);

    if (d === undefined) {
      return setret("we dont have it");
    }
    return setret(d);
  }

  function emojiprinter(items) {
    var p = emojiDictionary[items];
    setret(p);
  }

  return (
    <div className="App">
      <h2> Emoji Dictionary </h2>

      <input placeholder="put your emoji here" onChange={printer}></input>

      <div className="output"> {ret}</div>

      <h5> Click on emojis below to know the meaning</h5>

      {emojis.map(function (items) {
        return (
          <span
            onClick={() => emojiprinter(items)}
            style={{ fontSize: "2rem", cursor: "pointer", padding: "0.5rem" }}
            key={items}
          >
            {" "}
            {items}
          </span>
        );
      })}
    </div>
  );
}
