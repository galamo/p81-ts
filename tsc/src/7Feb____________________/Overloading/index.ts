// TypeScript provides the concept of function overloading.
// You can have multiple functions with the same name but different parameter types and return type. However,
//  the number of parameters should be the same.

function add(a: string, b: string): string;
function add(a: number, b?: number): number;
function add(a, b) {
  return a + b;
}
type connection = any;
// function createConnection(url: string, user: string, token: string): connection;
// function createConnection(url: string): connection;
// function createConnection(url) {}

function add1(a: number, b: number): number;
function add1(a: number[], b: number[]): number;
function add1(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
  }
}
