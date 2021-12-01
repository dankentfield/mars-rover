export default function checkIsOutsideGrid(player, grid){
  return player.x > grid.x || player.y > grid.y || player.y < 0 || player.x < 0;
}
