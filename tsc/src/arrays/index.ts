export default function init() {}
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

function getLocation(loc: number[]): Coords | Point {
  const [x, y] = loc;
  return { x, y };
}
type shortResponse = { id: string; userName: string };
type longResponse = { id: string; userName: string; image: string };
type ServerResponse = shortResponse | longResponse;
function getApiData(url: string): ServerResponse {
  // async operation
  return { id: "a", userName: "galamo" };
}

function calculateTax({
  tax,
  price,
}: {
  tax: number;
  price: number | string;
}): number {
  if (typeof price === "string") {
    return Number(price.replace("$", "")) * tax;
  }

  return price * tax;
}

console.log(`new price is: ${calculateTax({ price: "40$", tax: 2 })}`);
console.log(`new price is: ${calculateTax({ price: 40, tax: 2 })}`);

type DayOfWeeks = "Sunday" | "Monday" | "Friday";

function getDayFromDate(date: Date): DayOfWeeks {
  if (date.getDay() === 1) return "Monday";
  // more logic...
  return "Sunday";
}
