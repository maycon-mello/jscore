import Drawable from '../../Drawable';
import Glyph from '../../../glyph/Glyph';

const MIN_DURATION_FLAG = 8;

export default class Flag extends Drawable {

  /**
   * @param {Key} key
   * @param {Number} duration
   */
  constructor(note) {
    super();
    this._note = note;
    this.glyph = Glyph.create(this._getGlyphName());
  }

  draw(ctx) {
    this.beforeDraw(ctx);
    this.afterDraw(ctx);
  }

  /**
   *
   * @param {Note} note
   */
  static create(note) {
    if (Flag.shouldHaveFlag(note)) {
      return new Flag(note);
    }
    return null;
  }

  /**
   *
   * @param {Note} note
   */
  static shouldHaveFlag(note) {
    return !note.isRest() && note._duration >= MIN_DURATION_FLAG;
  }

  /**
   *
   * @return {String} glyph name
   */
  _getGlyphName() {
    return 'FLAG_EIGHT_UP';
  }
}
