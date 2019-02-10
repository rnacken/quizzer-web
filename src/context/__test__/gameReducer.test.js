import gameReducer from '../gameReducer';
import { ACTIONS, GAME } from '../../constants';


describe('gameReducer', () => {
  describe(ACTIONS.SAVE_SCORE, () => {
    it('should save score & mark player as done', () => {
      const state = {
        players: [
          {
            id: 0,
            name: 'jack',
          },
          {
            id: 1,
            name: 'jill',
          },
        ],
        activePlayer: 1,
        status: GAME.DOING,
      };
      const expected = {
        players: [
          {
            id: 0,
            name: 'jack',
          },
          {
            id: 1,
            name: 'jill',
            myScore: 9,
            status: GAME.DONE,
          },
        ],
        status: GAME.START,
        activePlayer: 1,
      };
      const result = gameReducer(
        state,
        { type: ACTIONS.SAVE_SCORE, payload: 9 },
      );
      expect(result).toEqual(expected);
    });
    it('should mark game as done when all players are defeated', () => {
      const state = {
        players: [
          {
            id: 0,
            name: 'jack',
            score: 5,
            myScore: 6,
            status: GAME.DONE,
          },
          {
            id: 1,
            score: 8,
            name: 'jill',
          },
        ],
        activePlayer: 1,
        status: GAME.DOING,
      };
      const expected = {
        players: [
          {
            id: 0,
            name: 'jack',
            score: 5,
            myScore: 6,
            status: GAME.DONE,
          },
          {
            id: 1,
            name: 'jill',
            score: 8,
            myScore: 9,
            status: GAME.DONE,
          },
        ],
        status: GAME.DONE,
        activePlayer: 1,
      };
      const result = gameReducer(
        state,
        { type: ACTIONS.SAVE_SCORE, payload: 9 },
      );
      expect(result).toEqual(expected);
    });
  });
});
