export{};
let output = (goUp: number, goNext: number, tower: number) => {
    return ((tower / goUp) * goNext) + tower;
}

console.log(output(0.2, 0.4, 100.0));