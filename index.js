const possibleMoves = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

const MAX_X = 7;
const MAX_Y = 7;

function knightMoves(start, end) {
  const availMoves = [start];
  const visitedPos = new Set();

  while (availMoves.length > 0) {
    const [x, y] = availMoves.shift();
    visitedPos.add(`${x},${y}`);
    for (let [dx, dy] of generateMoves([x, y])) {
      if (!visitedPos.has(`${dx},${dy}`)) {
        availMoves.push([dx, dy]);
      }
    }
    console.log(availMoves);
    console.log(visitedPos);
  }
}

function generateMoves(pos) {
  const availMoves = [];

  for (let i of possibleMoves) {
    if (
      i[0] + pos[0] <= MAX_X &&
      i[1] + pos[1] <= MAX_Y &&
      i[0] + pos[0] >= 0 &&
      i[1] + pos[1] >= 0
    ) {
      availMoves.push([i[0] + pos[0], i[1] + pos[1]]);
    }
  }

  return availMoves;
}

knightMoves([0, 0]);
