/**
 * @constructor
 */
class RuntimeError { 

  constructor(code, message) {
    this.code = code;
    this.message = message;
  }
  
  toString() {
    return "RuntimeError: " + this.message;
  };
}

module.exports = RuntimeError;