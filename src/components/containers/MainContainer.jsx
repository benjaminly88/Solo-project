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
  toCase,
  backplate,
  keyswitches,
  keycaps,
  cords,
  switchopener,
  resetStore,
  goBack,
} from '../../actions/actions.js';

const mapStateToProps = (store) => {
  return {
    case: store.case,
    backplate: store.backplate,
    switches: store.switches,
    keycaps: store.keycaps,
    cords: store.cords,
    switchOpener: store.switchOpener,
    page: store.page,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toCase: () => dispatch(toCase()),
  backplate: () => dispatch(backplate()),
  keyswitches: () => dispatch(keyswitches()),
  keycaps: () => dispatch(keycaps()),
  cords: () => dispatch(cords()),
  switchopener: () => dispatch(switchopener()),
  resetStore: () => dispatch(resetStore()),
  goBack: () => dispatch(goBack()),
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.stat);
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
          toCase={this.props.toCase}
          backplate={this.props.backplate}
          keyswitches={this.props.keyswitches}
          keycaps={this.props.keycaps}
          cords={this.props.cords}
          switchopener={this.props.switchopener}
        />,
      ];
    } else if (this.props.page === 'case') {
      loaded = <CaseComponent />;
    } else if (this.props.page === 'backplate') {
      loaded = <BackplateComponent />;
    } else if (this.props.page === 'keyswitches') {
      loaded = <SwitchesComponent />;
    } else if (this.props.page === 'keycaps') {
      loaded = <KeycapsComponent />;
    } else if (this.props.page === 'cords') {
      loaded = <CordsComponent />;
    } else if (this.props.page === 'switchOpener') {
      loaded = <SwitchOpenerComponent />;
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
