"use strict";
exports.__esModule = true;
var Triangle = function (a, b, c) {
    return a + b > c && a + c > b && b + c > a;
};
if (!Triangle(4, 5, 8)) {
    console.log("False");
}
else {
    console.log("True");
}