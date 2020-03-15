import React from "react";
import { Route, Link, NavLink, Switch, Redirect } from "../react-router-dom";
import UserAdd from "./UserAdd";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

export default function(props) {
  console.log(props);
  return (
    <>
      <NavLink to="/user/list">UserList</NavLink> {"  "}
      <NavLink to="/user/add">UserAdd</NavLink> <br />
      <Switch>
        <Route path="/user/list" component={UserList} />
        <Route path="/user/add" component={UserAdd} />
        <Route path="/user/detail/:id" component={UserDetail} />
        <Redirect to="/user/list" />
      </Switch>
    </>
  );
}
