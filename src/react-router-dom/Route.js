import React from "react";
import RouterContext from "./RouterContext.js";
import { pathToRegexp } from "path-to-regexp";

/**
 * Route代表一条路由规则
 * path代表此规则的路径
 * component代表要渲染的组件
 * 如果说当前路径 和 pathname匹配
 */
export default class Route extends React.Component {
  static contextType = RouterContext;

  render() {
    /**
     * exact 为false 意味着   /user 会被 /user包含的字符串所匹配
     */
    let { path = "/", component: RouteComponent, exact = false } = this.props; // <Route/>上的属性
    let pathname = this.context.location.pathname;
    // 下面的这种匹配 不严谨， 需要用正则匹配
    // if ((exact && pathname === path) || (!exact && pathname.startsWith(path))) {
    //   return <RouteComponent />;
    // } else {
    //   return null;
    // }

    let regexp = pathToRegexp(path, [], { end: exact });
    if (regexp.test(pathname)) {
      return <RouteComponent {...this.context} />;
    }
    return null;
  }
}
