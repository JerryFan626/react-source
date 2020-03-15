import React, { useState, useEffect } from "react";
export default function UserList(props) {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    let usersStr = localStorage.getItem("users");
    let users = usersStr ? JSON.parse(usersStr) : [];
    setUsers(users);
  }, []);

  return (
    <>
      <h1>UserList</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </>
  );
}
/*
export default class UserList extends React.Component {
  state = { users: [] };
  componentDidMount() {
    let usersStr = localStorage.getItem("users");
    let users = usersStr ? JSON.parse(usersStr) : [];
    this.setState({ users });
  }
  render() {
    return (
      <ul>
        {this.state.users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    );
  }
}
*/
