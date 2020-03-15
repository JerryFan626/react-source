import React, { useState, useRef, useEffect } from "react";
import { Propmt } from "../react-router-dom";
export default function(props) {
  let usernameRef = useRef();
  //用useRef可以使得每次得到的ref是同一个。因为是函数组件，用完就销毁了，所以不能用createRef();
  let [isBlocking, setBlocking] = useState(false);
  let [submiting, setSubmiting] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setBlocking(false);
    setSubmiting(true);
  }

  useEffect(function() {
    if (submiting) {
      let username = usernameRef.current.value;
      let userStr = localStorage.getItem("users");
      let users = userStr ? JSON.parse(userStr) : [];
      users.push({ id: Date.now() + "", username });
      localStorage.setItem("users", JSON.stringify(users));
      console.log(props.history);
      props.history.push("/user/list");
    }
  });

  return (
    //when是否要阻止跳转 如果用户有输入就要阻止。如果用户没有输止不需要阻止
    //原来就是如果when=true,就会缓存这个message函数，当跳转路径的时候就会使用这message函数返回值来进行提示
    <>
      <Propmt
        when={isBlocking}
        message={location => `请问你是否确定到跳转到${location.pathname}吗?`}
      />
      <h1>UserAdd</h1>
      <form onSubmit={handleSubmit}>
        用户名
        <input
          type="text"
          ref={usernameRef}
          onChange={event => setBlocking(event.target.value.length > 0)}
        />
        <button type="submit">提交</button>
      </form>
    </>
  );
}
