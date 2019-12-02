const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

const result = input
  .split("\n")
  .map(a => parseInt(a))
  .reduce((acc, curr) => acc + Math.floor(curr / 3) - 2, 0);

console.log(result);
