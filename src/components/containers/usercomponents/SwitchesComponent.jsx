import React, { Component } from 'react';
import { connect } from 'react-redux';

class SwitchesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switches: [],
    };
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

  render() {
    // console.log(this.state.case);
    let switches = [];
    for (let i = 0; i < this.state.switches.length; i++) {
      switches.push(<SwitchesInComponent switches={this.state.switches[i]} key={i}/>);
    }
    return (
      <div id="switchesComponent">
        <h2>Switches</h2>
        {switches}
      </div>
    );
  }
}

class SwitchesInComponent extends Component {
  render() {
    return <div>{this.props.switches.keyswitchesName}</div>;
  }
}

export default SwitchesComponent;
