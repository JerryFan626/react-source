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
export default promise;
