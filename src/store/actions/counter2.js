import * as TYPES from "../action-types";

function increment() {
  return { type: TYPES.INCREMENT2 };
}

function decrement() {
  return { type: TYPES.DECREMENT2 };
}

export default {
  increment,
  decrement
};
