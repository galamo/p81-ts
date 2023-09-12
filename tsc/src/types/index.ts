const productName: string = "Perimeter81";
const cost: number = 100000;
const usefull: boolean = true;
const licenseFrom: Date = new Date();
const licenseTo: string = new Date().toISOString();

let temp: undefined;
let myNallabaleItem: null;

console.log(
  `The product is: ${productName} it will cost : ${cost}, 
  available from: ${licenseFrom} to: ${licenseTo} is the product valuable ? ${usefull} `
);

// never

export default function doSomething() {}
