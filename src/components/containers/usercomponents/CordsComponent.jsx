import React, { Component } from 'react';
import { connect } from 'react-redux';

class CordsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cords: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.reload = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // console.log('im in component');
    fetch('/cords')
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        // console.log(result);
        this.setState({ cords: result });
      })
      .catch((err) => console.log('err in fetch: ', err));
  }

  handleClick(param) {
    // console.log(param);
    fetch('/cords', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cordsName: param }),
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
    let cords = [];
    for (let i = 0; i < this.state.cords.length; i++) {
      cords.push(
        <CordsInComponent
          cords={this.state.cords[i]}
          key={i}
          addPart={this.props.addPart}
          goBack={this.props.goBack}
        />
      );
    }
    return (
      <div id="cordsComponent">
        <h2>Cords</h2>
        {cords}
        <div>
          <label htmlFor="cordsInput">Create New:</label>
          <input type="text" id="cordsInput" name="cordsInput" />
          <button
            type="submit"
            onClick={() =>
              this.handleClick(document.getElementById('cordsInput').value)
            }
          >
            Add Cords
          </button>
        </div>
      </div>
    );
  }
}

class CordsInComponent extends Component {
  render() {
    const cords = this.props.cords;
    return (
      <div className="inComponent">
        <p>{cords.cordsName}</p>
        <button
          className="chooseButton"
          type="submit"
          onClick={() => {
            this.props.addPart('cords', cords.cordsName);
            this.props.goBack();
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default CordsComponent;
