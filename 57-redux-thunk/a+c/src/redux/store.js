import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger';
import rootReducer from "./reducer";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
rootReducer, 
storeEnhancers(applyMiddleware(logger))
);

export default store;