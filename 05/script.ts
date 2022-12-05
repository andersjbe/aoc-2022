{
  const input = await Deno.readTextFile("./05/data.txt");
  //   const input = `    [D]
  // [N] [C]
  // [Z] [M] [P]
  //  1   2   3

  // move 1 from 2 to 1
  // move 3 from 1 to 3
  // move 2 from 2 to 1
  // move 1 from 1 to 2`;

  const stacks: string[][] = [[]];
  const res = input.split("\n\n");
  const rows = res[0].split("\n");

  for (let i = rows.length - 2; i >= 0; i--) {
    for (let j = 0; j < rows[rows.length - 1].length; j += 4) {
      if (rows[i][j] === "[") {
        const index = j / 4 + 1;
        if (!stacks[index]) {
          stacks[index] = [];
        }
        stacks[index].push(rows[i][j + 1]);
      }
    }
  }
  res[1].split("\n").forEach((line, i) => {
    const words = line.split(" ");
    const qty = parseInt(words[1]);
    const from = parseInt(words[3]);
    const to = parseInt(words[5]);
    console.log(qty, stacks[from]);
    if (!stacks[from]) return;
    const spliced = stacks[from].splice(stacks[from].length - qty, qty);
    stacks[to].push(...spliced);
  });

  stacks.forEach(stack => console.log(stack[stack.length - 1]));
}
