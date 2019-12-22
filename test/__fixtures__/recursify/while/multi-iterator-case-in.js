function main() {
  let i = 0;

  while (i < 5) {
    i += 1;
  }

  let j = 0;

  while (i + j < 10) {
    j += 2;
  }

  return [i, j];
}

main.recurse = Symbol;
