"use strict";
exports.__esModule = true;
var differenceMaxMin = function (array) {
    var min = array[0];
    var max = array[0];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        if (i < min)
            min = i;
    }
    for (var _a = 0, array_2 = array; _a < array_2.length; _a++) {
        var x = array_2[_a];
        if (x > max)
            max = x;
    }
    return (max) - (min);
};
console.log(differenceMaxMin(new Array(44, 32, 86, 19)));