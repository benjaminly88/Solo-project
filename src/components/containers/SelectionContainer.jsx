import React, { Component } from 'react';

// each selection will be base off of

class SelectionContainer extends Component {
    constructor(props) {
        super(props);
    }

    

  render() {
    return (
      <div id="selectionContainer">
        <h2 id="selection">Selection</h2>
        <button className="selectionButton"> Choose A Case </button>
        <button className="selectionButton"> Choose A BackPlate </button>
        <button className="selectionButton"> Add Switches </button>
        <button className="selectionButton"> Add Keycaps </button>
        <button className="selectionButton"> Add Cords </button>
        <button className="selectionButton"> Choose A Switch Opener </button>
      </div>
    );
  }
}

export default SelectionContainer;
