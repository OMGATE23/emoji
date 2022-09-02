import React, { useState } from "react";
import "./styles.css";

var headingText = "to emoji dictionary";
var color = "pink";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputEmojiHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "failure to find emoji";
    }

    console.log(meaning);
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    console.log(emojiDictionary[emoji]);
    setMeaning(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <header>
        {" "}
        <h1>welcome {headingText}</h1>
      </header>
      <input onChange={inputEmojiHandler}></input>
      <h4>{meaning}</h4>

      <h3>Emojis we know</h3>
      <div class="emoji-grid">
        {emojisWeKnow.map((item) => {
          return (
            <span
              onClick={() => emojiClickHandler(item)}
              style={{ cursor: "pointer" }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
