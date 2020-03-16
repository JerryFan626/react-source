import * as TYPES from "./action-types";

function increment() {
  return { type: TYPES.INCREMENT };
}

function decrement() {
  return { type: TYPES.DECREMENT };
}

export default {
  increment,
  decrement
};
