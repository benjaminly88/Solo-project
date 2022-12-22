import * as types from '../constants/actionTypes';

export const updateLocation = (data) => ({
  type: types.UPDATE_LOCATION,
  payload: data,
});

export const addMarket = (event) => (dispatch, getState) => {
  event.preventDefault();
  const location = getState().markets.newLocation;
  if (location) {
    dispatch({
      type: types.ADD_MARKET,
      payload: location,
    });
  }
};

export const resetStore = () => ({
  type: types.RESET_STORE,
});

export const goBack = () => ({
  type: types.GO_BACK,
});

export const toCase = () => ({
  type: types.TOCASE,
});

export const backplate = () => ({
  type: types.BACKPLATE,
});

export const keyswitches = () => ({
  type: types.KEYSWITCHES,
});

export const keycaps = () => ({
  type: types.KEYCAPS,
});

export const cords = () => ({
  type: types.CORDS,
});

export const switchopener = () => ({
  type: types.SWITCHOPENER,
});
