import { assert } from 'chai';
import { getScore, SCORE } from './setup/env';

import Clef from '../src/model/clef/Clef';


describe('Note', function() {

  let score;

  beforeEach(() => {
    score = getScore();
  });

  // Testing Note instance
  it('properties', () => {
    let bar = score.getStaff(0).getBar(0);
    let note = bar.notes[0];
    let n = SCORE.staffs[0].bars[0].notes[0];

    bar.notes.forEach((barNote, idx) => {
      let n = SCORE.staffs[0].bars[0].notes[idx];
      assert.equal(barNote.heads.length, n.keys.length);
      assert.equal(barNote.duration, n.duration);
      assert.equal(barNote.orientation, n.orientation);
      assert.equal(note.beam, null);
      assert.equal(note.steam === undefined, note.duration < 2);
    });
  });

});
