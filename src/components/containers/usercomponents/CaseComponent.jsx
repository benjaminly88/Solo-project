import React, { Component } from 'react';
import { connect } from 'react-redux';

class CaseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      case: [],
    };
  }

  componentDidMount() {
    // console.log('im in component');
    fetch('/case')
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        // console.log(result);
        this.setState({ case: result });
      })
      .catch((err) => console.log('err in fetch: ', err));
  }

  render() {
    // console.log(this.state.case);
    let cases = [];
    for (let i = 0; i < this.state.case.length; i++) {
      cases.push(<CasesInComponent case={this.state.case[i]} key={i}/>);
    }
    return (
      <div id="caseComponent">
        <h2>Cases</h2>
        {cases}
      </div>
    );
  }
}

class CasesInComponent extends Component {
  render() {
    return <div>{this.props.case.caseName}</div>;
  }
}

export default CaseComponent;
