import React, { Component } from 'react';

class SelectionComponent extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  render() {
    return (
      <div id="selectionComponent">
        <h2 id="selection">Selection</h2>
        <button
          className="selectionButton"
          type="submit"
          onClick={() => this.props.toCase()}
        >
          Choose A Case
        </button>
        <button
          className="selectionButton"
          type="submit"
          onClick={() => this.props.backplate()}
        >
          Choose A BackPlate
        </button>
        <button
          className="selectionButton"
          type="submit"
          onClick={() => this.props.keyswitches()}
        >
          Add Switches
        </button>
        <button
          className="selectionButton"
          type="submit"
          onClick={() => this.props.keycaps()}
        >
          Add Keycaps
        </button>
        <button
          className="selectionButton"
          type="submit"
          onClick={() => this.props.cords()}
        >
          Add Cords
        </button>
        <button
          className="selectionButton"
          type="submit"
          onClick={() => this.props.switchopener()}
        >
          Choose A Switch Opener
        </button>
      </div>
    );
  }
}

export default SelectionComponent;
