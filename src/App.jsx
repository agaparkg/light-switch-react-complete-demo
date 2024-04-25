import { useState } from "react";
import "./App.css";

// Light on: https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png
// Light off: https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png

const lightOn =
  "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png";

const lightOff =
  "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png";

// let products = []

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    // if (isOn) {
    //   setIsOn(false);
    // } else {
    //   setIsOn(true);
    // }
    setIsOn(!isOn);
  };

  return (
    <>
      <img id="img" src={isOn ? lightOn : lightOff} />
      <br />
      <button className={!isOn ? "on" : "off"} id="btn1" onClick={toggle}>
        {isOn ? "OFF" : "ON"}
      </button>
    </>
  );
}

export default App;
