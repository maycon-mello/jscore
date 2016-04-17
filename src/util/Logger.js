let logEnabled = true;

export default class Logger {

  static log(...args) {
    if (logEnabled) {
      console.log(args);
    }
  }

  static setLogEnabled(enabled) {
    logEnabled = enabled;
  }
}
