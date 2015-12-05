import log from './ArrayList.js';

var level = "";

var DrawLog =  {
  getInstance: function () {
    return this;
  },
  add: function (str) {
    log.push(str);
    return this;
  },
  addLevel: function () {
    level += "  ";
    return this;
  },
  removeLevel: function () {
    level = level.substring(0, level.length() - 2);
    return this;
  },
  clear: function () {
    log.splice(0, log.length);
    return this;
  },
  print: function () {
    console.log("########## DrawLog #############");
    log.forEach(function (s) {
      console.log(level + s);
    });
    console.log("################################");
    return this;
  }
};

module.exports = DrawLog;
