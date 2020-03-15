import React, { useRef } from "react";
export default function(props) {
  let usernameRef = useRef();
  //用useRef可以使得每次得到的ref是同一个。因为是函数组件，用完就销毁了，所以不能用createRef();

  function handleSubmit(event) {
    event.preventDefault();
    let username = usernameRef.current.value;
    let userStr = localStorage.getItem("users");
    console.log(typeof userStr, userStr, JSON.parse(userStr));
    let users = userStr ? JSON.parse(userStr) : [];
    users.push({ id: Date.now() + "", username });
    localStorage.setItem("users", JSON.stringify(users));
    props.history.push("/user/list");
  }
  return (
    <>
      <h1>UserAdd</h1>
      <form onSubmit={handleSubmit}>
        用户名
        <input type="text" ref={usernameRef} />
        <button type="submit">提交</button>
      </form>
    </>
  );
}
