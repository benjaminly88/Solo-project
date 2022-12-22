import React, { Component } from 'react';
import { connect } from 'react-redux';

class BackplateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backplate: [],
    };
  }

  componentDidMount() {
    // console.log('im in component');
    fetch('/backplate')
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        // console.log(result);
        this.setState({ backplate: result });
      })
      .catch((err) => console.log('err in fetch: ', err));
  }

  render() {
    let backplates = [];
    for (let i = 0; i < this.state.backplate.length; i++) {
      backplates.push(
        <BackplatesInComponent backplate={this.state.backplate[i]} key={i} />
      );
    }
    return (
      <div id="backplateComponent">
        <h2>Backplate</h2>
        {backplates}
      </div>
    );
  }
}

class BackplatesInComponent extends Component {
  render() {
    return <div>{this.props.backplate.backplateName}</div>;
  }
}

export default BackplateComponent;
