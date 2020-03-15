import React from "react";

export default function UserDetail(props) {
  let user = props.location.state;

  // 因为props.location.state;中的state在刷新后，就没有了
  if (!user) {
    let userStr = localStorage.getItem("users");
    let users = userStr ? JSON.parse(userStr) : [];
    user = users.find(user => user.id === props.match.params.id);
  }

  return (
    <div>
      <p>ID:{user.id}</p>
      <p>用户名:{user.username}</p>
    </div>
  );
}
