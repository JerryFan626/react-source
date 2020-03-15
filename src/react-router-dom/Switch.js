/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import RouteContext from "./RouterContext";
import { pathToRegexp } from "path-to-regexp";

/**
 * 负责进行子组件的匹配，只会渲染第一个匹配上的子组件
 * useContext 是获取上下文对象的第三种方式
 * 第一种 static contextType (类中的)
 * 第二种 Consumer(函数中)
 * 第三种 还可以ReactHooks useContext 可以上下文对象
 * @param {*} props
 */
export default function Switch(props) {
  let routerContext = useContext(RouteContext);
  let children = props.children;
  children = Array.isArray(children) ? children : [children]; //不是数组的话 包装成数组

  let pathname = routerContext.location.pathname;
  for (let i = 0; i < children.length; i++) {
    // debugger;
    let child = children[i]; //这个child是虚拟DOM也是react元素
    /**
     * child:
     * React.createElement(Route,{exact,path,component})
       {type:Route,props:{exact,path,component}}
    */

    let { path = "/", component: RouteComponent, exact = false } = child.props;
    let regexp = pathToRegexp(path, [], { end: exact });

    console.log(pathname, path, exact, regexp);
    if (regexp.test(pathname)) {
      return child;
    }
  }

  return null;
}
