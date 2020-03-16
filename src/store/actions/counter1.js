import * as TYPES from "../action-types";

function increment() {
  return { type: TYPES.INCREMENT1 };
}

function decrement() {
  return { type: TYPES.DECREMENT1 };
}

export default {
  increment,
  decrement
};
