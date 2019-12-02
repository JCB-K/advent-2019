const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
  .split(",")
  .map(a => parseInt(a));

input[1] = 12;
input[2] = 2;

let index = 0;

while (index < input.length) {
  const opCode = input[index];

  if (opCode === 99) {
    break;
  }

  const input1 = input[input[index + 1]];
  const input2 = input[input[index + 2]];

  const newVal = opCode === 1 ? input1 + input2 : input1 * input2;
  input[input[index + 3]] = newVal;

  index += 4;
}

console.log(input[0]);
