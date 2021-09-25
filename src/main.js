"use strict";
exports.__esModule = true;
var Pie = function (total, recipients, each) {
    return each * recipients <= total;
};
if (!Pie(8, 3, 3)) {
    console.log("False");
}
else {
    console.log("True");
}