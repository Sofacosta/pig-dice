// business logic
function Game (player, isDone) {
  this.player = {};
  this.isDone = false;
}

/*

What a player needs:
- User's total points
- User's current banked points
- How many times a user has rolled

*/

function Player (name, userTotal, rollCount, currentRollTotal) {
  this.name = name;
  this.userTotal = 0;
  this.rollCount = 0;
  this.currentRollTotal = 0;
}



// User Interface Logic

let newPlayer = new Player("playerOne", 0, 0, 0)
console.log(newPlayer)




// function Human(hairColor, numberOfEyes, height) {
//     this.hairColor = hairColor;
//     this.numberOfEyes = 2;
//     this.height = height;
// }
// let andy = new Human("brown", 2, "6'1")
// console.log(andy)

/*

Notes:
- 2 or more players
- 1 die
- First player to 100 pts
- avoid 1
- roll 2 - 6
- can roll infinite but IF rolled 1, all CURRENT cumunlated points  = 0 during that turn/round
- IF stopped rolling, then points banked (aka that round)

*/