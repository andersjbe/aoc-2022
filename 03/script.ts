{
  const input = await Deno.readTextFile("./03/data.txt");
  // const input = `
  // vJrwpWtwJgWrhcsFMMfFFhFp
  // jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
  // PmmdzqPrVvPwwTWBwg
  // wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
  // ttgJtRGJQctTZtZT
  // CrZsJsPPZsGzwwsLwLmpwMDw
  // `;
  const rucksacks = input.split("\n").filter(r => r.length > 0);

  type LetterCount = {
    [letter: string]: number;
  };
  const charCount = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .reduce((acc: LetterCount, l, i): LetterCount => {
      acc[l] = i + 1;
      return acc;
    }, {});

  console.log(charCount["z"]);

  const groups = [];
  for (let p = 0; p < rucksacks.length; p += 3) {
    groups.push([rucksacks[p], rucksacks[p + 1], rucksacks[p + 2]]);
  }
  const compartments = groups
    .map(([c1, c2, c3]) => {
      const chars1 = new Set(c1.split(""));
      const chars2 = new Set(c2.split(""));
      const chars3 = new Set(c3.split(""));

      let match = "";
      chars1.forEach(char1 => {
        chars2.forEach(char2 => {
          chars3.forEach(char3 => {
            if (char1 === char2 && char2 === char3) {
              match += char1;
            }
          });
        });
      });
      return match;
    })
    .map(char => {
      let score = 0;
      char = char.trim();
      if (char === char.toUpperCase()) {
        score += 26;
        char = char.toLowerCase();
      }
      score = score + charCount[char];
      return score;
    })
    .reduce((acc, num) => acc + num);

  console.log(compartments);
}
