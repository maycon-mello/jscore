import ArrayList from './ArrayList.js';

let level = "";
let log = new ArrayList();
let logEnabled = true;

export default class DrawLog {

  static getInstance() {
    return this;
  }

  static setLogEnabled(enabled) {
    logEnabled = enabled
  }
  static add(str) {
    log.push(str);
    return this;
  }

  static addLevel() {
    level += "  ";
    return this;
  }

  static removeLevel() {
    level = level.substring(0, level.length - 2);
    return this;
  }

  static clear() {
    log.splice(0, log.length);
    return this;
  }

  static print() {
    //if (!logEnabled) {
      return;
    //}

    console.log("########## DrawLog #############");

    log.forEach(function (s) {
      console.log(level + s);
    });

    console.log("################################");

    return this;
  }
}
