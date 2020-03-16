import { compose } from "../redux";
function applyMiddleware(...middlewares) {
  return function(createStore) {
    return function(reducer) {
      //这个变成了类似 增强版的createStore
      let store = createStore(reducer); //原始的未修改的store
      let dispatch; //刚开始的时候dispatch = undefined
      let middlewareAPI = {
        getState: store.getState,
        dispatch: action => dispatch(action)
        /* 为什么这里不能写store.dispath
         * 比如说现在有一个需求  number初始值=100 当我点击-号的时候，让number向下减，减至0停下来
         * 为什么不能是store.dispatch,而需要最终重写后的 dispatch
         * 是为了让我们在中间件里可以重头再来，重新派发
         * 用函数包裹，就是用闭包，可以引用到外部的dispatch 外部改变，可以影响到内部
         */
      }; //=> 返回了 function(next){...}
      let chain = middlewares.map(middleware => middleware(middlewareAPI));
      dispatch = compose(...chain)(store.dispatch);

      store = { ...store, dispatch };
      return store;
    };
  };
}

export default applyMiddleware;
