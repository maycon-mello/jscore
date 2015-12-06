/**
 * @constructor
 * @param {Object} args
 * @param {HTMLCanvasElement} args.canvasElement
 */
class RendererContext {

  constructor (args) {

    this.width = args.width;
    this.height = args.height;
    //
    /**
     * current y position
     * @member {Integer}
     */
    this.x = 0;
    /**
     * current x position
     * @member {Integer}
     */
    this.y = 0;
    /**
     * Start position x
     * @member {Integer}
     */
    this.startX = 0;
    /**
     * Start position y
     * @member {Integer}
     */
    this.startY = 0;
    /**
     * Current staff bar count
     * @member {Integer}
     */
    this.staffBarCount = 0;
    /**
     * Canvas context
     * @member {CanvasRenderingContext2D}
     */
    this.canvas = args.canvasElement.getContext("2d");
    /**
     * Scale
     * @member {Integer}
     */
    this.scale = 1;
    /**
     * @public
     * @member {Object[]}
     */
    this.observers = [];
    //
    this.properties = {
      NOTE_HEAD_HEIGHT: 10,
      NOTE_HEAD_WIDTH: 15,
      STEAM_HEIGHT: 40
    };
  }

  /**
   * Returns a scaled pripertie value
   * @param {String} propertie
   * @return {Integer} propertie value
   */
  getProperty (propertie) {
    var value = this.properties[propertie];
    return parseInt(value * this.scale);
  }
  /**
   * Set score scale (zoom+-), it affects in how big will be the score graphic elements
   * @param {Double} scale
   */
  setScale (scale) {
    this.scale = scale;
  }
  /**
   * Returns staff height
   * @return {Integer} staff height
   */
  getStaffHeight () {
    return this.getProperty('NOTE_HEAD_HEIGHT') * 4;
  }
  /**
   * Returns top position
   * @return {Integer} top y position
   */
  getTopPosition () {
    return this.y - (this.getStaffHeight() / 2);
  }
  /**
   * Returns staff height
   * @return {Integer} bottom y position
   */
  getBottomPosition () {
    return this.y + (this.getStaffHeight() / 2);
  }
  /**
   *
   * @param {Integer} value
   * @return {Integer} scaled value
   */
  getScaledValue (value) {
    return parseInt(this.scale * value);
  }

}

module.exports = RendererContext;
