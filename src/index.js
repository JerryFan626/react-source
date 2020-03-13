import React from "react";
import ReactDOM from "react-dom";

let element = (
  <div id="ele" className="ele" style={{ border: "1px solid red" }}>
    Hello
  </div>
);
console.log(element);

ReactDOM.render(element, document.getElementById("root"));
