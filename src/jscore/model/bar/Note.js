/*
 * 
 * @extends jscore.model.Tickable
 * @require jscore.util.DrawLog
 * @require jscore.util.Collections
 * @require jscore.model.bar.note.Head
 * @require jscore.model.bar.note.Steam
 */
jscore.model.bar.Note = (function () {
    //@requires
    var DrawLog = jscore.util.DrawLog;
    var Tickable = jscore.model.Tickable;
    var Collections = jscore.util.Collections;
    var Head = jscore.model.bar.note.Head;
    var Steam = jscore.model.bar.note.Steam;
    var Key = jscore.model.bar.note.Key;
    /**
     *
     * @private
     * @param {Array<Key>} keys
     * @param {Integer} duration
     */
    function createHeads(keys, duration) {
        var heads = [];
        keys.forEach(function (key) {
            if (typeof key === 'string') {
                key = new Key(key);
            }
            heads.push(new Head(key, duration));
        });
        return heads;
    }
    /**
     * @exports jscore.model.bar.Note
     * @constructor
     * @extends jscore.model.Tickable
     * @param {Object} obj
     * @param {String[]} obj.keys ['c','e','f','b']
     * @param {jscore.model.bar.Note.Duration} obj.duration note duration
     * @param {jscore.model.bar.Note.Orientation} obj.orientation 1 or -1
     * @param {String[]} obj.modifiers ['dot','accent','flam']
     * @param {String} obj.chord chord name 'CM7'
     */
    function Note(obj) {
        this.setDuration(obj.duration || 0);
        this.setOrientation(obj.orientation || Note.Orientation.UP);
        this.heads = createHeads(obj.keys, this.duration);
        //
        Collections.sort(this.heads);
        //create a steam
        if (this.duration > Note.Duration.WHOLE) {
            this.steam = new Steam();
        }
        //create a flag
        if (!this.isRest() && this.duration >= Note.Duration.EIGHT) {
            this.flagGlyph = jscore.glyph.Flag;
        }
    }
    //extends jscore.model.Tickable
    jscore.extends(Note, Tickable);
    /**
     * Enum for note orientation
     * @readonly
     * @static
     * @enum {Number}
     */
    Note.Orientation = {
        UP: 1,
        DOWN: -1
    };
    /**
     * Enum for note duration
     * @readonly
     * @static
     * @enum {Number}
     */
    Note.Duration = {
        WHOLE: 1,
        HALF: 2,
        QUARTER: 4,
        EIGHT: 8,
        SIXTEENTH: 16,
        THIRTY: 32
    };
    /**
     * 
     * @private
     * @property {jscore.model.bar.note.Head[]} 
     */
    Note.prototype.heads = [];
    /**
     * 
     * @private
     * @property {jscore.model.bar.note.Steam} 
     */
    Note.prototype.steam = null;
    /**
     * 
     * @private
     * @property {jscore.model.glyph.FlagGlyph} 
     */
    Note.prototype.flagGlyph = null;
    /**
     * 
     * @private
     * @property {jscore.model.bar.note.Beam} 
     */
    Note.prototype.beam = null;
    /**
     * 
     * @private
     * @property {Integer} 
     */
    Note.prototype.duration = 0;
    /**
     * 
     * @private
     * @property {Integer} 
     */
    Note.prototype.orientation = 1;
    //
    Note.prototype.draw = function (ctx) {
        if (this.isRest()) {
            this.log.rest(ctx);
            return;
        }
        this.log.note(ctx);
        //
        this.heads.forEach(function (head) {
            //After draw the head the x and y values will be updated
            head.draw(ctx);
        });
        //Draw steam
        if (this.steam != null) {
            //After draw the steam the x, y and height values will be updated
            this.steam.draw(ctx);
        }
        //Draw the flag
        if (this.beam === null && this.flagGlyph != null) {
            this.flagGlyph.paint(ctx, this.steam.p1.x, this.steam.p1.y);
        }
        DrawLog.add("").removeLevel();
    };
    /**
     * @public
     * @return jscore.model.bar.note.Head[]} heads
     */
    Note.prototype.getHeads = function () {
        return this.heads;
    };
    /**
     * @public
     * @param {jscore.model.bar.note.Head[]} heads
     */
    Note.prototype.setHeads = function (heads) {
        this.heads = heads;
    };
    /**
     * @public
     * @return {Integer} duration 
     */
    Note.prototype.getDuration = function () {
        return this.duration;
    };
    /**
     * @public
     * @param {Integer} duration 
     */
    Note.prototype.setDuration = function (duration) {
        if (typeof duration !== 'number') {
            throw new jscore.RuntimeError('BadArguments', 'invalid note duration');
        }
        //
        this.duration = duration;
    };
    /**
     * @public
     * @return {Integer} width 
     */
    Note.prototype.getWidth = function () {
        return 400 / this.duration;
    };
    /**
     * @public
     * @return {jscore.model.bar.note.Key} key 
     */
    Note.prototype.getMaxKey = function () {
        return this.heads[this.heads.length - 1].getKey();
    };
    /**
     * @public
     * @return {jscore.model.bar.note.Key} key 
     */
    Note.prototype.getMinKey = function () {
        return this.heads[0].getKey();
    };
    //
    /**
     * 
     * @param {jscore.model.bar.note.Beam} beam
     */
    Note.prototype.setBeam = function (beam) {
        this.beam = beam;
    };
    /**
     * 
     * @return {Boolean}
     */
    Note.prototype.isRest = function () {
        return this.heads.length === 0;
    };
    /**
     * 
     * @return {Boolean}
     */
    Note.prototype.hasFlag = function () {
        return this.flagGlyph != null;
    };
    /**
     * 
     * @return {Integer}
     */
    Note.prototype.getOrientation = function () {
        return this.orientation;
    };
    /**
     * 
     * @param {Integer} orientation
     */
    Note.prototype.setOrientation = function (orientation) {
        if (orientation !== Note.Orientation.DOWN && orientation !== Note.Orientation.UP) {
            throw new jscore.RuntimeError('BadArguments', 'invalid note orientation');
        }
        this.orientation = orientation;
    };
    /**
     * 
     * @return {jscore.model.bar.note.Steam}
     */
    Note.prototype.getSteam = function () {
        return this.steam;
    };
    /**
     * Log functions
     */
    Note.prototype.log = {
        rest: function (ctx) {
            DrawLog.add(
                    [
                        "rest(duration:", this.duration,
                        ", width: ", ctx.getScaledValue(this.getWidth()),
                        ", x:", ctx.x,
                        ", y:", ctx.y, ")"
                    ].join("")
                    ).addLevel();
        },
        note: function (ctx) {
            DrawLog.add(
                    [
                        "note(duration:", this.duration,
                        ", width: ", ctx.getScaledValue(this.getWidth()),
                        ", x:", ctx.x,
                        ", y:", ctx.y,
                        ")"
                    ].join('')
                    ).addLevel();
        }
    };

    return Note;
})();