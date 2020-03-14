import React from "./index";

// 一个组件什么时候才能更新？
// 只有当属性或者状态发生变化的时候
function createContext(initValue) {
  let contextValue = initValue;
  class Provider extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}; //状态修改才能引起组件更新
      contextValue = props.value;
    }
    // 之前可以这么实现，但是这个方法废弃了
    // componentWillReceiveProps(nextProps) {
    //   contextValue = nextProps.value;
    // }
    // 为了状态修改时，可以导致组件更新
    static getDerivedStateFromProps(nextProps, prevState) {
      contextValue = nextProps.value;
      return {}; //返回值是新的状态对象 this.state
    }
    render() {
      return this.props.children;
    }
  }

  class Consumer extends React.Component {
    render() {
      return this.props.children(contextValue);
    }
  }

  return { Provider, Consumer };
}

export default createContext;
