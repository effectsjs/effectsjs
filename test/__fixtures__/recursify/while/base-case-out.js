function main(i = 0) {
  if (i < 5) {
    i += 1;
    return main(i);
  }

  return i;
}
