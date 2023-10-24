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
- hint: reduce

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

Generics:

1. Example of BuildIn Generics - querySelector Button.
1. takes type of from json
1. using key as string
1. deprecated

### interfaces

1. interface declaration merging

### Casting

##### Ex_1:

- Create a function that receive elementId string & return the element value;

## Exercises

### Generics

1. Example of BuildIn Generics - querySelector Button.
2. querySelector Button
3. Queue Class with Generics

# 20.9

### Interfaces and Union

1. key in item

##### ex interfaces union and key in

- Copy Paste the following code into index.ts file and fix the types issue.
- use `key in`operator and print the relevant type.

```typescript
interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = unknown; // THIS IS WRONG!!!

export const persons: User[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

export function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
```

### keyof type operator

The keyof operator takes an object type and produces a string or numeric literal union of its keys.

##### Example_1:

keyof Car object

### Omit And Pick

Pick only take the items you define you want
Omit will pick every item you don't define to omit

##### Example_1:

- SuperUser - { userId, address, etc.. roles: a|b|c[]}
- Subscriber - with lower priviliges

We should avoid using Omit<> and prefer Pick<> when we have more properties to omit than to pick.

### Partial & Required

##### Example_1:

- Person and Partial Person
- Person and required Person

We should avoid using Omit<> and prefer Pick<> when we have more properties to omit than to pick.

##### Ex_1+2

Change the criteria type to include the relevant field from User.
Change the criteria so the 'type' key will be excluded;

```typescript
interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    type: "user",
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    type: "admin",
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    type: "user",
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    type: "admin",
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
  {
    type: "user",
    name: "Wilson",
    age: 23,
    occupation: "Ball",
  },
  {
    type: "admin",
    name: "Agent Smith",
    age: 23,
    role: "Administrator",
  },
];

export const isAdmin = (person: Person): person is Admin =>
  person.type === "admin";
export const isUser = (person: Person): person is User =>
  person.type === "user";

export function logPerson(person: Person) {
  let additionalInformation = "";
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

export function filterUsers(persons: Person[], criteria: User): User[] {
  return persons.filter(isUser).filter((user) => {
    const criteriaKeys = Object.keys(criteria) as (keyof User)[];
    return criteriaKeys.every((fieldName) => {
      return user[fieldName] === criteria[fieldName];
    });
  });
}

console.log("Users of age 23:");

filterUsers(persons, {
  age: 23,
}).forEach(logPerson);
```

##### Ex_3 (8)

    8.Define type PowerUser which should have all fields
    from both User and Admin (except for type),
    and also have type 'powerUser' without duplicating
    all the fields in the code.

```typescript
interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

type PowerUser = unknown;

export type Person = User | Admin | PowerUser;

export const persons: Person[] = [
  {
    type: "user",
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
  { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
  { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
  {
    type: "powerUser",
    name: "Nikki Stone",
    age: 45,
    role: "Moderator",
    occupation: "Cat groomer",
  },
];

function isAdmin(person: Person): person is Admin {
  return person.type === "admin";
}

function isUser(person: Person): person is User {
  return person.type === "user";
}

function isPowerUser(person: Person): person is PowerUser {
  return person.type === "powerUser";
}

export function logPerson(person: Person) {
  let additionalInformation: string = "";
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  if (isPowerUser(person)) {
    additionalInformation = `${person.role}, ${person.occupation}`;
  }
  console.log(`${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log("Admins:");
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log("Users:");
persons.filter(isUser).forEach(logPerson);

console.log();

console.log("Power users:");
persons.filter(isPowerUser).forEach(logPerson);
```

##### Ex_3 (9)

    Remove UsersApiResponse and AdminsApiResponse types
    and use generic type ApiResponse in order to specify API
    response formats for each of the functions.

```typescript
interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const admins: Admin[] = [
  { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
  { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
];

const users: User[] = [
  {
    type: "user",
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
];

export type ApiResponse<T> = unknown;

type AdminsApiResponse =
  | {
      status: "success";
      data: Admin[];
    }
  | {
      status: "error";
      error: string;
    };

export function requestAdmins(callback: (response: AdminsApiResponse) => void) {
  callback({
    status: "success",
    data: admins,
  });
}

type UsersApiResponse =
  | {
      status: "success";
      data: User[];
    }
  | {
      status: "error";
      error: string;
    };

export function requestUsers(callback: (response: UsersApiResponse) => void) {
  callback({
    status: "success",
    data: users,
  });
}
```

### typeOf Json

- Product Example

##### Ex_1

- go to the following API `https://restcountries.com/v3.1/all`
- create a type from country
- create a react component `CountryCard`
- component props will be combined from country without `nativeName`
- send partial data to the component and present it

### Awiated

##### Example_1

- getDate with Promise { Person }

##### Ex_1

- create a function `getCountries` fetch countries with ajax request from `https://restcountries.com/v3.1/all`
- Return relevant type from the `getCountries` function.
- Use `Awaited` in init/other function to show the relevant type without the promise

##### Ex_2

- improve the function `getCountries` to use generic type

- create a function `getCountries` fetch countries with ajax request from `https://restcountries.com/v3.1/all`
- Return relevant type from the `getCountries` function.
- Use `Awaited`

### Exclude

Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.

type T0 = Exclude<"a" | "b" | "c", "a">;

type T0 = "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>;

type T2 = string | number

### Extract

Constructs a type by extracting from Type all union members that are assignable to Union.
type T0 = Extract<"a" | "b" | "c", "a" | "f">;

type T0 = "a"
type T1 = Extract<string | number | (() => void), Function>;

type T1 = () => void

### Omit Vs Exclude

The Omit type creates a new type by removing a property from a type.
The Exclude type creates a new type by removing a constituent from a union type.
The Omit type doesn't work on enums, but Exclude does.
The Omit type is a combination of the Pick and the Exclude types.

### Intrinsic String Manipulation Types

Uppercase<StringType>
Lowercase<StringType>
Capitalize<StringType>
Uncapitalize<StringType>

### Record<Keys, Type>

interface carDetails {
price: number;
model: string;
}

type carMan = "Tesla" | "bmw" | "lexus";

const cats: Record<RocarMan, carDetails> = {
Tesla: { age: 10, breed: "Persian" },
bmw: { age: 5, breed: "Maine Coon" },
lexus: { age: 16, breed: "British Shorthair" },
};

### Declare

api-ts
declare is used to tell the compiler "this thing (usually a variable) exists already, and therefore can be referenced by other code, also there is no need to compile this statement into any JavaScript".

### ReturnType

create Person and log Person example

### Dependency

try to create dependency between the function input and the function output

```typescript
function f(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return a + ":" + b; // no error but b can be number!
  } else {
    return a + b; // error as b can be number | string
  }
}
```

### Zod + nodejs

### overloads with declare

```typescript
type Config = {
  name: boolean;
  lastname: boolean;
};
type User = {
  name?: string;
  lastname?: string;
};

declare function getUser(config: Config): User;

// test cases
const user = getUser({ name: true, lastname: false });
user.name;
user.lastname;

const user2 = getUser({ name: true, lastname: true });
user2.name;
user2.lastname;

const user3 = getUser({ name: false, lastname: true });
user3.name;
user3.lastname;

const user4 = getUser({ name: false, lastname: false });
user4;
```

### deprecation

## Modules

1. Using module - commonjs
2. Using type module - package.json ( using import )
3. Using mjs ext, combine import and require

express, using requestid
d.ts more examples
zod
