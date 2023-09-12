# Typescript

### Typescript compiler

#### Quick start

1. Install - `npm install typescript --save-dev`
2. create appropriate script
3. compile the code `tsc`

#### Compiler options

1. Options:

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "target": "ES6"
  },

  "exclude": ["node_modules"]
}
```

2. compile the code `tsc`
3. use `watch` mode `tsc --watch`

### Types

##### Example_1:

simple types

##### Ex_1:

Create the following variables and assign them values

- vacationLocation
- numberOfDays
- from
- to
- price
  at the end, log all of them in a nice message:

##### Example_2:

- reassign values in Typescript
- using string function and numbers
- inference

##### Example_3:

- Delayed init `Array<string>` let of products

##### Ex_3:

Complete the missing type and let TS throw Error

```javascript
const salaries = [100, 222, 3300, 4400];
const highSalaries = salaries.reduce((sal: any, currentSalary: any) => {
  if (currentSalary > 100) {
    return sal + currentSalary;
  } else return sal;
}, 0);
highSalaries.toLowerCase();
console.log(highSalaries);
```

### Functions

##### Example_1:

- greet + arithmetic function
- run time validation
- default paramters
- void, primitive type
- never ( loop, throw )

##### Ex_1:

- Create a function that receive `productName` string & `print` boolean.
- The function will print the `productName` only if the print value is true
- make the `print` default false
- make `print` optional
- make sure to put

##### Ex_2:

- Write a function called "twoFer" that accepts a person's name
- It should return a string in the format `one for <name>, one for me`
- If no name is provided, it should default to "you"

- twoFer() => "One for you, one for me"
- twoFer("Gal") => "One for Gal, one for me"

##### Ex_3:

Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year

- isLeapYear(2012) => true
- isLeapYear(2013) => false

`To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo`

### Objects

1. function with Object exmaple
2. return type
3. excess properties ignored
4. Type aliases

### Casting

##### Ex_1:

- Create a function that receive elementId string & return the element value;

## Exercises

1. Queue Class with Generics
