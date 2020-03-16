import { createStore } from "../redux";
// import reducer from "./reducer";
import reducers from "./reducers";

// let store = createStore(reducer);
let store = createStore(reducers);

export default store;
