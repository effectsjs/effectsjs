function main_recursion0(i = 0) {
  if (i < 10) {
    i += 2;
    return main_recursion0(i);
  }

  return [i];
}

function main(i = 0) {
  [i] = main_recursion0(i);
  return i;
}
