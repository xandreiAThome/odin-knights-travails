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
  if (!start || !end) throw Error("start and end coordinate required");
  if (start.length < 1 || end.length < 1)
    throw Error("start and end coordinate requires x and y coordinate: [x,y]");
  const availMoves = [];
  const visitedPos = new Set();
  availMoves.push({ position: [...start], path: [[...start]] });
  visitedPos.add(start.toString());

  while (availMoves.length > 0) {
    const current = availMoves.shift();
    const [x, y] = current.position;
    const path = current.path;

    if (x === end[0] && y === end[1]) {
      return path;
    }

    for (let [dx, dy] of generateMoves([x, y])) {
      if (!visitedPos.has([dx, dy].toString())) {
        availMoves.push({ position: [dx, dy], path: [...path, [dx, dy]] });
        visitedPos.add([dx, dy].toString());
      }
    }
  }

  return [];
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

export { knightMoves };
