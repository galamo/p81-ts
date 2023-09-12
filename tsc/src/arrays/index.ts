const number: Array<number> = [];
const ages: number[] = [];

type Coords = {
  x: number;
  y: number;
};

const points: Coords[] = [];
points.push({ x: 1, y: 22 });
// TS Error
// points.push({ x: 1, locationY: 22 });

const combinedArray: Array<number | string | boolean> = [];
combinedArray.push(1);
combinedArray.push("1");
combinedArray.push(true);

const gameBoard: number[][][] = [[[1]]];



