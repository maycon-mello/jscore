/**
 * @constructor
 */
jscore.RuntimeError = function (code, message) {
    this.code = code;
    this.message = message;
};
/**
 * 
 * @returns {String}
 */
jscore.RuntimeError.prototype.toString = function () {
    return "RuntimeError: " + this.message;
};