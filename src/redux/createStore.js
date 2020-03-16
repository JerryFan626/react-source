export default function createStore(reducer, initialState) {
  let state = initialState; //初始的状态
  let listeners = [];

  //获取当前的状态
  function getState() {
    return state;
  }

  // 派发动作
  function dispatch(action) {
    state = reducer(state, action);
    //不管你传的是什么动作，不管有没有引起状态的改变，都要执行监听函数
    listeners.forEach(listener => listener());
    return action;
  }
  // 在仓库创建的时候回派发一次动作，目的是为了给初始化状态赋值
  dispatch({ type: "@@REDUX_INIT" });

  // 订阅  返回的是一个取消订阅的函数
  function subscribe(listener) {
    listeners.push(listener);
    return function() {
      let index = listeners.indexOf(listener);
      listeners.slice(index, 1);
    };
  }

  return {
    getState,
    dispatch,
    subscribe
  };
}
