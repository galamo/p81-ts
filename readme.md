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

1. function with Object example
2. return type
3. excess properties ignored
4. Type aliases
5. Structured types

#### Example

1. coordinates, randomCoordinates
2. type point
3. Nested Objects - Book example
4. readOnly
5. intersection - Colorfull circle

##### Ex_1:

- Write the Movie type alias to make the following two variables properly typed
- Make sure that "originalTitle" is optional and "title" is readonly

```javascript
const dune: Movie = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

const cats: Movie = {
  title: "Cats",
  director: "Tom Hooper",
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};
```

- Write a function called getProfit that accepts a single Movie object
- It should return the movie's worldwide gross minus its budget
  For example...
  `getProfit(cats) => -21166652`

### Array Types

1. Array primitives
2. Array Points,
3. multidimensional - string[][]

##### Ex_1:

- Create an empty array of numbers called "ages":

##### Ex_2:

- Create an array variable called gameBoard that starts as an empty array.
- It should be typed to hold a 2 dimensional array of strings

##### Ex_3:

- Create a Product type that contains a name and a price.
- An example product could be:
- {name: "coffee mug", price: 11.50}

##### Ex_4:

- Write a function called getTotal that accepts an array of Product types
- It should return the sum of all the products' prices

### Union

##### Ex_1:

1. simple union primitives
2. Point Or Location - object
3. type narrowing ( typeof ) , tax&price price\*tax
4. union types in array primitive && Point&Loc
5. literal types - are not only the type but the values themselves too
6. Literal example - DayOfWeek

##### Ex_1:

- Create a variable called highScore that can be a number OR a boolean

##### Ex_2:

- create an array called stuff
- it can be an array of numbers OR an array of strings
- it cannot be an array of numbers and strings (mixed together)

##### Ex_3:

- Create a literal type called SkillLevel
- There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"

##### Ex_4:

- Create a type called SkiSchoolStudent
- name must be a string
- age must be a number
- sport must be "ski" or "snowboard"
- level must be a value from the SkillLevel type (from above)

##### Ex_5:

- Define a type to represent an RGB color
- r should be a number
- g should be a number
- b should be a number

##### Ex_6:

- h should be a number
- s should be a number
- l should be a number

##### Ex_7:

- Create an array called colors that can hold a mixture of RGB and HSL color types

##### Ex_8:

- Write a function called greet that accepts a single string OR an array of strings
- It should print "Hello, <name>" for that single person OR greet each person in the array with the same format

### Tuple

### interfaces

### Casting

##### Ex_1:

- Create a function that receive elementId string & return the element value;

## Exercises

1. Queue Class with Generics
