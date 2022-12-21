import * as types from '../constants/actionTypes';

export const updateLocation = (data) => ({
  type: types.UPDATE_LOCATION,
  payload: data,
});

export const addCard = (id) => ({
  type: types.ADD_CARD,
  payload: id,
});

export const deleteCard = (id) => (dispatch, getState) => {
  if (getState().markets.marketList[id].cards > 0) {
    dispatch({ type: types.DELETE_CARD, payload: id });
  }
};

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

export const resetStore = () => (dispatch) => {
  dispatch({
    type: types.RESET_STORE,
  });
};

export const backplate = () => ({
  type: types.BACKPLATE,
  payload: data,
});

export const keyswitches = () => ({
  type: types.KEYSWITCHES,
  payload: data,
});

export const keycaps = () => ({
  type: types.KEYCAPS,
  payload: data,
});

export const cords = () => ({
  type: types.CORDS,
  payload: data,
});

export const switchopener = () => ({
  type: types.SWITCHOPENER,
  payload: data,
});
