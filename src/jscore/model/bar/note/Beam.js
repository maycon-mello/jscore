/*
 *
 * @extends jscore.model.Tickable
 * @require jscore.util.DrawLog
 * @require jscore.RendererContext
 * @requires jscore.glyph.GlyphFactory
 * @requires jscore.glyph.GlyphType
 * @requires jscore.glyph.Glyph
 * @require jscore.model.bar.note.Steam
 */
jscore.model.bar.note.Beam = (function(){
    
    var DrawLog = jscore.util.DrawLog;
    //var GlyphFactory = jscore.score.glyph.GlyphFactory;
    //var GlyphType = jscore.score.glyph.GlyphType;
    /**
     * @exports jscore.model.bar.note.Beam
     * @extends jscore.model.Tickable
     * @constructor
     * @param {jscore.model.bar.Note[]} notes
     */
    function Beam (notes) {
        this.notes = notes || [];
    }
    //
    jscore.extends(Beam, jscore.model.Tickable);
    /**
     * 
     * @private
     * @property {jscore.model.bar.Note[]}  notes
     */
    Beam.prototype.notes = [];
    /**
     * @public
     * @param {jscore.model.bar.Note} note
     */
    Beam.prototype.addNote = function (note) {
        note.setBeam(this);
        this.notes.push(note);
    };
   /**
    *  Draws the beam graphics
     * @public
     * @param {jscore.RendererContext} ctx
     */
    Beam.prototype.draw = function (ctx) {
        var steamI = this.notes[0].getSteam();
        var steamF = this.notes[this.notes.length - 1].getSteam();
        DrawLog.add("beam(x0:" + steamI.p0.x + ", y0:" + steamI.p0.y + ")");
    };
    /**
     * @public
     * @param {Integer} duration
     * @return {Integer} beam count
     */
    Beam.prototype.getBeamCount = function (duration) {
        var beams = 0;
        if(duration >= 8){
            beams = 1;
        }
        if(duration >= 16){
            beams = 2;
        }
        if(duration >= 32){
            beams = 3;
        }
        if(duration >= 64){
            beams = 4;
        }
        return beams;
    };

    return Beam;
})();