type Point = { x: number; y: number };

function getRandomCoordinates(): Point {
  return { x: Math.random(), y: Math.random() };
}

function calcLocation(point: Point): Point {
  return { x: Math.random() * point.x, y: Math.random() };
}

type Book = {
  readonly title: string;
  numberOfPages: number;
  publishedAt: string;
  author: Author;
};

type Author = {
  name: string;
  numberOfBooks?: number;
};

const book: Book = {
  title: "12 rules for life",
  numberOfPages: 345,
  publishedAt: new Date().toISOString(),
  author: {
    name: "jurden piterson",
    numberOfBooks: 100,
  },
};
// book.title = "13 rules for life";
console.log("test");

type Circle = {
  radius: number;
};

type ColorfullItem = {
  color: string;
};

const spairWheel: Circle = { radius: 200 };
const Car: ColorfullItem = { color: "red" };

const combinedItem: Circle & ColorfullItem = { radius: 200, color: "green" };
type CustomType = Circle & ColorfullItem;
const combinedItem2: CustomType = { radius: 200, color: "green" };
