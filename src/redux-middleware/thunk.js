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

export default thunk;
