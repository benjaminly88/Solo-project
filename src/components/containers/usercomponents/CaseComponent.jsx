import React, { Component } from 'react';
import { connect } from 'react-redux';

class CaseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      case: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.reload = this.componentDidMount.bind(this);
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

  handleClick(param) {
    // console.log(param);
    fetch('/case', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ caseName: param }),
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
    let cases = [];
    for (let i = 0; i < this.state.case.length; i++) {
      cases.push(
        <CasesInComponent
          case={this.state.case[i]}
          key={i}
          addPart={this.props.addPart}
          goBack={this.props.goBack}
          // handleClick={this.handleClick}
        />
      );
    }
    return (
      <div id="caseComponent">
        <h2>Cases</h2>
        {cases}
        <div>
          <label htmlFor="caseInput">Create New:</label>
          <input type="text" id="caseInput" name="caseInput" />
          <button
            type="submit"
            onClick={() =>
              this.handleClick(document.getElementById('caseInput').value)
            }
          >
            Add Case
          </button>
        </div>
      </div>
    );
  }
}

class CasesInComponent extends Component {
  render() {
    const cases = this.props.case;
    return (
      <div className="inComponent">
        <p>{cases.caseName}</p>
        <button
          className="chooseButton"
          type="submit"
          onClick={() => {
            this.props.addPart('case', cases.caseName);
            this.props.goBack();
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default CaseComponent;
