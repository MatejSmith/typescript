export{};
let differenceMaxMin = (array: Array<number>) => {
    let min = array[0];
    let max = array[0];

    for (let i of array){
        if (i < min)
            min = i;
    }

    for (let x of array){
        if (x > max)
            max = x;
    }

    return (max) - (min);
}

console.log(differenceMaxMin(new Array(44, 32, 86, 19)));