import { getStats } from "./lib.mjs"; // fastify plugin
import { user } from "./lib2.js";

console.log(user);
console.log(getStats());

async function getDate() {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve("DB connected, initial cache pulled ");
    }, 3000);
  });
}

const result = await getDate();
console.log(result);
console.log("This is the end of loading the api...");
