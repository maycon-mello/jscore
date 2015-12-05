var Util = {};
/**
 * 
 * @param {Object} val1
 * @param {Object} val2
 * @returns {Number}
 */
Util.compare = function(val1, val2) {
  if (val1 > val2) {
    return 1;
  } else if (val1 < val2) {
    return -1;
  } else {
    return 0;
  }
};

module.exports = Util;