"use strict";
exports.__esModule = true;
var War = function (array) {
    var odd = 0;
    var even = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        if (i % 2 == 0) {
            odd = odd + i;
        }
    }
    for (var _a = 0, array_2 = array; _a < array_2.length; _a++) {
        var i = array_2[_a];
        if (i % 2 != 0) {
            even = even + i;
        }
    }
    if (even > odd) {
        return (even) - (odd);
    }
    else {
        return (odd) - (even);
    }
};
console.log(War(new Array(9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243)));