export default class Comparable {
  /**
   *
   * @param {Object} val1
   * @param {Object} val2
   * @returns {Number}
   */
  compareTo(val1, val2) {
    if (val1 > val2) {
      return 1;
    }

    if (val1 < val2) {
      return -1;
    }

    return 0;
  }
};
