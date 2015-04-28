/*
 * 
 * 
 */
jscore.model.bar.note.Key = (function () {
    /**
     * @exports jscore.model.bar.note.Key 
     * @constructor
     * @param {jscore.model.bar.note.Key.Name | String} key - key name
     * @param {Integer} oct - octave number
     */
    function Key(keyName, oct) {
        if (!oct) {
            oct = keyName.substring(keyName.length - 1, keyName.length);
            oct = parseInt(oct);
            keyName = keyName.substring(0, keyName.length - 1);
        }
        this.setKeyName(keyName);
        this.setOctave(oct);
    }

    /**
     * KeyName object
     * @typedef {Object} jscore.model.bar.note.Key.KeyName
     * @property {Number} value - Index value
     * @property {String} name - Key name 
     */
    function KeyName(name, value) {
        this.value = value;
        this.name = name;
        this.toString = function () {
            return this.name;
        };
    }
    /**
     * @enum {jscore.model.bar.note.Key.KeyName}
     * @readonly
     * @static
     */
    Key.Name = {
        'C': new KeyName('C', 0),
        'C#': new KeyName('C#', 1),
        'Db': new KeyName('Db', 1),
        'D': new KeyName('D', 2),
        'D#': new KeyName('D#', 3),
        'Eb': new KeyName('Eb', 3),
        'E': new KeyName('E', 4),
        'F': new KeyName('F', 5),
        'F#': new KeyName('F#', 6),
        'Gb': new KeyName('Gb', 6),
        'G': new KeyName('G', 7),
        'G#': new KeyName('G#', 8),
        'Ab': new KeyName('Ab', 8),
        'A': new KeyName('A', 9),
        'A#': new KeyName('A#', 10),
        'Bb': new KeyName('Bb', 10),
        'B': new KeyName('B', 11)
    };
    /**
     * Returns keyName object
     * @return {jscore.model.bar.note.KeyName} keyName
     */
    Key.prototype.getKeyName = function () {
        return this.keyName;
    };

    /**
     * 
     * @param {jscore.model.bar.note.KeyName} keyName
     */
    Key.prototype.setKeyName = function (key) {
        if (typeof key === 'string') {
            key = Key.Name[key.toUpperCase()];
        }
        if (!key) {
            throw new jscore.RuntimeError('BadArguments', 'invalid key name.');
        }
        this.keyName = key;
    };

    /**
     *  
     * @return {Integer} octave 
     */
    Key.prototype.getOctave = function () {
        return this.octave;
    };

    /**
     * 
     * @param {Integer} octave 
     */
    Key.prototype.setOctave = function (octave) {
        if (typeof octave !== 'number') {
            throw new jscore.RuntimeError('BadArguments', 'invalid key octave');
        }
        this.octave = octave;
    };

    /**
     * 
     * @return {String} string representation 
     */
    Key.prototype.toString = function () {
        return this.keyName.toString() + this.octave.toString();
    };

    /**
     * 
     * @param {jscore.model.bar.note.Key} key to compare with 
     * @return {Integer} result of comparsion
     */
    Key.prototype.compareTo = function (key) {
        var compare = jscore.util.compare(this.octave, key.getOctave());
        if (compare === 0) {
            compare = jscore.util.compare(this.keyName.value, key.getKeyName().value);
        }
        return compare;
    };

    return Key;
})();