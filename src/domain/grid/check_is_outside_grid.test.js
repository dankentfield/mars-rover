import checkIsOutsideGrid from "./check_is_outside_grid";

describe('checkIsOutsideGrid()', () => {
  const grid = {
    x: 4,
    y: 8,
  }

  describe('Given a robot with co-ordinates outside the grid', () => {
    test('it should return true', () => {
      const player = {
        x: 4,
        y: 9,
      }
      expect(checkIsOutsideGrid(player, grid)).toBe(true)
    })
  })
  describe('Given a robot with co-ordinates inside the grid', () => {
    test('it should return false', () => {
      const player = {
        x: 4,
        y: 5,
      }
      expect(checkIsOutsideGrid(player, grid)).toBe(false)
    })
  })
})
