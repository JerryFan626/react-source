import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink
} from "./react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Private from "./components/Private";

ReactDOM.render(
  <Router>
    <NavLink to="/" exact={true}>
      Home
    </NavLink>
    {"  "}
    <NavLink to="/user">User</NavLink> {"  "}
    <NavLink to="/profile">Profile</NavLink> {"  "}
    <NavLink to="/login">Login</NavLink> {"  "}
    <Link to="/login">{localStorage.getItem("login")}</Link>
    <br />
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/user" component={User} />
      <Private path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
      <Redirect from="/home" to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
