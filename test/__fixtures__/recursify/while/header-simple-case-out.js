function main(i = 0) {
  if (++i < 5) {
    return main(i);
  }

  return i;
}
