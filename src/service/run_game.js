import setupRobots from '../domain/robot/setup_robot';
import {PLAYER_STATE} from "../domain/robot/types";
import handleMoves from "../service/handle_moves";
import setupGrid from "../domain/grid/setup_grid";

export function formatPlayerStateText(text){
  return text === PLAYER_STATE.LOST
    ? ` ${text}`
    : '';
}

export function formatOutputText(result){
  return `(${result.x}, ${result.y}, ${result.orientation})${formatPlayerStateText(result.state)}`
}

export default function runGame({
  grid: gridString,
  robots: robotsString,
}){
  const grid = setupGrid(gridString)
  const robots = robotsString.map(setupRobots)

  return robots.map(({
    commands,
    ...robot
  }) => {

    const moves = Array.from(commands);

    const result = handleMoves({
      robot,
      moves,
      grid,
    })

    const outputText = formatOutputText(result)

    return outputText;
  });
}
