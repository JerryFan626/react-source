import React from "react";
import ReactDOM from "react-dom";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import { Provider } from "./react-redux";
import store from "./store";
ReactDOM.render(
  <Provider store={store}>
    <Counter1 />
    <Counter2 />
  </Provider>,
  document.getElementById("root")
);
