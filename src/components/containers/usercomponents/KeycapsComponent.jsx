import React, { Component } from 'react';
import { connect } from 'react-redux';

class KeycapsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keycaps: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.reload = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // console.log('im in component');
    fetch('/keycaps')
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        // console.log(result);
        this.setState({ keycaps: result });
      })
      .catch((err) => console.log('err in fetch: ', err));
  }

  handleClick(param) {
    // console.log(param);
    fetch('/keycaps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keycapsName: param }),
    })
      .then((result) => result.json())
      .then((result) => {
        // console.log(result);
        this.reload();
      })
      .catch((err) => console.log('err in fetch: ', err));
  }

  render() {
    // console.log(this.state.keycaps);
    let keycaps = [];
    for (let i = 0; i < this.state.keycaps.length; i++) {
      keycaps.push(
        <KeycapsInComponent
          keycaps={this.state.keycaps[i]}
          key={i}
          addPart={this.props.addPart}
          goBack={this.props.goBack}
        />
      );
    }
    return (
      <div id="keycapsComponent">
        <h2>Keycaps</h2>
        {keycaps}
        <div>
          <label htmlFor="keycapsInput">Create New:</label>
          <input type="text" id="keycapsInput" name="keycapsInput" />
          <button
            type="submit"
            onClick={() =>
              this.handleClick(document.getElementById('keycapsInput').value)
            }
          >
            Add Cords
          </button>
        </div>
      </div>
    );
  }
}

class KeycapsInComponent extends Component {
  render() {
    const keycaps = this.props.keycaps;
    return (
      <div className="inComponent">
        <p>{keycaps.keycapsName}</p>
        <button
          className="chooseButton"
          type="submit"
          onClick={() => {
            this.props.addPart('keycaps', keycaps.keycapsName);
            this.props.goBack();
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default KeycapsComponent;
