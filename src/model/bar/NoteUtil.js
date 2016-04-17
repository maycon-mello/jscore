/**
 *
 * @module model/bar
 */

import Key from './note/Key';
import Head from './note/Head';
import DrawLog from '../../util/DrawLog';


class NoteUtil {

  /**
   *
   * @private
   * @param {Array<Key>} keys
   * @param {Integer} duration
   */
  static createHeads(keys, duration) {
      var heads = [];
      keys.forEach(function (key) {
        key = key.toUpperCase();
        if (typeof key === 'string') {
            key = new Key(key);
        }
        heads.push(new Head(key, duration));
      });
      return heads;
  }

  static getFlagCount(note) {
    let duration = note.getDuration();

    if (duration < 8) {
      return 0;
    }
    if (duration < 16) {
      return 1
    }
    if (duration < 32) {
      return 2
    }
    if (duration < 64) {
      return 3
    }
    return 4;
  }

  static shouldHaveBeam(note1, note2) {
    if (!note2) {
      return false;
    }

    if (note1.getOrientation() !== note2.getOrientation()){
      return false;
    }

    if (note2.getFlagCount() === 0) {
      return false;
    }

    return true;
  }
}

export default NoteUtil;
