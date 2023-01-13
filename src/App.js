import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import FunctionBox from "./FunctionBox";
import ClassBox from "./ClassBox";
function App() {
  let [show, setshow] = useState(false);

  let btnclick = () => {
    setshow(!show);
  };

  let [show2, setshow2] = useState(false);
  let btn2click = () => {
    setshow2(!show2);
  };
  return (
    <div>
      <h1 id="txt">Styling Using Function and Class Components</h1>
      <button id="btn1" onClick={btnclick}>
        To see styling in Functional Component
      </button>
      <button id="btn2" onClick={btn2click}>
        To see styling in Class Component
      </button>

      <div>{show ? <FunctionBox /> : ""}</div>
      <div>{show2 ? <ClassBox /> : ""}</div>
    </div>
  );
}

export default App;
