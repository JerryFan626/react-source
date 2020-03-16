import React from "react";
import action from "../store/actions/counter1";
import { connect } from "../react-redux";

function Counter1(props) {
  return (
    <div>
      <p>{props.num}</p>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.thunkAdd}>thunkAdd</button>
      <button onClick={props.promiseAdd}>PromiseAdd</button>
    </div>
  );
}
export default connect(state => state.counter1, action)(Counter1);
// 函数组件实现  （没有react-redux的connect前）
/*
// import store from "../store";
import React, { useState, useEffect, useContext } from "react";
import { connect } from "../react-redux";
import { bindActionCreators } from "../redux";
export default function Counter(props) {
  let obj = useContext(ReactReduxContext);
  console.log(obj);
  let { store } = useContext(ReactReduxContext);
  let [num, setNum] = useState(store.getState().counter1.num);

  let boundActions = bindActionCreators(action, store.dispatch);
 
  // 这个订阅方法不需要每次组件刷新都要执行
  // useEffect的第二个参数是依赖变量的数组 为[]就只会执行一次
  // useEffect里的函数需要返回一个销毁的函数,此销毁会自动在组件销毁的时候调用
   
  useEffect(() => {
    return store.subscribe(() => {
      setNum(store.getState().counter1.num);
    });
  }, [store]);

  return (
    <div>
      <p>{num}</p>
      <button onClick={boundActions.increment}>+</button>
      <button onClick={boundActions.decrement}>-</button>
    </div>
  );
}
*/

// 类组件实现
/* class Counter extends React.Component {
   state = { number: store.getState().number }
   componentDidMount() {
       //当仓库中的状态发生更新后，会让订阅函数执行.会更新当前组件的状态，状态更新后就会刷新组件
       this.unSubscribe = store.subscribe(() => {
           this.setState({ number: store.getState().number });
       });
   }
   componentWillUnmount() {
       this.unSubscribe();
   }
   render() {
       return (
           <div>
               <p>{this.state.number}</p>
               <button onClick={() => store.dispatch({ type: TYPES.ADD })}>+</button>
               <button onClick={() => store.dispatch({ type: TYPES.MINUS })}>-</button>
           </div>
       )
   }

} */
