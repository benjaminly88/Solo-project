import React, { Component } from 'react';
import { connect } from 'react-redux';

class CordsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cords: [],
    };
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

  render() {
    // console.log(this.state.case);
    let cords = [];
    for (let i = 0; i < this.state.cords.length; i++) {
      cords.push(<CordsInComponent cords={this.state.cords[i]} key={i}/>);
    }
    return (
      <div id="cordsComponent">
        <h2>Cords</h2>
        {cords}
      </div>
    );
  }
}

class CordsInComponent extends Component {
  render() {
    return <div>{this.props.cords.cordsName}</div>;
  }
}

export default CordsComponent;
