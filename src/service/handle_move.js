import {PLAYER_STATE} from "../domain/robot/types";
import updateRobotState from "../domain/robot/update_robot_state";

export default function handleMove({ move, robotState, grid }) {
    if(robotState.state === PLAYER_STATE.LOST) return { robotState }

    const updatedRobot = updateRobotState({
      move,
      robotState
    })

    const isOutsideGrid = updatedRobot.x > grid.x || updatedRobot.y > grid.y || updatedRobot.y < 0 || updatedRobot.x < 0

    if(isOutsideGrid){
      return {
        robotState: {
          ...robotState,
          state: PLAYER_STATE.LOST
        }
      }
    }

    return {
      robotState: {
        ...updatedRobot,
        state: PLAYER_STATE.ACTIVE
      }
    };
}
