export{};
let Triangle = (a: number, b: number, c: number) => {
    return a + b > c && a + c > b && b + c > a;
}

if (!Triangle(4, 5, 8)) {
            console.log("False")
        } else {
            console.log("True");
}