export{};
let RPS = (player_1: string, player_2: string) => {
    if ((player_1 === ("Rock") && player_2 === ("Scissors")) || (player_1 === ("Paper") && player_2 === ("Rock")) || (player_1 === ("Scissors") && player_2 === ("Paper"))) {
            console.log("Player 1 win");
        } else if ((player_2 === ("Rock") && player_1 === ("Scissors")) || (player_2 === ("Paper") && player_1 === ("Rock")) || (player_2 === ("Scissors") && player_1 === ("Paper"))) {
            console.log("Player 2 win");
        } else {
            console.log("Tie");
        }
}

RPS("Paper", "Rock");
RPS("Paper", "Scissors");
RPS("Scissors", "Scissors");