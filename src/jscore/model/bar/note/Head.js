/*
 * 
 * @implements jscore.Modifier
 * @extends jscore.model.Tickable
 * @require jscore.util.DrawLog
 * @require jscore.RendererContext
 */
jscore.model.bar.note.Head = (function(){
    var RendererContext = jscore.RendererContext;
    var DrawLog = jscore.util.DrawLog;
    /**
     * @exports jscore.model.bar.note.Head
     * @extends jscore.model.Tickable
     * @constructor
     * @param {jscore.model.bar.note.Key} key
     * @param {Integer} duration 
     */
    function Head (key, duration){
        this.key = key;
        switch (duration) {
            case 1: {
                this.glyph = jscore.glyph.WholeNoteHead;
            }
            case 2: {
                this.glyph = jscore.glyph.HalfNoteHead;
            }
            default: {
                this.glyph = jscore.glyph.NoteHead;
            }
        }
    }
    Head.prototype.draw = function (ctx) {
        var y = ctx.y - ctx.getProperty(RendererContext.Property.NOTE_HEAD_HEIGHT) * ctx.cleff.getKeyLocation(this.key);
        this.y = y;
        this.x = ctx.x;
        DrawLog.add('head(key: ' + this.key.toString() + ')').addLevel();
        //
        this.glyph.paint(ctx.canvas, ctx.x, y);
        //
        DrawLog.removeLevel();
    };
    /**
     * 
     * @return {jscore.model.bar.note.Key} key
     */
    Head.prototype.getKey = function () {
        return this.key;
    };
    
    /**
     * 
     * @param {jscore.model.bar.note.Head} h
     * @return {Number} compare result
     */
    Head.prototype.compareTo = function (h) {
        return key.compareTo(h.getKey());
    };
    //
    return Head;
})();