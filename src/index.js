import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "./react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Profile from "./components/Profile";

ReactDOM.render(
  <Router>
    <Link to="/">Home</Link> <br />
    <Link to="/user">user</Link> <br />
    <Link to="/profile">profile</Link>
    <br />
    <Switch>
      <Route path="/" exact="true" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/profile" component={Profile} />
      <Redirect from="/home" to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
