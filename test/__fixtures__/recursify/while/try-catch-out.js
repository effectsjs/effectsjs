function main_recursion0(i = 0) {
  if (i < 5) {
    try {
      if (i < 2) {
        throw Error();
      }
    } catch (e) {
      console.log(e);
      return [i];
    }

    return main_recursion0(i);
  }

  return [i];
}

function main(i = 0) {
  [i] = main_recursion0(i);
  return i;
}
