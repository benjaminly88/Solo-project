import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComponentContainer from './usercomponents/ComponentContainer.jsx';
import SelectionComponent from './usercomponents/SelectionComponent.jsx';
import MainHeader from './usercomponents/MainHeader.jsx';
import CaseComponent from './usercomponents/CaseComponent.jsx';
import BackplateComponent from './usercomponents/BackplateComponent.jsx';
import SwitchesComponent from './usercomponents/SwitchesComponent.jsx';
import KeycapsComponent from './usercomponents/KeycapsComponent.jsx';
import CordsComponent from './usercomponents/CordsComponent.jsx';
import SwitchOpenerComponent from './usercomponents/SwitchOpenerComponent.jsx';
import {
  toPage,
  resetStore,
  goBack,
  addPart,
  removePart,
} from '../../actions/actions.js';

const mapStateToProps = (store) => {
  return {
    case: store.case,
    backplate: store.backplate,
    switches: store.switches,
    keycaps: store.keycaps,
    cords: store.cords,
    switchopener: store.switchOpener,
    page: store.page,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toPage: (page) => dispatch(toPage(page)),
  resetStore: () => dispatch(resetStore()),
  goBack: () => dispatch(goBack()),
  addPart: (part, partName) => dispatch(addPart(part, partName)),
  removePart: (part) => dispatch(removePart(part)),
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    let loaded;
    let reset;

    if (this.props.page == false) {
      reset = (
        <div>
          <button
            id="resetButton"
            type="submit"
            onClick={() => this.props.resetStore()}
          >
            Reset
          </button>
        </div>
      );
    } else {
      reset = (
        <div>
          <button
            id="goBackButton"
            type="submit"
            onClick={() => this.props.goBack()}
          >
            Go Back
          </button>
        </div>
      );
    }

    if (this.props.page == false) {
      loaded = [
        <ComponentContainer />,
        <SelectionComponent
          toPage={this.props.toPage}
          case={this.props.case}
          backplate={this.props.backplate}
          switches={this.props.switches}
          keycaps={this.props.keycaps}
          cords={this.props.cords}
          switchopener={this.props.switchopener}
          removePart={this.props.removePart}
        />,
      ];
    } else if (this.props.page === 'case') {
      loaded = (
        <CaseComponent
          addPart={this.props.addPart}
          goBack={this.props.goBack}
        />
      );
    } else if (this.props.page === 'backplate') {
      loaded = (
        <BackplateComponent
          addPart={this.props.addPart}
          goBack={this.props.goBack}
        />
      );
    } else if (this.props.page === 'keyswitches') {
      loaded = (
        <SwitchesComponent
          addPart={this.props.addPart}
          goBack={this.props.goBack}
        />
      );
    } else if (this.props.page === 'keycaps') {
      loaded = (
        <KeycapsComponent
          addPart={this.props.addPart}
          goBack={this.props.goBack}
        />
      );
    } else if (this.props.page === 'cords') {
      loaded = (
        <CordsComponent
          addPart={this.props.addPart}
          goBack={this.props.goBack}
        />
      );
    } else if (this.props.page === 'switchopener') {
      loaded = (
        <SwitchOpenerComponent
          addPart={this.props.addPart}
          goBack={this.props.goBack}
        />
      );
    }

    return (
      <div id="mainContainer">
        {/* This is main container */}
        <MainHeader />
        <div id="containerHolder">
          {loaded}
          {reset}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
// export default MainContainer;
