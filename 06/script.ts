const input = await Deno.readTextFile("./06/data.txt");
// const input = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";

for (let i = 13; i < input.length; i++) {
  const slice = input.slice(i - 13, i + 1);
  const set = new Set(slice.split(""));
  if (set.size === 14) {
    console.log(i + 1);
    break;
  }
}
