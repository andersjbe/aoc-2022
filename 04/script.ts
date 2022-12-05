{
  const input = await Deno.readTextFile("./04/data.txt");
  // const input = `
  // 2-4,6-8
  // 2-3,4-5
  // 5-7,7-9
  // 2-8,3-7
  // 6-6,4-6
  // 2-6,4-8
  // `;

  const result = input
    .split("\n")
    .filter(s => s.length > 1)
    .map(elfPair => {
      return elfPair.split(",");
    })
    .map(([elf1, elf2]) => {
      return [
        elf1.split("-").map(c => parseInt(c)),
        elf2.split("-").map(c => parseInt(c)),
      ];
    })
    .filter(([[start1, end1], [start2, end2]]) => {
      const separate =
        (start1 < start2 && end1 < end2 && end1 < start2) ||
        (start2 < start1 && end2 < end1 && end2 < start1);
      console.log(`[${start1}, ${end1}]; [${start2}, ${end2}]; ${separate}`);
      return !separate;
    });

  console.log(result.length);
}
