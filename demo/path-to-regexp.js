let { pathToRegexp } = require("path-to-regexp");

let regexp = pathToRegexp("/user", [], { end: false });
console.log(regexp);

console.log(regexp.test("/"));
console.log(regexp.test("/user/asdf"));
// console.log(regexp.test("/user/"));
// console.log(regexp.test("/user/1"));
