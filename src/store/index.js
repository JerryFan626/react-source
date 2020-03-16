import { createStore, applyMiddleware } from "../redux";
// import reducer from "./reducer";
import reducers from "./reducers";
import { promise, thunk, logger } from "../redux-middleware";
// let store = createStore(reducer);
// let store = createStore(reducers);

let store = applyMiddleware(promise, thunk, logger)(createStore)(reducers);

export default store;

// ---------------------------
// 下面这种模拟写中间件的缺点
// 1. 需要手动写dispatch方法 不好维护也不优雅
// 2. 多个中间件处理麻烦

/* // 中间件 logger的原理
// 1.备份老的dispatch
let dispatch = store.dispatch;
// 2.重写dispatch 加入新的内容
store.dispatch = function(action) {
  console.log("Old State", store.getState().counter1);
  dispatch(action);
  console.log("New State", store.getState().counter1);
}; */

/* 
// 异步中间件
let dispatch = store.dispatch;
store.dispatch = function(action) {
  setTimeout(() => {
    dispatch(action);
  }, 1000);
}; */
