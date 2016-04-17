import Bar from './Bar';
import TrebleClef from './clef/TrebleClef';
import Drawable from './Drawable';

class Staff extends Drawable {

  /**
   * @param {String} clefName
   */
  constructor (clefName) {
    super();

    this._barList = [];
    // TODO: dynamic clef
    this._clef = new TrebleClef();
  }

  /**
   *
   * @param {RenderingContext} ctx
   */
  draw (ctx) {
    this.beforeDraw(ctx);

    ctx.staffStartX = ctx.x;
    let staff = this;

    this._drawVerticalLine(ctx);

    // Draw cleff and define the context clef
    ctx.clef = this._clef;
    this._clef.draw(ctx);

    // Draw bars
    this._barList.forEach(function (bar) {
      ctx.x += 10;
      bar.draw(ctx);
      staff._drawVerticalLine(ctx);
    });

    this._drawHorizontalLines(ctx);

    this.afterDraw(ctx);
  }

  _drawVerticalLine(ctx) {
    ctx.drawLine(ctx.x, ctx.y, ctx.x, ctx.y + ctx.props.STAFF_HEIGHT);
  }

  _drawHorizontalLines(ctx) {
    let y = ctx.y;

    for(let i = 0; i < 5; i++){
      ctx.drawLine(ctx.staffStartX, y, ctx.x, y);
      y += ctx.props.NOTE_HEAD_HEIGHT;
    }
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
        var lastBar = this.getLastBar();
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
    var bar = this.getLastBar();
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
    var bar = this.getLastBar();
    if (!bar){
        bar = this.createBar();
    }
    bar.addRest(args);
    return this;
  }

  /**
   *
   * @returns {Bar} last staff bar
   */
  getLastBar () {
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
   *
   * @param {Bar[]} barList
   */
  getBars() {
    return this._barList;
  }

  /**
   *
   * @param {Number} idx
   * @return {Bar} bar by idx
   */
  getBar(idx) {
    return this._barList[idx];
  }
}

export default Staff;
