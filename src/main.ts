export{};
let Pie = (total: number, recipients: number, each: number) => {
    return each * recipients <= total;
}

if(!Pie(8, 3, 3)){
    console.log("False");
}
else{
    console.log("True");
}