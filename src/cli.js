const readline = require("readline");
import runGame from "./service/run_game";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What size grid do you want to use? " +
  "\n hint: use the format (x, y) e.g. 4, 8 \n", function(grid) {
  rl.question("Add a robot in the format (x, y, ORIENTATION) instructions..." +
    "\n e.g. (2, 3, N) FFRLF \n", function(robot) {
    console.log(`You built a grid of ${grid}, and a robot of ${robot}`);

    const results = runGame({
      grid,
      robots: [robot]
    })

    console.log(`
Your results:
=============`)
    results.map((result) => console.log(result));
    rl.close();
  });
});
