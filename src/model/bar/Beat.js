/*
 * 
 * @require jscore.model.bar.note.Beam
 */
jscore.model.bar.Beat = (function () {
    
    var Beam = jscore.model.bar.note.Beam;
    /**
    * 
    * @exports jscore.model.bar.Beat
    * @constructor
    */
    function Beat() {
        
    }
    
    /**
     * 
     * @private
     * @property {jscore.model.bar.Note[]} 
     */
    Beat.prototype.notes = [];
    /**
     * 
     * @private
     * @property {Number} 
     */
    Beat.prototype.duration = 0;
    /**
     * 
     * @private
     * @property {jscore.model.bar.note.Beam} 
     */
    Beat.prototype.beam = null;
    
    /**
     * 
     * @param {jscore.model.bar.Note} n
     */
    Beat.prototype.addNote = function(n){
        this.duration += 4 / parseFloat(n.getDuration());
        this.notes.push(n);
        this.format();
    };
    /**
     * Draw beat notes
     * @param ctx
     */
    Beat.prototype.draw = function (ctx) {
        this.notes.forEach(function(note) {
            note.draw(ctx);
            ctx.x += ctx.getScaledValue(note.getWidth());
        });
        
        if(this.beam !== null){
            this.beam.draw(ctx);
        }
    };
    /**
     * Format beat notes and create a beam if it needs
     */
    Beat.prototype.format = function () {
        var currentNote, 
            nextNote, 
            lastNote,
            flagedNotes = 0,
            _this = this;;
        //
        _this.beam = null;
        //
        this.notes.forEach(function(note) {
            if(note.hasFlag()){
                flagedNotes++;
            }
        });
        //
        if(flagedNotes > 1){
            _this.beam = new Beam();
            this.notes.forEach(function(note) {
                _this.beam.addNote(note);
            });
        }
    };
    /**
     * 
     * @returns {Number}
     */
    Beat.prototype.getWidth = function () {
        var width = 0;
        this.notes.forEach(function (note) {
            width += note.getWidth();
        });
        return width;
    };
    

    return Beat;
})();