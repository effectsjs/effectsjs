function main_recursion0(i = 1, j = 1) {
  if (i < 5) {
    j *= i;
    i += 1;
    return main_recursion0(i, j);
  }

  return [i, j];
}

const main = function() {
  let i = 1;
  let j = 1;
  [i, j] = main_recursion0(i, j);
  return j;
};
