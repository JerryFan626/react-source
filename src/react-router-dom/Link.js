import React from "react";
import RouterContext from "./RouterContext.js";

export default function Link(props) {
  return (
    <RouterContext.Consumer>
      {routeValue => (
        <a
          href={`#${typeof props.to === "object" ? props.to.pathname : props.to}`}
          onClick={() => routeValue.history.push(props.to)}
        >
          {props.children}
        </a>
      )}
    </RouterContext.Consumer>
  );
}
