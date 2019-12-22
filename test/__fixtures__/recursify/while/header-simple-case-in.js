function main() {
  let i = 0;

  while (++i < 5) {}
  return i;
}

main.recurse = Symbol;
