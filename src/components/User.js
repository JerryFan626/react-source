import React from "react";
import { Route, Link } from "../react-router-dom";
import UserAdd from "./UserAdd";
import UserList from "./UserList";

export default function(props) {
  console.log(props);
  return (
    <>
      <Link to="/user/list">UserList</Link> <br />
      <Link to="/user/add">UserAdd</Link> <br />
      <Route path="/user/list" component={UserList} />
      <Route path="/user/add" component={UserAdd} />
    </>
  );
}
