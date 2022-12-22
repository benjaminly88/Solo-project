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
        setTimeout(this.reload(), 1000);
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
          reload={this.reload}
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
  constructor(props) {
    super(props);
    this.deleteButton = this.deleteButton.bind(this);
  }

  deleteButton(deleteId) {
    // console.log(deleteId);
    fetch('/keyswitches', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: deleteId }),
    }).then((result) => {
      setTimeout(this.props.reload(), 1000);
    });
  }

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
        <button
          className="deleteButton"
          type="submit"
          onClick={() => {
            this.deleteButton(switches._id);
          }}
        >
          X
        </button>
      </div>
    );
  }
}

export default SwitchesComponent;
