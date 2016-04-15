import invariant from 'invariant';
import DrawLog from '../../../util/DrawLog';
import Comparable from '../../../util/Comparable';
import Tickable from '../../Tickable';
import KEY_NAME from '../../../constants/KeyName';


export default class Key extends Comparable {
  /**
   * @param {String} key - key name
   * @param {Integer} oct - octave number
   */
  constructor(keyName, oct) {
    super();

    if (!oct) {
      oct = keyName.substring(keyName.length - 1, keyName.length);
      oct = parseInt(oct);
      keyName = keyName.substring(0, keyName.length - 1);
    }

    invariant(keyName, 'Invalid keyName');
    invariant(oct !== undefined , 'Invalid octave');

    this.setKeyName(keyName);
    this.setOctave(oct);
  }

  /**
   * Returns keyName object
   * @return {jscore.model.bar.note.KeyName} keyName
   */
  getKeyName() {
    return this.keyName;
  };

  /**
   *
   * @param {jscore.model.bar.note.KeyName} keyName
   */
  setKeyName(key) {
    invariant(key, 'Invalid key');

    if (key.length > 1) {
      key = key.substring(0, 1).toUpperCase() + key.substring(1, 2);
    } else {
      key = key.toUpperCase();
    }

    key = KEY_NAME[key];
    this.keyName = key;
    this.name = key.name;
  }

  /**
   *
   * @return {Integer} octave
   */
  getOctave() {
    return this.octave;
  }

  /**
   *
   * @param {Integer} octave
   */
  setOctave(octave) {
    invariant(octave !== undefined, 'Invalid octave');
    this.octave = octave;
  }

  /**
   *
   * @return {String} string representation
   */
  toString() {
    return this.keyName.toString() + this.octave.toString();
  }

  /**
   *
   * @param {jscore.model.bar.note.Key} key to compare with
   * @return {Integer} result of comparsion
   */
  compareTo(key) {
    let compare = super.compareTo(this.octave, key.getOctave());

    if (compare === 0) {
      compare = super.compareTo(this.keyName.value, key.getKeyName().value);
    }

    return compare;
  };
}
