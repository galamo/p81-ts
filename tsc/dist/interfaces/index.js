var persons = [
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
function extractAdditionalInfo(p) {
    var additionalInfo = "";
    if ("role" in p) {
        console.log(p);
        additionalInfo = p.role;
    }
    else {
        additionalInfo = p.permission;
    }
    return additionalInfo;
}
function isAdmin(p) {
    var _a;
    return ((_a = p === null || p === void 0 ? void 0 : p.type) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "admin";
}
function isUser(p) {
    var _a;
    return ((_a = p === null || p === void 0 ? void 0 : p.type) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "user";
}
var onlyAdmins = persons.filter(isAdmin);
// for (let index = 0; index < persons.length; index++) {
//   console.log(extractAdditionalInfo(persons[index]));
// }
persons.forEach(extractAdditionalInfo);
// // diff between interface and type
// type Test = {
//   [key: string]: { value: number; [key: number]: string; title: string };
// };
