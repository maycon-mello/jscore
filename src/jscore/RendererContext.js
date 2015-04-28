jscore.RendererContext = (function () {
   /**
     * @exports jscore.RendererContext 
     * @constructor
     * @param {Object} args
     * @param {HTMLCanvasElement} args.canvasElement
     */
    function RendererContext(args) {
        this.canvas = args.canvasElement.getContext("2d");
        this.width = args.width;
        this.height = args.height;
    }
    /** 
     * current y position
     * @member {Integer} 
     */
    RendererContext.prototype.x = 0;
    /** 
     * current x position
     * @member {Integer} 
     */
    RendererContext.prototype.y = 0;
    /** 
     * Start position x
     * @member {Integer} 
     */
    RendererContext.prototype.startX = 0;
    /** 
     * Start position y
     * @member {Integer} 
     */
    RendererContext.prototype.startY = 0;
    /** 
     * Current staff bar count
     * @member {Integer} 
     */
    RendererContext.prototype.staffBarCount = 0;
    /** 
     * Canvas context
     * @member {CanvasRenderingContext2D} 
     */
    RendererContext.prototype.canvas = null;
    /** 
     * Scale
     * @member {Integer}
     */
    RendererContext.prototype.scale = 1;
    /**
     * @public
     * @member {Object[]} 
     */
    RendererContext.prototype.observers = [];
    //
    RendererContext.prototype.properties = {
        NOTE_HEAD_HEIGHT: 10,
        NOTE_HEAD_WIDTH: 15,
        STEAM_HEIGHT: 40
    };
    /**
     * Returns a scaled pripertie value
     * @param {String} propertie
     * @return {Integer} propertie value
     */
    RendererContext.prototype.getProperty = function (propertie) {
        var value = this.properties[propertie];
        return parseInt(value * this.scale);
    };
    /**
     * Set score scale (zoom+-), it affects in how big will be the score graphic elements
     * @param {Double} scale
     */
    RendererContext.prototype.setScale = function (scale) {
        this.scale = scale;
    };
    /**
     * Returns staff height
     * @return {Integer} staff height
     */
    RendererContext.prototype.getStaffHeight = function () {
        return this.getProperty('NOTE_HEAD_HEIGHT') * 4;
    };
    /**
     * Returns top position
     * @return {Integer} top y position
     */
    RendererContext.prototype.getTopPosition = function () {
        return this.y - (this.getStaffHeight() / 2);
    };
    /**
     * Returns staff height
     * @return {Integer} bottom y position
     */
    RendererContext.prototype.getBottomPosition = function () {
        return this.y + (this.getStaffHeight() / 2);
    };
    /**
     * 
     * @param {Integer} value
     * @return {Integer} scaled value
     */
    RendererContext.prototype.getScaledValue = function (value) {
        return parseInt(this.scale * value);
    };

    return RendererContext;

})();
