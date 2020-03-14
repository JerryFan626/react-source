import React from "react";
import RouterContext from "./RouterContext.js";

/**
 * Route代表一条路由规则
 * path代表此规则的路径
 * component代表要渲染的组件
 * 如果说当前路径 和 pathname匹配
 */
export default class Route extends React.Component {
  static contextType = RouterContext;

  render() {
    let { path = "/", component: RouteComponent, exact = false } = this.props; // <Route/>上的属性
    let pathname = this.context.location.pathname;
    if ((exact && pathname === path) || (!exact && pathname.startsWith(path))) {
      return <RouteComponent />;
    } else {
      return null;
    }
  }
}
