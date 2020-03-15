import React from "react";
import { withRouter } from "../react-router-dom";
function NavHeader(props) {
  return <div onClick={() => props.history.push("/")}>{props.title}</div>;
}

export default withRouter(NavHeader);
