// Call Signatures
// In JavaScript, functions can have properties in addition
//  to being callable. However, the function type expression
//  syntax doesn’t allow for declaring properties.
//  If we want to describe something callable with properties,
//   we can write a call signature in an object type:

interface EmailFunction {
  defaultDomain: string;
  (userName: string): string;
}
const users = ["galamouyal", "hili", "gili", "lior"];

function runEmailCalc(fnCallback: EmailFunction) {
  console.log(`${fnCallback.defaultDomain} => ${fnCallback("galamouyal")}`);
}
function extractEmail(userName: string) {
  return `${userName}${extractEmail.defaultDomain}`;
}
extractEmail.defaultDomain = "@gmail.com";

runEmailCalc(extractEmail);
console.log(users.map(extractEmail));

// EX
interface SortFunction {
  sort: string;
  (a: number, b: number): string;
}
function sortFn(a: number, b: number) {
  if (sortFn.sort === "asc") return a - b;
  else return b - a;
}
sortFn.sort = "asc";
const numbers = [1, 4, 3, 2, 5, 6, 5, 4, 5, 2, 2, 3, 8, 9];
sortFn.sort = "desc";
console.log(numbers.sort(sortFn));
