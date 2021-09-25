"use strict";
exports.__esModule = true;
var multiplyByLength = function (array) {
    var x = 0;
    for (var a = 0; a < array.length; a++) {
        x = a + 1;
    }
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] * x;
    }
    return array;
};
console.log(multiplyByLength(new Array(1, 4, 6, 3, 7, 5)));