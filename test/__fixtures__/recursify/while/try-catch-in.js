function main(i = 0) {
  while (i < 5) {
    try {
      if (i < 2) {
        throw Error();
      }
    } catch (e) {
      console.log(e);
      break;
    }
  }

  return i;
}

main.recurse = Symbol;
