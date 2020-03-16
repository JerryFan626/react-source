import React from "react";
import action from "../store/actions/counter2";
import { connect } from "../react-redux";

function Counter2(props) {
  return (
    <div>
      <p>{props.num}</p>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
}
export default connect(state => state.counter2, action)(Counter2);
