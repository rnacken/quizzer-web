import { getCategoryName, getActivePlayer, getStatusColor } from '../helpers';
import { GAME } from '../constants';

describe('helpers', () => {
  describe('getCategoryName', () => {
    it('should return unknown for undefined category', () => {
      expect(getCategoryName()).toEqual('unknown');
    });
  });

  describe('getActivePlayer', () => {
    it('should return null for invalid game', () => {
      expect(getActivePlayer()).toEqual(null);
      expect(getActivePlayer(false)).toEqual(null);
      expect(getActivePlayer('foo')).toEqual(null);
    });
    it('should return active player object', () => {
      const game = {
        players: [
          { id: 0, name: 'joe' },
          { id: 1, name: 'bill' },
          { id: 2, name: 'jude' },
        ],
        activePlayer: 1,
      };
      expect(getActivePlayer(game)).toEqual({ id: 1, name: 'bill' });
    });
  });

  describe('getStatusColor', () => {
    it('should return null for invalid player', () => {
      expect(getStatusColor()).toEqual(null);
      expect(getStatusColor(false)).toEqual(null);
    });
    it('should return string:warning when uncertain', () => {
      expect(getStatusColor('foo')).toBe('warning');
    });
    const player = {
      status: GAME.START,
      score: 5,
    };
    it('should return string:warning when you have not challenged this player', () => {
      expect(getStatusColor(player)).toBe('warning');
    });
    it('should return string:info when you beat this player', () => {
      expect(getStatusColor({ ...player, status: GAME.DONE, myScore: 7 })).toBe('info');
    });
    it('should return string:danger when this player beat you', () => {
      expect(getStatusColor({ ...player, status: GAME.DONE, myScore: 2 })).toBe('danger');
    });
  });
});
