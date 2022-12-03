{
  const input = await Deno.readTextFile("./01/data.txt");

  const elfDiets = input.split("\n\n");
  const biggest = elfDiets
    .map(elfDiet =>
      elfDiet
        .split("\n")
        .map(cal => parseInt(cal))
        .reduce((acc, cal) => acc + cal)
    )
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, sum) => acc + sum);

  console.log(biggest);
}
