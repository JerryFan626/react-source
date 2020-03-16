export default function bindActionCreators(actionCreators, dispatch) {
  let boundActionCreators = {};

  for (let key in actionCreators) {
    //这个key就是action函数 function add()
    boundActionCreators[key] = function(...args) {
      //dispatch方法会返回派发的action
      return dispatch(actionCreators[key](...args)); //让老的action函数执行 然后被dispatch派发
    };
  }
  return boundActionCreators;
}

/*
功能
  将函数体内 由return { type: TYPES.ADD };
  转化为 return store.dispatch({ type: TYPES.ADD });
*/
