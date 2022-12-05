{
  const input = await Deno.readTextFile("./02/data.txt");
//   const input = `A Y
// B X
// C Z`;

  const rounds = input.split("\ddn");
  const score = rounds.reduce((acc, round) => {
    console.log(round);
    const [opponent, outcome] = round.split(" ");

    switch (outcome) {
      case "X": // I need to lose
        switch (opponent) {
          case "A": // Opponent picks rock
            acc += 3; // I go with scissors
            break;
          case "B": // Opponent picks paper
            acc += 1; // I go with rock
            break;
          case "C": // Opponent picks scissors
            acc += 2; // I go with paper
            break;
        }
        break;
      case "Y": // We both need to draw
        acc += 3;
        switch (opponent) {
          case "A": // Opponent picks rock
            acc += 1; // I go with rock
            break;
          case "B": // Opponent picks paper
            acc += 2; // I go with paper
            break;
          case "C": // Opponent picks scissors
            acc += 3; // I go with scissors
            break;
        }
        break;
      case "Z": // I need to win
        acc += 6;
        switch (opponent) {
          case "A": // Opponent picks rock
            acc += 2; // I go with paper
            break;
          case "B": // Opponent picks paper
            acc += 3; // I go with scissors
            break;
          case "C": // Opponent picks scissors
            acc += 1; // I go with rock
            break;
        }
        break;
    }

    return acc;
  }, 0);

  console.log(score);
}
