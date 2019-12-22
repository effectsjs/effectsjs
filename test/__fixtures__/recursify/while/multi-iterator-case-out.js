function main_recursion0(i = 0) {
  if (i < 5) {
    i += 1;
    return main_recursion0(i);
  }

  return [i];
}

function main_recursion1(i = 0, j = 0) {
  if (i + j < 10) {
    j += 2;
    return main_recursion1(i, j);
  }

  return [i, j];
}

function main() {
  let i = 0;
  [i] = main_recursion0(i);
  let j = 0;
  [i, j] = main_recursion1(i, j);
  return [i, j];
}
