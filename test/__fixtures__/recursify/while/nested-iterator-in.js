function main() {
  let x = 0;
  let y = 0;
  let z = 0;

  while (x < 10) {
    x += 1;
    while (z < 10) {
      y += 1;
      z += 1;
    }
    z = 0;
  }

  return { x, y };
}

main.recurse = Symbol;
