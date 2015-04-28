jscore.util.Collections = {
    /**
     * Sort a comparable array
     * @param {Object[]} comparableArray
     */
    sort: function (comparableArray) {
        var temp;
        for (var i = 0; i < comparableArray.length; i++) {
            for (var j = 0; j < comparableArray.length - 1; j++) {
                if (comparableArray[j].compareTo(comparableArray[j + 1]) === 1) {
                    temp = comparableArray[j];
                    comparableArray[j] = comparableArray[j + 1];
                    comparableArray[j + 1] = temp;
                }
            }
        }
    }
};