function main(input) {
  for (let y = 0; y < input.length; y += 1) {
    for (let x = 0; x < input[0].length; x += 1) {
      console.log(input[y][x]);
    }
  }
}

main.recurse = Symbol;
