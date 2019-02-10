
import { getCategoryName } from '../helpers';

describe('helpers', () => {
  describe('getCategoryName', () => {
    it('should return unknown for undefined category', () => {
      expect(getCategoryName()).toEqual('unknown');
    });
  });
});
