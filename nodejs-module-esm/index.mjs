import { getStats } from "./lib.mjs";

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
