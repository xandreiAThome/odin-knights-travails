import { knightMoves } from "./index.js";
let result = knightMoves([0, 0]);
console.log(`You made it in ${result.length} moves! Here's your path:`);
for (let coord of result) {
  console.log(coord);
}
