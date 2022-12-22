import React, { Component } from 'react';
import { connect } from 'react-redux';

class SwitchOpenerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchopener: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.reload = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // console.log('im in component');
    fetch('/switchopener')
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        // console.log(result);
        this.setState({ switchopener: result });
      })
      .catch((err) => console.log('err in fetch: ', err));
  }

  handleClick(param) {
    // console.log(param);
    fetch('/switchopener', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ switchopenerName: param }),
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
    let switchopeners = [];
    for (let i = 0; i < this.state.switchopener.length; i++) {
      switchopeners.push(
        <SwitchOpenersInComponent
          switchopener={this.state.switchopener[i]}
          key={i}
          addPart={this.props.addPart}
          goBack={this.props.goBack}
        />
      );
    }
    return (
      <div id="switchopenerComponent">
        <h2>Switch Openers</h2>
        {switchopeners}
        <div>
          <label htmlFor="switchopenerInput">Create New:</label>
          <input type="text" id="switchopenerInput" name="switchopenerInput" />
          <button
            type="submit"
            onClick={() =>
              this.handleClick(
                document.getElementById('switchopenerInput').value
              )
            }
          >
            Add Switches
          </button>
        </div>
      </div>
    );
  }
}

class SwitchOpenersInComponent extends Component {
  render() {
    const switchopener = this.props.switchopener;
    return (
      <div className="inComponent">
        <p>{switchopener.switchopenerName}</p>
        <button
          className="chooseButton"
          type="submit"
          onClick={() => {
            this.props.addPart('switchopener', switchopener.switchopenerName);
            this.props.goBack();
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default SwitchOpenerComponent;
