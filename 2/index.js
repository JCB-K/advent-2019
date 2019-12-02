const fs = require("fs");
const path = require("path");

const getInput = () =>
  fs
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
    .split(",")
    .map(a => parseInt(a));

const calc = input => {
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
  return input[0];
};

const part1 = (data, noun, verb) => {
  data[1] = noun;
  data[2] = verb;
  return calc(data);
};

const part2 = () => {
  for (let noun = 0; noun < 99; noun++) {
    for (let verb = 0; verb < 99; verb++) {
      if (part1(getInput(), noun, verb) === 19690720) {
        return 100 * noun + verb;
      }
    }
  }
};

console.log({
  part1: part1(getInput(), 12, 2),
  part2: part2()
});
