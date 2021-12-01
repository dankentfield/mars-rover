import {PLAYER_STATE} from "../domain/robot/types";
import updateRobotState from "../domain/robot/update_robot_state";
import checkIsOutsideGrid from "../domain/grid/check_is_outside_grid";

export default function handleMove({ move, robotState, grid }) {
    if(robotState.state === PLAYER_STATE.LOST) return { robotState }

    const updatedRobot = updateRobotState({
      move,
      robotState
    })

    const isOutsideGrid = checkIsOutsideGrid(updatedRobot, grid)

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
