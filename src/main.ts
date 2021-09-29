export{};
let War = (array: Array<number>) => {
    let odd: number = 0;
    let even: number = 0;
    for (let i of array) {
        if (i % 2 == 0){
            odd = odd + i;
        }
    }

    for (let i of array) {
        if (i % 2 != 0){
            even = even + i;
        }
    }

    if (even > odd){
        return (even) - (odd);
    }
    else{
        return (odd) - (even);
    }
}

console.log(War(new Array(9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243)));