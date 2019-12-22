function main(x = 0, y = 0, z = 0) {
  if (x < 10) {
    if (z < 10) {
      y += 1;
      z += 1;
      return main(x, y, z);
    }

    x += 1;
    z = 0;
    return main(x, y, z);
  }

  return {
    x,
    y
  };
}
