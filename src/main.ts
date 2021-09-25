export{};

let multiplyByLength = (array: Array<number>) => {
    let x: number = 0;
    for (let a: number = 0; a < array.length; a++){
        x = a + 1;
    }
    for (let i: number = 0; i < array.length; i++){
        array[i] = array[i] * x;
    }
    return array;
}

console.log(multiplyByLength(new Array(1, 4, 6, 3, 7, 5)));