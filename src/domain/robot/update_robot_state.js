
export default function updateRobotState({ move, robotState }){
  switch(robotState.orientation){
    case 'N': {
      if(move === 'F'){
        return {
          orientation: 'N',
          y: robotState.y + 1,
          x: robotState.x
        }
      }
      if(move === 'L'){
        return {
          orientation: 'W',
          x: robotState.x,
          y: robotState.y,
        }
      }
      if(move === 'R'){
        return {
          orientation: 'E',
          x: robotState.x,
          y: robotState.y,
        }
      }
    }
    case 'E': {
      if(move === 'F'){
        return {
          orientation: 'E',
          x: robotState.x + 1,
          y: robotState.y,
        }
      }
      if(move === 'L'){
        return {
          orientation: 'N',
          y: robotState.y,
          x: robotState.x,
        }
      }
      if(move === 'R'){
        return {
          orientation: 'S',
          y: robotState.y,
          x: robotState.x,
        }
      }
    }
    case 'S': {
      if(move === 'F'){
        return {
          orientation: 'S',
          y: robotState.y - 1,
          x: robotState.x,
        }
      }
      if(move === 'L'){
        return {
          orientation: 'E',
          x: robotState.x,
          y: robotState.y,
        }
      }
      if(move === 'R'){
        return {
          orientation: 'W',
          x: robotState.x,
          y: robotState.y,
        }
      }
    }
    case 'W': {
      if(move === 'F'){
        return {
          orientation: 'W',
          x: robotState.x - 1,
          y: robotState.y,
        }
      }
      if(move === 'L'){
        return {
          orientation: 'S',
          y: robotState.y,
          x: robotState.x
        }
      }
      if(move === 'R'){
        return {
          orientation: 'N',
          y: robotState.y,
          x: robotState.x
        }
      }
    }
    default:
      return robotState;
  }
}
