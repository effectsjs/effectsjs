function main(i = 0, j = 0) {
  if (i < 5) {
    i += 1;
    return main(i, j);
  }

  if (i + j < 10) {
    j += 2;
    return main(i, j);
  }

  return [i, j];
}
