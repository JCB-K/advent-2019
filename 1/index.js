const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
  .split("\n")
  .map(a => parseInt(a));

const calculateFuel = mass => Math.floor(mass / 3) - 2;

const result1 = input.reduce((acc, curr) => acc + calculateFuel(curr), 0);
const result2 = input.reduce((acc, curr) => {
  while (curr > 0) {
    curr = calculateFuel(curr);
    if (curr > 0) {
      acc = acc + curr;
    }
  }
  return acc;
}, 0);

console.log({ result1, result2 });
