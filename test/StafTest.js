import { assert } from 'chai';
import { getScore, SCORE } from './setup/env';

describe('Staff', function() {

  let score;

  beforeEach(() => {
    score = getScore();
  });

  // Testing Staff instance
  it('instance', () => {
    let staff = score.getStaff(0);
    //assert.instanceOf(staff.getClef(), 'treble');
  });

});
