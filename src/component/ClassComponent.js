import React, { Component } from 'react'
import  '../App.css'

export class ClassComponent extends Component {
  
  render() {
    const headingStyle = {
      color: 'blue'
    };
    return (
      <>
       <div className="container3">
        <div className="content-1">
          <h1>This is created using class Component</h1>
          <br />
          <h3>This is done using external CSS</h3>
          <h3 style={headingStyle}>This is done using inline CSS</h3>
        </div>
      </div>
      </>
        
      
    )
  }
}

export default ClassComponent
