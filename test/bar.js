import { assert } from 'chai';
import { getScore, SCORE } from './setup/env';

import Bar from '../src/model/Bar'

describe('Bar', function() {

  let score;
  let staff;

  beforeEach(() => {
    score = getScore();
    staff = score.getStaff(0);
  });

  // Testing Bar instance
  it('instance', () => {
    staff.getBars().forEach(bar => {
      assert.instanceOf(bar, Bar);
    });
  });

  // Testing Bar instance
  it('properties', () => {
    let barList = staff.getBars();
    assert.equal(barList.length, 1);
    assert.equal(barList[0].getTimeSignature(), '4/4');
  });

});
