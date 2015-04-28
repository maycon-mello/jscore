//package com.mzm.score;

//import jscore.glyph.Glyph;
jscore.model.Tickable = (function(){

    /**
     * @exports jscore.model.Tickable 
     * @abstract
     * @constructor
     */
    function Tickable () {
        //protected Padding 
        this.padding = {};
        //protected int 
        this.width = 0;
        //protected int 
        this.height = 0;
        //protected List<Modifier> 
        this.modifiers = [];
        //protected Glyph 
        this.glyph = null;
        //protected int 
        this.y = 0;
        //protected int 
        this.x = 0;
        
    }
    
    /**
     * 
     * @returns {Object} padding
     */
    Tickable.prototype.getPadding = function(){
        return this.padding;
    };
    
    /**
     * 
     * @param {Object} padding
     */
    Tickable.prototype.setPadding = function(padding) {
        this.padding = padding;
    };

    /**
     * 
     * @returns {Integer} width
     */
    Tickable.prototype.getWidth = function() {
        return this.glyph.getWidth();
    };

    //public int 
    Tickable.prototype.getHeight = function() {
        return height;
    };
    
    //public int 
    Tickable.prototype.getX = function(){
        return this.x;
    };
    //public int 
    Tickable.prototype.getY = function(){
        return this.y;
    };
    /**
     * 
     * @param {jscore.model.bar.note.Key} ctx
     */
    Tickable.prototype.draw = function (ctx) {
        
    };

    return Tickable;
})();