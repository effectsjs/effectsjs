function main_recursion1(x = 0, input = undefined, y = 0) {
  if (x < input[0].length) {
    console.log(input[y][x]);
    x += 1;
    return main_recursion1(x, input, y);
  }

  return [x, input, y];
}

function main_recursion0(y = 0, input = undefined) {
  let x = 0;

  if (y < input.length) {
    [x, input, y] = main_recursion1(x, input, y);
    y += 1;
    return main_recursion0(y, input);
  }

  return [y, input];
}

function main(input) {
  let y = 0;
  [y, input] = main_recursion0(y, input);
}
