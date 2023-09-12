let productName: string = "Perimeter81";
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

let business = "security";
console.log(business);

const products = ["P1", "P2", "P3"];
const result = products.map((item) => {
  return { name: item, type: "product" };
});

const salaries = [100, 222, 3300, 4400];
const highSalaries = salaries.reduce((sal: any, currentSalary: any) => {
  if (currentSalary > 100) {
    return sal + currentSalary;
  } else return sal;
}, 0);
highSalaries.toLowerCase();
console.log(highSalaries);

// never

export default function doSomething() {}
