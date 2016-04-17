import { assert } from 'chai';
import { getScore, SCORE } from './setup/env';

import Note from '../src/model/bar/Note';
import Beat from '../src/model/bar/Beat';
import TimeSignature from '../src/model/bar/TimeSignature';

describe('Beam', function() {

  it('Flag in all notes, same orientation, should have Beam', () => {
    let keys = [];
    let n4 = new Note({keys, duration: 4});
    let n8 = new Note({keys, duration: 8});
    let n16 = new Note({keys, duration: 16});
    let n32 = new Note({keys, duration: 16});

    assert.isNotTrue(n4.shouldHaveBeam(n8, n8));
    assert.isNotTrue(n8.shouldHaveBeam(n4, n4));
    assert.isTrue(n8.shouldHaveBeam(n4, n8));
    assert.isTrue(n8.shouldHaveBeam(n8, n4));
  });

  it('Flag in all notes, diferent orientation', () => {
    let keys = [];
    let n4Up = new Note({keys, duration: 4, orientation: 1});
    let n4Down = new Note({keys, duration: 4, orientation: -1});
    let n8Up = new Note({keys, duration: 8, orientation: 1});
    let n8Down = new Note({keys, duration: 8, orientation: -1});
    let n16Up = new Note({keys, duration: 16, orientation: 1});
    let n16Down = new Note({keys, duration: 16, orientation: -1});
    let n32Up = new Note({keys, duration: 16, orientation: 1});
    let n32Down = new Note({keys, duration: 16, orientation: -1});

    assert.isTrue(n8Up.shouldHaveBeam(n4Up, n8Up));
    assert.isTrue(n8Up.shouldHaveBeam(n8Up, n4Up));
    assert.isNotTrue(n8Up.shouldHaveBeam(n4Up, n8Down));
    assert.isNotTrue(n8Down.shouldHaveBeam(n8Up, n4Up));
  });

});
