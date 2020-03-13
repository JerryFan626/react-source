/**
 * 虚拟DOM转为真实DOM
 * @param {*} node
 * @param {*} parent
 */
const render = function(node, parent) {
  if (typeof node === "string") {
    // 文本节点
    return parent.appendChild(document.createTextNode(node));
  }

  /*
    type 真实DOM的标签
    props 真实DOM的属性
  */
  let type, props, ref;

  type = node.type; //可能是函数组件、类组件、标签

  ref = node.ref;
  ref = { current: null };

  props = node.props; // props.children

  // debugger;
  // 将类组件和函数组件 渲染 为HTML标签
  if (type.isReactComponent) {
    // 为类组件

    let element = new type(props).render(); //创建类实例，执行render，得到渲染后的虚拟DOM
    type = element.type;
    props = element.props;
    if (typeof element.type === "function") {
      // 这里需要再判断type是不是 类或者函数组件， 是则递归下去
      return render(element, parent);
    }
  } else if (typeof type === "function") {
    // 函数组件
    let element = type(props); //执行函数 得到渲染对象
    type = element.type;
    props = element.props;
    if (typeof element.type === "function") {
      // 这里需要再判断type是不是 类或者函数组件， 是则递归下去
      return render(element, parent);
    }
  }

  let domElement = document.createElement(type); //创建标签的真实DOM元素
  ref.current = domElement;

  // 迭代属性对象中的所有属性  将这些属性转化为HTML对应的属性
  for (let propName in props) {
    if (propName === "children") {
      // 这是该标签的儿子节点

      let children = props.children;
      if (!Array.isArray(children)) {
        //之前只有单个儿子节点 是赋值的单个对象，这里全部转为数组
        children = [children];
      }
      // 直接渲染，刚刚创建的真实DOM元素为父节点
      children.forEach(child => render(child, domElement));
    } else if (propName === "className") {
      domElement.className = props.className;
    } else if (propName === "style") {
      // 行内样式
      let styleObject = props.style;

      // backgroundColor => background-color
      let cssText = Object.keys(styleObject)
        .map(attr => {
          return `${attr.replace(/A-Z/g, () => {
            return "-" + arguments[1].toLowerCase();
          })}:${styleObject[attr]}`;
        })
        .join(";");
      domElement.style.cssText = cssText;
    } else if (propName === "htmlFor") {
      domElement.setAttribute("for", props[propName]);
    } else {
      if (propName.startsWith("__")) continue; //除掉__self之类的

      console.log(propName, props[propName]);
      domElement.setAttribute(propName, props[propName]);
    }
  }

  parent.appendChild(domElement);
};

export default {
  render
};
