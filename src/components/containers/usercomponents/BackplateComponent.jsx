import React, { Component } from 'react';
import { connect } from 'react-redux';

class BackplateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backplate: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.reload = this.componentDidMount.bind(this);
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

  handleClick(param) {
    // console.log(param);
    fetch('/backplate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ backplateName: param }),
    })
      .then((result) => result.json())
      .then((result) => {
        // console.log(result);
        setTimeout(this.reload(), 1000);
      })
      .catch((err) => console.log('err in fetch: ', err));
  }

  render() {
    let backplates = [];
    for (let i = 0; i < this.state.backplate.length; i++) {
      backplates.push(
        <BackplatesInComponent
          backplate={this.state.backplate[i]}
          key={i}
          addPart={this.props.addPart}
          goBack={this.props.goBack}
          reload={this.reload}
        />
      );
    }
    return (
      <div id="backplateComponent">
        <h2>Backplate</h2>
        {backplates}
        <div>
          <label htmlFor="backplateInput">Create New:</label>
          <input type="text" id="backplateInput" name="backplateInput" />
          <button
            type="submit"
            onClick={() =>
              this.handleClick(document.getElementById('backplateInput').value)
            }
          >
            Add Backplate
          </button>
        </div>
      </div>
    );
  }
}

class BackplatesInComponent extends Component {
  constructor(props) {
    super(props);
    this.deleteButton = this.deleteButton.bind(this);
  }

  deleteButton(deleteId) {
    // console.log(deleteId);
    fetch('/backplate', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: deleteId }),
    }).then((result) => {
      setTimeout(this.props.reload(), 1000);
    });
  }

  render() {
    const backplate = this.props.backplate;
    return (
      <div className="inComponent">
        <p>{backplate.backplateName}</p>
        <button
          className="chooseButton"
          type="submit"
          onClick={() => {
            this.props.addPart('backplate', backplate.backplateName);
            this.props.goBack();
          }}
        >
          Add
        </button>
        <button
          className="deleteButton"
          type="submit"
          onClick={() => {
            this.deleteButton(backplate._id);
          }}
        >
          X
        </button>
      </div>
    );
  }
}

export default BackplateComponent;
