
function parseGridSize(stringGridSize){
  return stringGridSize.split(' ').map(size => parseInt(size));
}

export default function setupGrid(gridString){
  const [ x, y ] = parseGridSize(gridString);
  const grid = { x, y };
  return grid;
}
