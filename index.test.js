import { knightMoves } from "./index.js";

describe("knightMoves", () => {
  test("returns the start and end square when one knight move away", () => {
    expect(knightMoves([0, 0], [1, 2])).toEqual([
      [0, 0],
      [1, 2],
    ]);
  });

  test("returns one of the shortest paths when multiple shortest paths exist", () => {
    const result = knightMoves([0, 0], [3, 3]);

    expect(result).toEqual(
      expect.arrayContaining([
        [0, 0],
        [3, 3],
      ]),
    );
    expect(result).toHaveLength(3);
    expect([
      JSON.stringify([
        [0, 0],
        [2, 1],
        [3, 3],
      ]),
      JSON.stringify([
        [0, 0],
        [1, 2],
        [3, 3],
      ]),
    ]).toContain(JSON.stringify(result));
  });

  test("returns the shortest path from one corner to the opposite corner", () => {
    const result = knightMoves([0, 0], [7, 7]);

    expect(result[0]).toEqual([0, 0]);
    expect(result[result.length - 1]).toEqual([7, 7]);
    expect(result).toHaveLength(7);
  });

  test("never includes squares outside the board", () => {
    const result = knightMoves([0, 0], [4, 3]);

    for (const [x, y] of result) {
      expect(x).toBeGreaterThanOrEqual(0);
      expect(y).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThanOrEqual(7);
      expect(y).toBeLessThanOrEqual(7);
    }
  });
});
