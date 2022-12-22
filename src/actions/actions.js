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

export const addPart = (part, partName) => ({
  type: types.ADD_PART,
  part: part,
  partName: partName,
});

export const resetStore = () => ({
  type: types.RESET_STORE,
});

export const goBack = () => ({
  type: types.GO_BACK,
});

export const toPage = (page) => ({
  type: types.TO_PAGE,
  payload: page,
});
