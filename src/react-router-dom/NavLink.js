import React from "react";
import { Route, Link } from "../react-router-dom";

import "./NavLink.css";

export default function NavLink(props) {
  let { to, exact, children } = props;
  return (
    <Route
      path={to}
      exact={exact}
      children={routerProps => (
        <Link to={to} className={routerProps.match ? "active" : ""}>
          {children}
        </Link>
      )}
    />
  );
}
/**
 * 使用Route来源的好处是我可以在children函数里通过props.match是否有值来判断是否匹配
 * NavLink 原理是这样的
 * 跟Link很像，或者说是基于Link
 * 多了一个功能，如果to里的路径和当前的地址栏的路径匹配的话，则增加一个active类名
 *
 * render component都有共同的特点，就是说只有Route的path跟路径匹配的话才会渲染
 * children也是一个函数，但是它不管路径 是否匹配都会进行渲染
 */
