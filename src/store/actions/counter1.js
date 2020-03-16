import * as TYPES from "../action-types";

function increment() {
  return { type: TYPES.INCREMENT1 };
}

function decrement() {
  return { type: TYPES.DECREMENT1 };
}

//obj.__proto__=Object.prototype
//正常的action必须是一个纯对象，不能是函数 {type:'add'}
function thunkAdd() {
  //function.__proto__=Function.prototype
  return function(dispatch, getState) {
    setTimeout(function() {
      dispatch({ type: TYPES.INCREMENT1 });
    }, 1000);
  };
}
function promiseAdd() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({ type: TYPES.INCREMENT1 });
    }, 1000);
  });
}
export default {
  increment,
  decrement,
  thunkAdd,
  promiseAdd
};
