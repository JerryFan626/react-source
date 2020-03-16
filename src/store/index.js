import { createStore } from "../redux";
// import reducer from "./reducer";
import reducers from "./reducers";

// let store = createStore(reducer);
// let store = createStore(reducers);

function logger({ dispatch, getState }) {
  return function(next) {
    //next是为了实现级联，next代表调用下一个中间件或者store.dispath
    return function(action) {
      // 这个函数就是重写后的dispatch
      console.log("Old State", getState());
      next(action);
      console.log("New State", getState());
    };
  };
}

function applyMiddleware(middleware) {
  return function(createStore) {
    return function(reducer) {
      //这个变成了类似 增强版的createStore
      let store = createStore(reducer); //原始的未修改的store
      let dispatch; //刚开始的时候dispatch = undefined
      middleware = middleware({
        dispatch: action => dispatch(action),
        getState: store.getState
      }); //=> 返回了 function(next){...}
      dispatch = middleware(store.dispatch);

      store = { ...store, dispatch };
      return store;
    };
  };
}

let store = applyMiddleware(logger)(createStore)(reducers);

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
