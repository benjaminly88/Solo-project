import * as types from '../constants/actionTypes';

const initialState = {
  case: null,
  backplate: null,
  switches: null,
  keycaps: null,
  cords: null,
  switchOpener: null,
  case: false,
};

const marketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_STORE:
      return { ...initialState };

    case types.BACKPLATE: {
      return { ...state, case: true };
    }
    // case types.ADD_MARKET:
    //   return {
    //     ...state,
    //     marketList: state.marketList.concat({
    //       location: action.payload,
    //       cards: 0,
    //     }),
    //     totalMarkets: state.totalMarkets + 1,
    //     newLocation: '',
    //     synced: false,
    //   };

    default:
      return state;
  }
};

export default marketsReducer;
