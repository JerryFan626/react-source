export default function combineReducers(reducers) {
  // state是合并后的 state={counter1:{number:0}, counter2:{number0}}
  return function(state = {}, action) {
    let nextState = {};

    for (let key in reducers) {
      let reducerForKey = reducers[key]; //其中一个reducer  eg:counter1
      let previousStateForKey = state[key]; //这个reducer的state  eg:{num:0}
      let nextStateForKey = reducerForKey(previousStateForKey, action); //执行了这个reducer
      nextState[key] = nextStateForKey;
    }

    return nextState;
  };
}
