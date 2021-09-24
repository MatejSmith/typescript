"use strict";
exports.__esModule = true;
var output = function (goUp, goNext, tower) {
    return ((tower / goUp) * goNext) + tower;
};
console.log(output(0.2, 0.4, 100.0));
