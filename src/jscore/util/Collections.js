var Collections = {};
/**
  * Sort a comparable array
  * @param {Object[]} array
  */
Collections.sort =  function (array) {
  var temp, i, j;
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length - 1; j++) {
      if (array[j].compareTo(array[j + 1]) === 1) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};

module.exports = Collections;