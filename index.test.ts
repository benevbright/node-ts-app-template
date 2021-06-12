import { sum } from './index';

describe('defaultErrorHandler', () => {
  it('should be ok', () => {
    console.log('all good');

    expect(sum(1, 2)).toBe(3);
  });
});
