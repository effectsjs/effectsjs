function main(i = 0) {
  while (i < 10) {
    i += 2;
  }

  return i;
}

main.recurse = Symbol;
