import { assert } from 'chai';
import { getScore, SCORE } from './setup/env';

import Clef from '../src/model/clef/Clef';


describe('Staff', function() {

  let score;

  beforeEach(() => {
    score = getScore();
  });

  // Testing Staff instance
  it('instance', () => {
    let staff = score.getStaff(0);
    assert.instanceOf(staff.getClef(), Clef.treble);
  });

});
