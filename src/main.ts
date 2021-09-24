export{};
let Equal = (a: number, b: number, c: number) =>{
    let numberOfEquals: number = 0;
    if(a == b && b == c){
        numberOfEquals = 3;
    }
    else if(a == b || a == c || b == c){
        numberOfEquals = 2;
    }
    return numberOfEquals;
}

console.log(Equal(2,3,4));
console.log(Equal(2,3,2));
console.log(Equal(2,2,2));