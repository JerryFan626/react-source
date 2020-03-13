/*
React.createElement("h1", {
  style: style,
  id: "hello",
  className: "title"
}, "hello");
=>
*/
/**
 * 类组件
 */
class Component {
  constructor(props) {
    this.props = props;
  }
  static isReactComponent = true;
}

// 判断兼容性 是有能使用Symbol
const hasSymbol = typeof Symbol === "function" && Symbol.for;
export const REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 0xeac7;

/**
 * JSX转为虚拟DOM
 * @param {*} type
 * @param {*} config
 * @param {*} children
 */
const createElement = function(type, config, children) {
  // 存储react元素属性
  let props = {};
  for (let key in config) {
    props[key] = config[key];
  }

  // 处理props.children
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    // 只有一个儿子的情况
    props.children = children;
  } else if (childrenLength > 1) {
    // argument是类数组 所以用call改变下this
    props.children = Array.prototype.slice.call(arguments, 2);
  }

  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    props
  };
};

export default { createElement, Component };
