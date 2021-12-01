import handleMove from "./handle_move";

export default function handleMoves({
  robot,
  moves,
  grid,
}){

  const initialRobotState = {
    robotState: {
      orientation: robot.orientation,
      x: robot.x,
      y: robot.y,
      state: robot.state,
    }
  }

  const {robotState: outcome} =
    moves.reduce((acc, move) => handleMove({
      move,
      robotState: acc.robotState,
      grid,
    }), initialRobotState)

  return outcome;
};
