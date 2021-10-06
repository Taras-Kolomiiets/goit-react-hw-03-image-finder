import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import images from "./reducers/images";

const configureStore = () =>
  createStore(
    combineReducers({ images }),
    compose(applyMiddleware(thunk, logger))
  );

export default configureStore;
