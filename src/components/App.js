import React from "react";
import "./App.css";

import { store } from "./store/mystore";
import {
  incrementByAction,
  decrmentByAction,
  updateTitleAction,
} from "./store/mystore.action";

import { useSelector, Provider, useDispatch } from "react-redux";

export const Counter = () => {
  const { value, title } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleTitleChage = () => {
    dispatch(updateTitleAction());
  };

  return (
    <div>
      <h1>{title}</h1>
      the value {value}
      <button
        onClick={() => {
          dispatch(incrementByAction(2));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrmentByAction());
        }}
      >
        -
      </button>
      <button onClick={handleTitleChage}>change title</button>
    </div>
  );
};

export const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
