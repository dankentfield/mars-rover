import {sanitizeString} from "../utils";
import {PLAYER_STATE} from "./types";

const closingBracketRegex = /[)]/g

export default function setupRobots(stringRequest){
  const [ initialState, commands ] = stringRequest.split(closingBracketRegex)

  const sanitizedString = sanitizeString(initialState)
  return {
    x: parseInt(sanitizedString[0]),
    y: parseInt(sanitizedString[1]),
    orientation: sanitizedString[2],
    state: PLAYER_STATE.ACTIVE,
    commands: sanitizeString(commands)
  }
}
