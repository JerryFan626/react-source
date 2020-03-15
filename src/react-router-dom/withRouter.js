import React from "react";
import { Route } from "../react-router-dom";

export default function(OldComponent) {
  // props={title:"title"}
  //routeProps={location,history,match}
  return props => (
    <Route render={routeProps => <OldComponent {...props} {...routeProps} />} />
  );
}
