import React, { Component } from 'react';
import { connect } from 'react-redux';

class KeycapsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keycaps: [],
    };
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

  render() {
    // console.log(this.state.keycaps);
    let keycaps = [];
    for (let i = 0; i < this.state.keycaps.length; i++) {
      keycaps.push(<KeycapsInComponent keycaps={this.state.keycaps[i]} key={i} />);
    }
    return (
      <div id="keycapsComponent">
        <h2>Keycaps</h2>
        {keycaps}
      </div>
    );
  }
}

class KeycapsInComponent extends Component {
  render() {
    return <div>{this.props.keycaps.keycapsName}</div>;
  }
}

export default KeycapsComponent;
