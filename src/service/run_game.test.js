import runGame from './run_game';

describe('Given a grid of 4, 8', () => {
    describe('When a robot starts 2,3 facing East and moves LFRFF', () => {
      it('should then return (4, 4, E)', () => {

        expect(runGame({
          grid: '4 8',
          robots:  ['(2,3,E) LFRFF']
        })).toEqual(['(4, 4, E)'])

      });
    });
    describe('When a robot starts 0,2 facing North and moves FFLFRFF', () => {
      it('should then return (0, 4, W) LOST', () => {
        expect(runGame({
          grid: '4 8',
          robots:  ['(0, 2, N) FFLFRFF']
        })).toEqual(['(0, 4, W) LOST']);
    });
  });
  describe('When a robot starts 2,3 facing North and moves FLLFR', () => {
      it('should then return (2, 3, W)', () => {
        expect(runGame({
          grid: '4 8',
          robots:  ['(2, 3, N) FLLFR']
        })).toEqual(['(2, 3, W)']);
    });
  });
  describe('When a robot starts 1,0 facing South and moves FLLFR', () => {
      it('should then return (2, 3, W)', () => {
        expect(runGame({
          grid: '4 8',
          robots:  ['(1, 0, S) FFRLF']
        })).toEqual(['(1, 0, S) LOST']);
    });
  });
});
