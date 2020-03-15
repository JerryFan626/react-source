import React, { useContext } from "react";
import RouterContext from "./RouterContext";

export default function Propmt(props) {
  let { when, message } = props;
  let routerContext = useContext(RouterContext);
  if (when) {
    routerContext.history.block(message);
  } else {
    routerContext.history.block(null);
  }
  return null;
}
