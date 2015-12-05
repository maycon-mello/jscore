/**
 * 
 * @implements jscore.Modifier
 * @extends jscore.model.Tickable
 * @require jscore.util.DrawLog
 * @require jscore.RendererContext
 */
jscore.model.bar.note.modifiers.Dot = (function(){
    //@imports
    var DrawLog = jscore.DrawLog;
    /**
     * 
     * @constructor
     * @param {Integer} type can be SINGLE_DOT(1) or DOUBLE_DOT(2)
     */
    function Dot (type) {
        this.type = type || 0;
    }
    /**
     *
     * @property {Integer} SINGLE_DOT 
     */
    Dot.prototype.SINGLE_DOT = 1;
    /**
     *
     * @property {Integer} DOUBLE_DOT 
     */
    Dot.prototype.DOUBLE_DOT = 2;
    /**
     * 
     * @param {RendererContext} ctx
     */
    Dot.prototype.draw = function (ctx) {

    }

    return Dot;
})();
