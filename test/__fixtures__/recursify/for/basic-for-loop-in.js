const main = function() {
  let j = 1;
  for (let i = 1; i < 5; i += 1) {
    j *= i;
  }

  return j;
};

main.recurse = Symbol;
