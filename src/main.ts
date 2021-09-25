export{};
let checkPalindrome = (word: string) =>{
    let check: boolean;
    let reverse: string = "";
    let word_lenght: number = word.length;
    for (let i: number = word_lenght - 1; i >= 0; i--){
        reverse = reverse + word.charAt(i);
    }

    check = word === reverse;
    return check;
}

if (checkPalindrome("oko")){
    console.log("True");
}
else{
    console.log("False");
}