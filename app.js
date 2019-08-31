
var add = (a,b) => a+b;
var sub = (a,b) => a-b;
var div = (a,b) => a/b;

var test = (a, b) => add(a, b) / sub(a, b);

module.exports = test

console.log(module);
