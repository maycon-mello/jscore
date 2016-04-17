import { assert } from 'chai';
import { getScore, SCORE } from './setup/env';

import Note from '../src/model/bar/Note';

describe('Flag', function() {

  it('Note Flag type', () => {
    let keys = [];
    assert.equal(0, new Note({keys, duration: 4}).getFlagCount());
    assert.equal(1, new Note({keys, duration: 8}).getFlagCount());
    assert.equal(2, new Note({keys, duration: 16}).getFlagCount());
    assert.equal(3, new Note({keys, duration: 32}).getFlagCount());
  });

});
