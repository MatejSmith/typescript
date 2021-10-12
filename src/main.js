var canCapture = function (array) {
    var First = "";
    var Second = "";
    var Third = "";
    var Fourth = "";
    for (var i = 1; i < array[0].length; i++) {
        First = First + array[0].charAt(i);
    }
    for (var i = 1; i < array[1].length; i++) {
        Second = Second + array[1].charAt(i);
    }
    for (var i = 0; i < array[0].length - 1; i++) {
        Third = Third + array[0].charAt(i);
    }
    for (var i = 0; i < array[1].length - 1; i++) {
        Fourth = Fourth + array[1].charAt(i);
    }
    return First === Second || Third === Fourth;
};
console.log(canCapture(new Array("A8", "E8")));
console.log(canCapture(new Array("A1", "B2")));
console.log(canCapture(new Array("H4", "H3")));
console.log(canCapture(new Array("F5", "C8")));
