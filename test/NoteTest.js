import { assert } from 'chai';
import { getScore, SCORE } from './setup/env';

import Note from '../src/model/bar/Note';

describe('Note', function() {

  let score;

  beforeEach(() => {
    score = getScore();
  });

  // Testing Note instance
  it('properties', () => {
    // console.log(score.getStaff(0))
    // let bar = score.getStaff(0).getBar(0);
    // let note = bar.notes[0];
    // let n = SCORE.staffs[0].bars[0].notes[0];
    //
    // bar.notes.forEach((barNote, idx) => {
    //   let n = SCORE.staffs[0].bars[0].notes[idx];
    //   assert.equal(barNote.heads.length, n.keys.length);
    //   assert.equal(barNote.duration, n.duration);
    //   assert.equal(barNote.orientation, n.orientation);
    //   assert.equal(note.beam, null);
    //   assert.equal(note.steam === undefined, note.duration < 2);
    // });
  });

  it('Flag', () => {
    let note = new Note({keys: ['c1'], duration: 8});

    assert.isNotNull(note._flag);
  })


});
