"use strict";
exports.__esModule = true;
var Equal = function (a, b, c) {
    var numberOfEquals = 0;
    if (a == b && b == c) {
        numberOfEquals = 3;
    }
    else if (a == b || a == c || b == c) {
        numberOfEquals = 2;
    }
    return numberOfEquals;
};
console.log(Equal(2, 3, 4));
console.log(Equal(2, 3, 2));
console.log(Equal(2, 2, 2));