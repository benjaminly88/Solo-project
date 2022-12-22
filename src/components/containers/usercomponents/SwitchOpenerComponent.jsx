import React, { Component } from 'react';
import { connect } from 'react-redux';

class SwitchOpenerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchopener: [],
    };
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

  render() {
    // console.log(this.state.case);
    let switchopeners = [];
    for (let i = 0; i < this.state.switchopener.length; i++) {
      switchopeners.push(
        <SwitchOpenersInComponent
          switchopener={this.state.switchopener[i]}
          key={i}
        />
      );
    }
    return (
      <div id="switchopenerComponent">
        <h2>Switch Openers</h2>
        {switchopeners}
      </div>
    );
  }
}

class SwitchOpenersInComponent extends Component {
  render() {
    return <div>{this.props.switchopener.switchopenerName}</div>;
  }
}

export default SwitchOpenerComponent;
