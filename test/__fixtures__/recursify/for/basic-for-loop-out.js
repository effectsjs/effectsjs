const main = function(j = 0, i = 0) {
  if (i < 5) {
    i += 1;
    j *= i;
    return main(j, i);
  }

  return j;
};
