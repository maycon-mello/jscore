/**
 * 
 * @param {Object} val1
 * @param {Object} val2
 * @returns {Number}
 */
jscore.util.compare = function(val1, val2) {
    if (val1 > val2) {
        return 1;
    } else if (val1 < val2) {
        return -1;
    } else {
        return 0;
    }
};


