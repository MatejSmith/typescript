"use strict";
exports.__esModule = true;
var checkPalindrome = function (word) {
    var check;
    var reverse = "";
    var word_lenght = word.length;
    for (var i = word_lenght - 1; i >= 0; i--) {
        reverse = reverse + word.charAt(i);
    }
    check = word === reverse;
    return check;
};
if (checkPalindrome("oko")) {
    console.log("True");
}
else {
    console.log("False");
}