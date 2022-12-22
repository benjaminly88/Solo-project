import React, { Component } from 'react';
import { connect } from 'react-redux';

class SwitchesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switches: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.reload = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // console.log('im in component');
    fetch('/keyswitches')
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        // console.log(result);
        this.setState({ switches: result });
      })
      .catch((err) => console.log('err in fetch: ', err));
  }

  handleClick(param) {
    // console.log(param);
    fetch('/keyswitches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keyswitchesName: param }),
    })
      .then((result) => result.json())
      .then((result) => {
        // console.log(result);
        this.reload();
      })
      .catch((err) => console.log('err in fetch: ', err));
  }

  render() {
    // console.log(this.state.case);
    let switches = [];
    for (let i = 0; i < this.state.switches.length; i++) {
      switches.push(
        <SwitchesInComponent
          switches={this.state.switches[i]}
          key={i}
          addPart={this.props.addPart}
          goBack={this.props.goBack}
        />
      );
    }
    return (
      <div id="switchesComponent">
        <h2>Switches</h2>
        {switches}
        <div>
          <label htmlFor="switchesInput">Create New:</label>
          <input type="text" id="switchesInput" name="switchesInput" />
          <button
            type="submit"
            onClick={() =>
              this.handleClick(document.getElementById('switchesInput').value)
            }
          >
            Add Switches
          </button>
        </div>
      </div>
    );
  }
}

class SwitchesInComponent extends Component {
  render() {
    const switches = this.props.switches;
    return (
      <div className="inComponent">
        <p>{switches.keyswitchesName}</p>
        <button
          className="chooseButton"
          type="submit"
          onClick={() => {
            this.props.addPart('switches', switches.keyswitchesName);
            this.props.goBack();
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default SwitchesComponent;
