let { pathToRegexp } = require("path-to-regexp");

let path = "/user/detail/:id/:age";
let pathName = "/user/detail/myid/10";
let paramNames = [];
let regexp = pathToRegexp(path, paramNames, { end: true });
let matched = pathName.match(regexp);
console.log(matched);
// console.log(regexp.test("/user/"));
// console.log(regexp.test("/user/1"));
