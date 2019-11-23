import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { entitiesReducer, queriesReducer, queryMiddleware } from "redux-query";
import superagentInterface from "redux-query-interface-superagent";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const getQueries = state => state.queries;
const getEntities = state => state.entities;

const reducer = combineReducers({
  entities: entitiesReducer,
  queries: queriesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      queryMiddleware(superagentInterface, getQueries, getEntities)
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
