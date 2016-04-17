import { assert } from 'chai';
import env from './setup/env';

import Key from '../src/model/bar/note/Key';
import { KeyNameList } from '../src/constants/KeyName';

describe('Key', function() {

  it('instance', () => {
    KeyNameList.forEach((keyName) => {
      new Key(keyName + '1');
      new Key(keyName.toLowerCase() + '1');
    });
  });

  it('properties', () => {
    let key = new Key('c1');

    assert.equal(key.keyName.name, 'C');
    assert.equal(key.name, 'C');
    assert.equal(key.octave, 1);
  });

  it('compare', () => {
    let key = new Key('C1');

    assert.equal(key.compareTo(new Key('C2')), -1);
    assert.equal(key.compareTo(new Key('B2')), -1);

    assert.equal(key.compareTo(new Key('C1')), 0);

    assert.equal(key.compareTo(new Key('C0')), 1);
    assert.equal(key.compareTo(new Key('B0')), 1);

  });

});
