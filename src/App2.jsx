import { useState } from "react";
import "./App.css";

// Light on: https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png
// Light off: https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png

const lightOn =
  "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png";

const lightOff =
  "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png";

function App() {
  const [imgUrl, setImgUrl] = useState(lightOff); // "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png"

  const turnOn = () => {
    setImgUrl(lightOn); // "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png"
  };

  const turnOff = () => {
    setImgUrl(lightOff);
  };

  // const turnOn = (e) => {
  //   e.target.previousElementSibling.previousElementSibling.src =
  //     "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png";
  //   // document.getElementById("img").src =
  //   //   "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png";
  // };

  // const turnOff = (e) => {
  //   e.target.previousElementSibling.previousElementSibling.previousElementSibling.src =
  //     "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png";
  //   // document.getElementById("img").src =
  //   //   "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png";
  // };

  return (
    <>
      <img id="img" src={imgUrl} />
      <br />
      <button id="btn1" onClick={turnOn}>
        Turn on
      </button>
      <button id="btn2" onClick={turnOff}>
        Turn off
      </button>
    </>
  );
}

export default App;
