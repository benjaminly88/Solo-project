import { set } from 'mongoose';
import { backplate } from '../actions/actions';
import * as types from '../constants/actionTypes';

const initialState = {
  case: null,
  backplate: null,
  switches: null,
  keycaps: null,
  cords: null,
  switchOpener: null,
  page: false,
};

const marketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_STORE:
      return { ...initialState };

    case types.GO_BACK:
      return { ...state, page: false };

    case types.TOCASE: {
      return { ...state, page: 'case' };
    }
    case types.BACKPLATE: {
      return { ...state, page: 'backplate' };
    }
    case types.KEYSWITCHES: {
      return { ...state, page: 'keyswitches' };
    }
    case types.KEYCAPS: {
      return { ...state, page: 'keycaps' };
    }
    case types.CORDS: {
      return { ...state, page: 'cords' };
    }
    case types.SWITCHOPENER: {
      return { ...state, page: 'switchOpener' };
    }

    default:
      return state;
  }
};

export default marketsReducer;
