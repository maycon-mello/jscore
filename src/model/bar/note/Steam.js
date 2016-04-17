
import invariant from 'invariant';
import Drawable from '../../Drawable';

class Steam extends Drawable {

  /**
   *
   * @param {Note} note
   */
  constructor (note) {
    super('Steam');

    invariant(note, 'Note is required')
    this.note = note;
    this.p0 = {};
    this.p1 = {};
    this.height = 0;

     //this.glyph = GlyphFactory.createGlyph(GlyphType.STEAM, 0);
  }

  /**
   *
   * @param {Note} note
   * @param {RendererContext} ctx
   */
  draw (ctx, note) {
    let heads = note.getHeads();
    let minHead = heads[0];
    let maxHead = heads[heads.length - 1];

    let p0 = {};
    let p1 = {};

    p0.x = ctx.x + (note.getOrientation() * minHead.getWidth());
    p1.x = p0.x;

    if (this.note.getOrientation() > 0) {
        p0.y = minHead.getY();
        p1.y = maxHead.getY() - ctx.props.NOTE_STEAM_HEIGHT;
    } else {
        p0.y = maxHead.getY();
        p1.y = minHead.getY() + ctx.props.NOTE_STEAM_HEIGHT;
    }

    var canvasContext = ctx.canvas;
    canvasContext.beginPath();
    canvasContext.moveTo(p0.x, p0.y);
    canvasContext.lineTo(p1.x, p1.y);
    canvasContext.stroke();

    this.p0 = p0;
    this.p1 = p1;

    this.afterDraw(ctx);
  }

  static create(note) {
    if (note._duration < 2 || note.isRest()) {
      return null;
    }
    return new Steam(note);
  }
}

module.exports = Steam;
