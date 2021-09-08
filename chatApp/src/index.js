import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
import allReducers from "./reducers/AllReducers";
import { Provider } from "react-redux";

//STORE

const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//display on console
console.log("okay we are in index");
// store.subscribe(() => console.log(store.getState()));

//DISPATCH
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
