interface User {
  name: string;
  age: number;
  permission: string;
  type: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
  type: string;
}

type Person = Admin | User;

const persons: Person[] = [
  {
    name: "Israel",
    age: 20,
    permission: "user",
    type: "User",
  },
  {
    name: "Snir",
    age: 20,
    role: "admin",
    type: "Admin",
  },
  {
    name: "Ronit",
    age: 20,
    role: "admin",
    type: "Admin",
  },
];

function extractAdditionalInfo(p: Person) {
  let additionalInfo: string = "";
  if ("role" in p) {
    console.log(p);
    additionalInfo = p.role;
  } else {
    additionalInfo = p.permission;
  }
  return additionalInfo;
}

function isAdmin(p: Person): p is Admin {
  return p?.type?.toLowerCase() === "admin";
}

function isUser(p: Person): p is User {
  return p?.type?.toLowerCase() === "user";
}

const onlyAdmins = persons.filter(isAdmin);

// for (let index = 0; index < persons.length; index++) {
//   console.log(extractAdditionalInfo(persons[index]));
// }

persons.forEach(extractAdditionalInfo);

// // diff between interface and type
// type Test = {
//   [key: string]: { value: number; [key: number]: string; title: string };
// };
