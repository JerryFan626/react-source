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
import Login from "./components/Login";
import Private from "./components/Private";

ReactDOM.render(
  <Router>
    <Link to="/">Home</Link> ___
    <Link to="/user">User</Link> ___
    <Link to="/profile">Profile</Link>___
    <Link to="/login">Login</Link>
    <div>{localStorage.getItem("login")}</div>
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
