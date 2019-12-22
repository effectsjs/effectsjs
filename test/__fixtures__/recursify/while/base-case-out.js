function main_recursion0(i = 0) {
  if (i < 5) {
    i += 1;
    return main_recursion0(i);
  }

  return [i];
}

function main() {
  let i = 0;
  [i] = main_recursion0(i);
  return i;
}
