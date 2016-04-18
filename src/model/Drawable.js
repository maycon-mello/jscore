import Comparable from '../util/Comparable'
import Logger from '../util/Logger';

/**
 * Drawable is any element that can be rendered on the screen
 *
 */
class Drawable extends Comparable {

  constructor (componentName) {
    super();

    this.componentName = componentName || '';
    this.padding = {};
    this.width = 0;
    this.height = 0;
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
    Logger.log("Drawing element: ", this);
  }

  beforeDraw(ctx) {
    return;
    let canvasContext = ctx.canvas;
    canvasContext.save();
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(ctx.x, ctx.y, 5, 5);
    //canvasContext.fillText(this.componentName, ctx.x, ctx.y);
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
