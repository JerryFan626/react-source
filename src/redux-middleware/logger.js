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
export default logger;
