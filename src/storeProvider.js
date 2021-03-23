import { applyMiddleware, compose, createStore } from "redux";
import RootReducer from './reducers/RootReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  RootReducer,
  {},
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store;