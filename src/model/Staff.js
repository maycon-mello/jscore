/**
 * @package jscore.model
 */

import Bar from './Bar';
import TrebleClef from './clef/TrebleClef';
import Tickable from './Tickable';

class Staff extends Tickable {

  /**
   * @param {String} clefName
   */
  constructor (clefName) {
    super();
    //this.clef = TrebleClef.create(clefName);
    /**
     * @private
     * @property {Array<Bar>}
     */
    this._barList = [];
    /**
     * @private
     * @property {Clef}
     */
    this._clef = new TrebleClef();
  }
  /**
   * @param {RenderingContext} ctx
   */
  draw (ctx) {
    let startX = ctx.x;
    let staff = this;
    this._clef.draw(ctx);
    // Define the context clef
    // this clef contains note positions
    ctx.clef = this._clef;
    this.drawLine(ctx);
    ctx.drawLine(ctx);
    this._barList.forEach(function (bar) {
        //ctx.y += this.getHeight();
        ctx.x += 10;
        bar.draw(ctx);
        staff.drawLine(ctx);
    });

    let y = ctx.y;
    //
    for(let i = 0; i < 5; i++){
      console.log(startX, y, ctx.x, y);
      ctx.canvas.beginPath();
      ctx.canvas.moveTo(startX, y);
      ctx.canvas.lineTo(ctx.x, y);
      ctx.canvas.stroke();
      ctx.canvas.closePath();
      y += ctx.props.NOTE_HEAD_HEIGHT;
    }

    this.afterDraw(ctx);
  }

  drawLine(ctx) {
    ctx.drawLine(ctx.x, ctx.y, ctx.x, ctx.props.STAFF_HEIGHT);
  }
  /**
   *
   * @param {String} timeSignature ex.: 2/4, 3/4, 12/8 ...
   * @returns {Bar} created bar
   */
  createBar (timeSignature) {
    // if a timeSignature is not defined the last staff bar timeSignature will be used
    // if the staff has no bars, so '4/4' will be assumed as timeSignature
    if (!timeSignature) {
        var lastBar = this._getLastBar();
        timeSignature = lastBar ? lastBar.timeSignature : '4/4';
    }

    var bar = new Bar(timeSignature);
    this._barList.push(bar);
    return bar;
  }
  /**
   *
   * @param {Object} args
   * @returns {Staff} this
   */
  addNote (args) {
    var bar = this._getLastBar();
    if (!bar){
        bar = this.createBar();
    }
    bar.addNote(args);
    return this;
  }
  /**
   *
   * @param {Object} args
   * @returns {Staff} this
   */
  addRest (args) {
    var bar = this._getLastBar();
    if (!bar){
        bar = this.createBar();
    }
    bar.addRest(args);
    return this;
  }
  /**
   * @private
   * @returns {Bar} last staff bar
   */
  _getLastBar () {
    if (this._barList.length > 0){
        return this._barList[this._barList.length - 1];
    } else {
        return null;
    }
  }
  /**
   * @return {Clef} clef
   */
  getClef () {
    return this._clef;
  }
  /**
   * @param {Clef} clef
   */
  setClef (clef) {
    this._clef = clef;
  }
  /**
   * @param {Bar[]} barList
   */
  getBars() {
    return this._barList;
  }

  getBar(idx) {
    return this._barList[idx];
  }
}

module.exports = Staff;
