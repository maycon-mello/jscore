import Drawable from '../../Drawable';
import Glyph from '../../../glyph/Glyph';

export default class Rest extends Drawable {

  /**
   *
   * @param {Note} note
   */
  constructor(note) {
    super();
    this._note = note;
    this.glyph = Glyph.create(this._getGlyphName());
  }

  draw(ctx) {
    this.beforeDraw(ctx);
    console.log(ctx);
    this.glyph.render(ctx, ctx.x, ctx.y);
    this.afterDraw(ctx);
  }

  /**
   *
   * @param {Note} note
   */
  static create(note) {
    if (note._heads.length === 0) {
      return new Rest(note);
    }
    return null;
  }

  /**
   *
   * @return {String} glyph name
   */
  _getGlyphName() {
    return 'REST_EIGHT';
  }
}
