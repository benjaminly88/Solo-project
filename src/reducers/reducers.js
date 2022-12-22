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

    case types.TO_PAGE: {
      return { ...state, page: action.payload };
    }

    case types.ADD_PART: {
      if (action.part === 'case') {
        return { ...state, case: action.partName };
      } else if (action.part === 'backplate') {
        return { ...state, backplate: action.partName };
      } else if (action.part === 'switches') {
        return { ...state, switches: action.partName };
      } else if (action.part === 'keycaps') {
        return { ...state, keycaps: action.partName };
      } else if (action.part === 'cords') {
        return { ...state, cords: action.partName };
      } else if (action.part === 'switchopener') {
        return { ...state, switchOpener: action.partName };
      }
    }

    default:
      return state;
  }
};

export default marketsReducer;
