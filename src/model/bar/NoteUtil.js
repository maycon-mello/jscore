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
}

export default NoteUtil;
