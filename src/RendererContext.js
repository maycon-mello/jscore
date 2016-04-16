import { getProps } from './constants/RendererContextProps';
import Observable from './util/Observable';
import CanvasRenderingContext from './CanvasRenderingContext';
/**
 * @constructor
 * @param {Object} args
 * @param {HTMLCanvasElement} args.canvasElement
 */
class RendererContext extends Observable {

  constructor ({width, height, canvasElement}) {
    super();

    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
    this.startX = 0;
    this.startY = 0;
    this.staffBarCount = 0;
    this.cavnasElement = canvasElement;
    // TODO: change this attribute name
    this.canvas = new CanvasRenderingContext(canvasElement);
    this.setScale(1);
  }

  updateProps() {
    this.props = getProps(this.scale);
  }

  // TODO: remove it
  getProperty(propertie) {
    return this.props[propertie];
  }

  drawLine(iX, iY, fX, fY) {
    let ctx = this.canvas;
    ctx.beginPath();
    ctx.moveTo(iX, iY);
    ctx.lineTo(fX, fY);
    ctx.stroke();
    ctx.closePath();
  }

  /**
   * Set score scale (zoom+-), it affects in how big will be the score graphic elements
   * @param {Double} scale
   */
  setScale(scale) {
    this.scale = scale;
    this.updateProps();
  }

  /**
   * Returns top position
   * @return {Integer} top y position
   */
  getTopPosition() {
    return this.y - (this.props.STAFF_HEIGHT / 2);
  }

  /**
   * Returns staff height
   * @return {Integer} bottom y position
   */
  getBottomPosition() {
    return this.y + (this.props.STAFF_HEIGHT / 2);
  }

  /**
   *
   * @param {Integer} value
   * @return {Integer} scaled value
   */
  getScaledValue(value) {
    return parseInt(this.scale * value);
  }

  /**
   *
   * @param {Integer} value
   * @return {Integer} scaled value
   */
  getScaled(value) {
    return getScaleValue(value);
  }

}

module.exports = RendererContext;
