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
    let {
      path = "/",
      component: RouteComponent,
      exact = false,
      render,
      children
    } = this.props; // <Route/>上的属性
    let pathname = this.context.location.pathname;
    // 下面的这种匹配 不严谨， 需要用正则匹配
    // if ((exact && pathname === path) || (!exact && pathname.startsWith(path))) {
    //   return <RouteComponent />;
    // } else {
    //   return null;
    // }
    //路由的三个props
    let routeProps = {
      location: this.context.location,
      history: this.context.history,
      match: ""
    };

    let paramNames = [];
    let regexp = pathToRegexp(path, paramNames, { end: exact });
    paramNames = paramNames.map(item => item.name); //["id","age"]

    let matched = pathname.match(regexp); //['/user/detail/myid/10','myid',10]
    if (matched) {
      let [url, ...values] = matched;
      let params = values.reduce((memo, value, index) => {
        memo[paramNames[index]] = value;
        return memo;
      }, {}); //{id:'myid',age:10}

      let match = {
        url,
        path,
        isExact: pathname === url,
        params
      };
      routeProps.match = match;

      if (RouteComponent) {
        return <RouteComponent {...routeProps} />;
      } else if (render) {
        return render(routeProps);
      } else if (children) {
        return children(routeProps);
      } else {
        return null;
      }
    } else {
      if (children) {
        return children(routeProps);
      } else {
        return null;
      }
    }
  }
}
