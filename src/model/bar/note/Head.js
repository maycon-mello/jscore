import Drawable from '../../Drawable';
import Glyph from '../../../glyph/Glyph';

class Head extends Drawable {

  /**
   * @param {Key} key
   * @param {Number} duration
   */
  constructor(key, duration) {
    super('Head');

    this.key = key;
    this.duration = duration;
    this.glyph = Head._createGlyph(duration);
  }

  draw(ctx) {
    let headHeight = ctx.props.NOTE_HEAD_HEIGHT;
    let keyLocation = ctx.clef.getKeyLocation(this.key);
    let y = ctx.y - headHeight * keyLocation;

    this.y = y;
    this.x = ctx.x;
    this.glyph.render(ctx, ctx.x, y);
  }

  /**
   *
   * @return {Key} key
   */
  getKey() {
    return this.key;
  }

  /**
   *
   * @param {Head} head
   * @return {Number} compare result
   */
  compareTo(head) {
    return this.getKey().compareTo(head.getKey());
  }

  static _createGlyph(duration) {
    let name = '';

    if (duration === 1) {
      name = 'NOTE_HEAD_WHOLE';
    } else if (duration === 2) {
      name = 'NOTE_HEAD_HALF';
    } else {
      name = 'NOTE_HEAD_DEFAULT';
    }

    return Glyph.create(name);
  }

}

export default Head;
