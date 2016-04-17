import Comparable from '../util/Comparable'

/**
 * Drawable is any element that can be rendered on the screen
 *
 */
class Drawable extends Comparable {

  constructor () {
    super();

    this.padding = {};
    this.width = 0;
    this.height = 0;
    this.modifiers = [];
    this.glyph = null;
    this.y = 0;
    this.x = 0;
  }

  /**
   *
   * @returns {Object} padding
   */
  getPadding () {
    return this.padding;
  }

  /**
   *
   * @param {Object} padding
   */
  setPadding (padding) {
    this.padding = padding;
  }

  /**
   *
   * @returns {Integer} width
   */
  getWidth () {
    return this.glyph.width;
  }

  getHeight () {
    return height;
  }


  getX () {
    return this.x;
  }


  getY () {
    return this.y;
  }

  afterDraw(ctx) {
    console.log("Drawing element: ", this);
  }

  beforeDraw(ctx) {
    let canvasContext = ctx.canvas;
    canvasContext.save();
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(ctx.x, ctx.y, 5, 5);
    canvasContext.restore();
  }

  /**
   *
   * @param {RendererContext} ctx
   */
  draw (ctx) {

  };
}

export default Drawable;
