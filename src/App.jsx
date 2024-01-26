import React, { useEffect, useRef, useState } from "react";

import logo from "./assets/react.svg";
import "./App.css"


function App() {

  const[buttonValue, setButtonValue] = useState("hello")
  window.addEventListener("click", () =>
    setButtonValue(window.clickedObject)
  );
  

  useEffect(() => {
    
    console.log(window.clickedObject)
  }, [ buttonValue]);

  
  
  function onClickHandler(){
    document.getElementById("base-ui").style.display = "none"
    document.getElementById("root").style.display = "none"
  }

  return (
    <div className="app">
    <p>This is test text</p>
      <button onClick={onClickHandler}>{buttonValue}</button>
    </div>
  );
}

export default App;
