"use strict";
exports.__esModule = true;
function sum(a, b) {
    return a + b;
}
function showSum(a, b) {
    console.log(a + b);
}
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
var user = {
    age: 27,
    gender: 'male',
    name: 'Vasyl'
};
console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);
