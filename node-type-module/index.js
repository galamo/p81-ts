// const getUserAgents = require("./lib");
import { getUserAgents } from "./lib.js";

async function main() {
  const result = await getUserAgents();
  console.log(result);
}
main();
