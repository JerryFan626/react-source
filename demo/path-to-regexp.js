let { pathToRegexp } = require("path-to-regexp");

let regexp = pathToRegexp("/user", [], { end: true });
console.log(regexp);
// console.log(regexp.test("/user"));
// console.log(regexp.test("/user/"));
// console.log(regexp.test("/user/1"));
