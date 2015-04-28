/*
 * @require jscore.model.Tickable
 * @require jscore.util.DrawLog
 * @require jscore.model.bar.Beat
 */
jscore.model.Bar = (function () {
    //@imports
    var DrawLog = jscore.util.DrawLog;
    var Tickable = jscore.model.Tickable;
    var RendererContext = jscore.RendererContext;
    //var Beat = jscore.model.bar.Beat;
    /**
     * @exports jscore.model.Bar 
     * @extends jscore.model.Tickable
     * @constructor
     */
    function Bar () {
        //this.beats.push(new Beat());
    }
    //extends Tickable
    jscore.extends(Bar, Tickable);
    /**
     * 
     * @private
     * @property {jscore.model.bar.Note[]} beats
     */
    Bar.prototype.notes = [];
    /**
     * 
     * @private
     * @property {Boolean} newLine 
     */
    Bar.prototype.newLine = false;
    //
    Bar.prototype.draw = function (ctx) {
        var startX, beatCount, y, headHeight, i;
        //Calculate beams and bar height
        //BarFormatter.format(this);
        //
        startX = ctx.x;
        DrawLog.add("bar").addLevel();
        //draw vertical line
        //ctx.drawLine(c.x, c.getTopPosition(), c.x, c.getBottomPosition();
        //
        beatCount = 1;
        this.notes.forEach(function (note) {
            //DrawLog.add(String.format("beat " + beatCount)).addLevel();
            note.draw(ctx);
            DrawLog.removeLevel();
            //beatCount++;
        });
        //draw vertical line
        //ctx.drawLine(c.x, c.y, c.x, c.y + c.getStaffHeight();
        //draw horizontal lines
        y = ctx.y;
        headHeight = ctx.getProperty(RendererContext.Property.NOTE_HEAD_HEIGHT);
        //
        for(i = 0; i < 5; i++){
            //ctx.drawLine(startX, y, c.x, y);
            y += headHeight;
        }
        DrawLog.removeLevel();
    };
    /**
     * 
     * @return {Boolean} isNewLine
     */
    Bar.prototype.isNewLine = function () {
        return newLine;
    };
    /**
     * 
     * @param {Boolean} newLine
     */
    Bar.prototype.setNewLine = function (newLine) {
        this.newLine = newLine;
    };
    /**
     * Add a note in the bar. Automaticaly creates beats
     * @param {jscore.model.bar.Note} note
     */
    Bar.prototype.addNote  = function (note) {
        /*var lastBeat = this.getLastBeat();
        if(lastBeat.duration === 1){
            this.beats.push(new Beat());
            lastBeat = this.getLastBeat();
        }
        lastBeat.addNote(note);*/
        this.notes.push(note);
    };
    /**
     * Returns the last beat
     * @returns {jscore.model.bar.Beat} the last beat
     */
    Bar.prototype.getLastBeat = function () {
        //return this.beats[this.beats.length - 1];
    };
    /**
     * Returns a list with all the bar beat notes
     * @returns {jscore.model.bar.Note[]} list with all the bar beat notes
     */
    Bar.prototype.getNotes = function () {
        return this.notes;
    };
    /**
     * 
     * @returns {Number} width
     */
    Bar.prototype.getWidth = function () {
        var width = 0;
        
        this.notes.forEach(function (note) {
            width += note.getWidth();
        });
        
        return width;
    };

    return Bar;
})();