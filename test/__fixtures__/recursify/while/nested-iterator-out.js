function main_recursion1(z = 0, y = 0) {
  if (z < 10) {
    y += 1;
    z += 1;
    return main_recursion1(z, y);
  }

  return [z, y];
}

function main_recursion0(x = 0, z = 0, y = 0) {
  if (x < 10) {
    x += 1;
    [z, y] = main_recursion1(z, y);
    z = 0;
    return main_recursion0(x, z, y);
  }

  return [x, z, y];
}

function main() {
  let x = 0;
  let y = 0;
  let z = 0;
  [x, z, y] = main_recursion0(x, z, y);
  return {
    x,
    y
  };
}
