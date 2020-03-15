import React, { useContext } from "react";
import RouterContext from "./RouterContext";

export default function Redirect(props) {
  let routerContext = useContext(RouterContext);
  let pathname = routerContext.location.pathname;

  if (!props.from || props.from === pathname) {
    routerContext.history.push(props.to);
  }

  return null;
}
