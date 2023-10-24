// const getUserAgents = require("./lib");
import { getUserAgents } from "./lib.mjs";
import pkg from "./lib2.js";
const { t } = pkg;

export default async function main() {
  const result = await getUserAgents();
  console.log(result);
  console.log(t);
}
main();
