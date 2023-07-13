import React from "react";
import "../App.css";

const FunctComponent = () => {
  const headingStyle = {
    color: 'blue'
  };
  return (
    <>
      <div className="container3">
        <div className="content">
          <h1>This is created using functional Component</h1>
          <br />
          <h3>This is done using external CSS</h3>
          <h3 style={headingStyle}>This is done using inline CSS</h3>
        </div>
      </div>
    </>
  );
};

export default FunctComponent;
