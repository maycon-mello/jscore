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
    assert.equal(barList.length, staff.getBars().length);
    assert.equal(barList[0].getTimeSignature().toString(), '4/4');
  });

  // Testing Bar instance
  it('Beats', () => {
    let keys = [];
    let bar = new Bar('4/4');

    bar.addNote({keys, duration: 4, orientation: 1});
    bar.addNote({keys, duration: 4, orientation: 1});
    bar.addNote({keys, duration: 4, orientation: 1});
    bar.addNote({keys, duration: 4, orientation: 1});

    let beatList = bar.getBeats();

    assert.equal(beatList.length, 4);
  });

});
