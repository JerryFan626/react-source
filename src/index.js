import React from "./react";
import ReactDOM from "./react-dom";
let style = { border: "1px solid red" };
let element = (
  <h1 style={style} id="hello" className="title">
    hello
  </h1>
);
console.log(element);

// function Welcome() {
//   return <div style={style}>Hello</div>;
// }

class Welcome extends React.Component {
  render() {
    return (
      <h1 style={style} id="hello" className="title">
        hello
      </h1>
    );
  }
}

ReactDOM.render(element, document.getElementById("root"));
