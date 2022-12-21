import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComponentContainer from './ComponentContainer.jsx';
import SelectionContainer from './SelectionContainer.jsx';
import MainHeader from './usercomponents/MainHeader.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="mainContainer">
        {/* This is main container */}
        <MainHeader />
        <div id="containerHolder">
          <ComponentContainer />
          <SelectionContainer />
        </div>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
export default MainContainer;
