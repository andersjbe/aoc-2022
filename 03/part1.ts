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

  console.log(charCount);

  const compartments = rucksacks
    .map(rucksack => {
      const c1 = rucksack.slice(0, rucksack.length / 2);
      const c2 = rucksack.slice(rucksack.length / 2);
      return [c1, c2];
    })
    .map(([c1, c2]) => {
      const chars1 = new Set(c1.split(""));
      const chars2 = new Set(c2.split(""));

      let match = "";
      chars1.forEach(char1 => {
        chars2.forEach(char2 => {
          if (char1 === char2) {
            match += char1;
          }
        });
      });
      return match;
    })
    .map(char => {
      let score = 0;
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
