import invariant from 'invariant';
import Drawable from '../Drawable';

class TimeSignature extends Drawable {

  /**
   *
   * @param {String} timeSignature - String representation
   * of a Time signature, Ex.: 4/4, 5/4, 6/8...
   */
  constructor(timeSignature) {
    super();
    let values = timeSignature.split('/');

    invariant(values.length === 2, 'Invalid time signature');

    this._beatCount = parseInt(values[0]);
    this._beatDuration = parseInt(values[1]);
  }

  draw(ctx) {
    this.afterDraw(ctx);


    this.beforeDraw(ctx);
  }

  getBeatCount() {
    return this._beatCount;
  }

  getBeatDuration() {
    return this._beatDuration;
  }

  toString() {
    return this._beatCount + '/' + this._beatDuration;
  }
}

export default TimeSignature;
