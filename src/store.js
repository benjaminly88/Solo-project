import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/reducers.js';
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

// store.dispatch(loadMarkets());

export default store;
