import React, { useRef } from "react";

export default function Login(props) {
  let usernameRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();

    let username = usernameRef.current.value;
    localStorage.setItem("login", username);

    // 如果跳转过来的，登录完了调回去
    if (props.location.state) {
      return props.history.push(props.location.state.from);
    }
    return props.history.push("/");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        用户名
        <input type="text" ref={usernameRef} />
        <button type="submit">登录</button>
      </form>
    </>
  );
}
