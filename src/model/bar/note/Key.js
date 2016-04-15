import RendererContext from '../../../RendererContext';
import RuntimeError from '../../../RuntimeError';
import DrawLog from '../../../util/DrawLog';
import Comparable from '../../../util/Comparable';
import Tickable from "../../Tickable";

class KeyName {
  /**
   *
   * @param {Number} value - Index value
   * @param {String} name - Key name
   */
  constructor (name, value) {
    this.value = value;
    this.name = name;
  }
  toString () {
    return this.name;
  }
}

/**
 * @enum {jscore.model.bar.note.Key.KeyName}
 * @readonly
 * @static
 */
const KEY_NAME = {
  'C': new KeyName('C', 0),
  'C#': new KeyName('C#', 1),
  'Db': new KeyName('Db', 1),
  'D': new KeyName('D', 2),
  'D#': new KeyName('D#', 3),
  'Eb': new KeyName('Eb', 3),
  'E': new KeyName('E', 4),
  'F': new KeyName('F', 5),
  'F#': new KeyName('F#', 6),
  'Gb': new KeyName('Gb', 6),
  'G': new KeyName('G', 7),
  'G#': new KeyName('G#', 8),
  'Ab': new KeyName('Ab', 8),
  'A': new KeyName('A', 9),
  'A#': new KeyName('A#', 10),
  'Bb': new KeyName('Bb', 10),
  'B': new KeyName('B', 11)
};

class Key extends Comparable {
  /**
   * @param {jscore.model.bar.note.Key.Name | String} key - key name
   * @param {Integer} oct - octave number
   */
  constructor (keyName, oct) {
    super();

    if (!oct) {
        oct = keyName.substring(keyName.length - 1, keyName.length);
        oct = parseInt(oct);
        keyName = keyName.substring(0, keyName.length - 1);
    }

    this.setKeyName(keyName);
    this.setOctave(oct);
  }

  /**
   * Returns keyName object
   * @return {jscore.model.bar.note.KeyName} keyName
   */
  getKeyName () {
    return this.keyName;
  };

  /**
   *
   * @param {jscore.model.bar.note.KeyName} keyName
   */
  setKeyName (key) {
    //if (typeof key === 'string') {
    key = KEY_NAME[key.toUpperCase()];
    //}
    // if (!key) {
    //     throw new RuntimeError('BadArguments', 'invalid key name: ' + key);
    // }
    this.keyName = key;
  }

  /**
   *
   * @return {Integer} octave
   */
  getOctave () {
    return this.octave;
  }

  /**
   *
   * @param {Integer} octave
   */
  setOctave (octave) {
    if (typeof octave !== 'number') {
      throw new RuntimeError('BadArguments', 'invalid key octave');
    }
    this.octave = octave;
  }

  /**
   *
   * @return {String} string representation
   */
  toString () {
    return this.keyName.toString() + this.octave.toString();
  }

  /**
   *
   * @param {jscore.model.bar.note.Key} key to compare with
   * @return {Integer} result of comparsion
   */
  compareTo (key) {
    let compare = super.compareTo(this.octave, key.getOctave());

    if (compare === 0) {
      compare = super.compareTo(this.keyName.value, key.getKeyName().value);
    }
    return compare;
  };
}

module.exports = Key;
