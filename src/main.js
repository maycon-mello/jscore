import createScore from './createScore';
import { SCORE }  from './test/data';

import DrawLog from './util/DrawLog';

DrawLog.setLogEnabled(true);

class jScore {
  /**
   * Create a new score
   * @param {String} containerSelector
   * @return {Score} score instance
   */
  static create(containerSelector) {
    let container = document.querySelector(containerSelector);
    return createScore({ container });
  }
}
