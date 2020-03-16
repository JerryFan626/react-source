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

// 可以派发一个函数
function thunk({ dispatch, getState }) {
  return function(next) {
    return function(action) {
      if (typeof action === "function") {
        action(dispatch, getState);
      } else {
        next(action);
      }
    };
  };
}

function promise({ dispatch, geetState }) {
  return function(next) {
    return function(action) {
      // 如果action的then属性是一个函数的话
      if (typeof action.then === "function") {
        action.then(dispatch);
      } else {
        next(action);
      }
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
        getState: store.getState,
        dispatch: action => dispatch(action)
        /* 为什么这里不能写store.dispath
         * 比如说现在有一个需求  number初始值=100 当我点击-号的时候，让number向下减，减至0停下来
         * 为什么不能是store.dispatch,而需要最终重写后的 dispatch
         * 是为了让我们在中间件里可以重头再来，重新派发
         * 用函数包裹，就是用闭包，可以引用到外部的dispatch 外部改变，可以影响到内部
         */
      }); //=> 返回了 function(next){...}
      dispatch = middleware(store.dispatch);

      store = { ...store, dispatch };
      return store;
    };
  };
}

let store = applyMiddleware(promise)(createStore)(reducers);

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
