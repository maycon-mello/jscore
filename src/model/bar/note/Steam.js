/**
 * 
 * @extends jscore.model.Tickable
 * @require jscore.util.DrawLog
 * @require jscore.RendererContext
 */
jscore.model.bar.note.Steam = (function(){
    //@imports
    var DrawLog = jscore.util.DrawLog;
    var RendererContext = jscore.RendererContext;
    /**
     * 
     * @constructor
     * @param {String} key name
     * @param {Integer} oct 
     */
    function Steam (n) {
        /**
         *
         * @private
         * @property {Note} note
         */
        this.note = n || null;
        /**
         *
         * @property {Position} p0 
         */
        this.p0 = {};
        /**
         *
         * @property {Position} p1
         */
        this.p1 = {};
        /**
         *
         * @property {Integer} height 
         */
        this.height = 0;  

         //this.glyph = GlyphFactory.createGlyph(GlyphType.STEAM, 0);
    }

    /**
     * 
     * @param {RendererContext} ctx
     */
    Steam.prototype.draw = function (ctx, note) {
        var heads = this.note.getHeads();
        /**
         *@type {Head} 
         */
        var minHead = heads[0];
        /**
         *@type {Head} 
         */
        var maxHead = heads[heads.length - 1];

        this.p0.x = ctx.x + (note.getOrientation() * ctx.getScaledValue(minHead.getWidth() / 2));
        this.p1.x = this.p0.x;

        if(this.note.getOrientation() > 0){
            this.p0.y = minHead.getY();
            this.p1.y = maxHead.getY() - ctx.getProperty(RendererContext.Property.STEAM_HEIGHT);
            //this.height = minHead.getY() - maxHead.getY() + ctx.getProperty(RendererContext.Property.STEAM_HEIGHT);
        }else{
            this.p0.y = maxHead.getY();
            this.p1.y = minHead.getY() + ctx.getProperty(RendererContext.Property.STEAM_HEIGHT);
            //this.height = minHead.getY() - maxHead.getY() + ctx.getProperty(RendererContext.Property.STEAM_HEIGHT);
        }
        //this.glyph.paint(c.canvas, c.x, c.y);
        DrawLog.getInstance().add([
            'steam(x:', this.p0.x,
            ', y0:', this.p0.y,
            ', y1:', this.p1.y,
            ', orientation:', this.note.getOrientation(), ')'
        ].join(""));
    }

    return Steam;
})();