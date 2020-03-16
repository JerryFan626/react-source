import { createStore } from "./redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { num: state.num + 1 };
    case DECREMENT:
      return { num: state.num - 1 };
    default:
      return state;
  }
}
let initialState = { num: 0 };
let store = createStore(reducer, initialState);
let root = document.getElementById("root");
let incrementBtn = document.getElementById("increment-btn");
let decrementBtn = document.getElementById("decrement-btn");

const render = () => {
  root.innerHTML = store.getState().num;
};
render();
store.subscribe(render);
incrementBtn.addEventListener("click", () => {
  store.dispatch({ type: INCREMENT });
});
decrementBtn.addEventListener("click", () => {
  store.dispatch({ type: DECREMENT });
});
