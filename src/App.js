import "./App.css";
import ClassComponent from "./component/ClassComponent";
import FunctComponent from "./component/FunctComponent";
import React, { useState } from "react";

function App() {
  const [set, setvalue] = useState(false);
  const [set1, setvalue1] = useState(false);

  const handleClick = () => {
    setvalue(!set);
  };
  const handleclick2 = () => {
    setvalue1(!set1);
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <h1 className="heading">
            Styling using functional and class component
          </h1>
        </div>

        <div className="containerButton">
          <button onClick={handleClick} className="button button1">
            To see styling in functional component
          </button>
          <button className="button button2" onClick={handleclick2}>
            To see styling in class component
          </button>
        </div>
        <div className="container4">
          {set ? <FunctComponent /> : null}
          {set1 ? <ClassComponent /> : null}
        </div>
      </div>
    </>
  );
}

export default App;
