import React, { Component } from 'react';
import { connect } from 'react-redux';

class SwitchOpenerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchopener: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.reload = this.componentDidMount.bind(this);
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

  handleClick(param) {
    // console.log(param);
    fetch('/switchopener', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ switchopenerName: param }),
    })
      .then((result) => result.json())
      .then((result) => {
        // console.log(result);
        setTimeout(this.reload(), 1000);
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
          addPart={this.props.addPart}
          goBack={this.props.goBack}
          reload={this.reload}
        />
      );
    }
    return (
      <div id="switchopenerComponent">
        <h2>Switch Openers</h2>
        {switchopeners}
        <div>
          <label htmlFor="switchopenerInput">Create New:</label>
          <input type="text" id="switchopenerInput" name="switchopenerInput" />
          <button
            type="submit"
            onClick={() =>
              this.handleClick(
                document.getElementById('switchopenerInput').value
              )
            }
          >
            Add Switch Openers
          </button>
        </div>
      </div>
    );
  }
}

class SwitchOpenersInComponent extends Component {
  constructor(props) {
    super(props);
    this.deleteButton = this.deleteButton.bind(this);
  }

  deleteButton(deleteId) {
    // console.log(deleteId);
    fetch('/switchopener', {
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
    const switchopener = this.props.switchopener;
    return (
      <div className="inComponent">
        <p>{switchopener.switchopenerName}</p>
        <button
          className="chooseButton"
          type="submit"
          onClick={() => {
            this.props.addPart('switchopener', switchopener.switchopenerName);
            this.props.goBack();
          }}
        >
          Add
        </button>
        <button
          className="deleteButton"
          type="submit"
          onClick={() => {
            this.deleteButton(switchopener._id);
          }}
        >
          X
        </button>
      </div>
    );
  }
}

export default SwitchOpenerComponent;
