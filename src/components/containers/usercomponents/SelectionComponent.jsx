import React, { Component } from 'react';

class SelectionComponent extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  render() {
    let loadBackplate;
    // console.log(this.props.backplate);
    if (this.props.backplate !== null) {
      loadBackplate = [
        this.props.backplate,
        <button
          className="deleteButton"
          type="submit"
          onClick={() => {
            this.props.removePart('backplate');
          }}
        >
          X
        </button>,
      ];
    } else {
      loadBackplate = (
        <button
          className="selectionButton"
          type="submit"
          onClick={() => this.props.toPage('backplate')}
        >
          Choose A Backplate
        </button>
      );
    }

    let loadCase;
    if (this.props.case !== null) {
      loadCase = [
        this.props.case,
        <button
          className="deleteButton"
          type="submit"
          onClick={() => {
            this.props.removePart('case');
          }}
        >
          X
        </button>,
      ];
    } else {
      loadCase = (
        <button
          className="selectionButton"
          type="submit"
          onClick={() => this.props.toPage('case')}
        >
          Choose A Case
        </button>
      );
    }

    let loadSwitches;
    if (this.props.switches !== null) {
      loadSwitches = [
        this.props.switches,
        <button
          className="deleteButton"
          type="submit"
          onClick={() => {
            this.props.removePart('switches');
          }}
        >
          X
        </button>,
      ];
    } else {
      loadSwitches = (
        <button
          className="selectionButton"
          type="submit"
          onClick={() => this.props.toPage('keyswitches')}
        >
          Add Switches
        </button>
      );
    }

    let loadKeycaps;
    if (this.props.keycaps !== null) {
      loadKeycaps = [
        this.props.keycaps,
        <button
          className="deleteButton"
          type="submit"
          onClick={() => {
            this.props.removePart('keycaps');
          }}
        >
          X
        </button>,
      ];
    } else {
      loadKeycaps = (
        <button
          className="selectionButton"
          type="submit"
          onClick={() => this.props.toPage('keycaps')}
        >
          Add Keycaps
        </button>
      );
    }

    let loadCords;
    if (this.props.cords !== null) {
      loadCords = [
        this.props.cords,
        <button
          className="deleteButton"
          type="submit"
          onClick={() => {
            this.props.removePart('cords');
          }}
        >
          X
        </button>,
      ];
    } else {
      loadCords = (
        <button
          className="selectionButton"
          type="submit"
          onClick={() => this.props.toPage('cords')}
        >
          Add Cords
        </button>
      );
    }

    let loadSwitchopener;
    if (this.props.switchopener !== null) {
      loadSwitchopener = [
        this.props.switchopener,
        <button
          className="deleteButton"
          type="submit"
          onClick={() => {
            this.props.removePart('switchopener');
          }}
        >
          X
        </button>,
      ];
    } else {
      loadSwitchopener = (
        <button
          className="selectionButton"
          type="submit"
          onClick={() => this.props.toPage('switchopener')}
        >
          Choose A Switch Opener
        </button>
      );
    }
    return (
      <div id="selectionComponent">
        <h2 id="selection">Selection</h2>
        <p>{loadCase}</p>
        <p>{loadBackplate}</p>
        <p>{loadSwitches}</p>
        <p>{loadKeycaps}</p>
        <p>{loadCords}</p>
        <p>{loadSwitchopener}</p>
      </div>
    );
  }
}

export default SelectionComponent;
