import { assert } from 'chai';
import { getScore, SCORE } from './setup/env';

import Beat from '../src/model/bar/Beat'
import TimeSignature from '../src/model/bar/TimeSignature';
import Note from '../src/model/bar/Note';

let keys = [];

describe('Beat', function() {

  // Testing Bar instance
  it('isFull', () => {
    let beat = new Beat(new TimeSignature('4/4'));

    beat.addNote(new Note({keys, duration: 8, orientation: 1}));
    assert.isNotTrue(beat.isFull());

    beat.addNote(new Note({keys, duration: 8, orientation: 1}));
    assert.isTrue(beat.isFull());
  });

  it('Beat, should have no beams', () => {
    let keys = ['c1'];
    let beat = new Beat(new TimeSignature('4/4'));

    beat.addNote(new Note({keys, duration: 4, orientation: 1}));

    assert.isNull(beat._beam);
  })

  it('Beat, should have Steam', () => {
    let keys = ['c1'];
    let beat = new Beat(new TimeSignature('4/4'));

    beat.addNote(new Note({keys, duration: 8, orientation: 1}));
    beat.addNote(new Note({keys, duration: 8, orientation: 1}));

    assert.isNotNull(beat._beam);
  })

});
