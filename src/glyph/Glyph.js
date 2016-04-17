import invariant from 'invariant';
import Font from './Font';
import Outline from './Outline';
import GlylphCode from './GlyphCode';

// Cached glyphs
let cache = {};

const SCALE = 0.03;

export default class Glyph {

  constructor(name) {
    let glyph = this._getFontGlyph(name);

    this.width = (glyph.x_max - glyph.x_min) * SCALE;
    this.height = glyph.ha * SCALE;
    this.outline = glyph.o.split(' ');
    this.glyph = glyph;

    invariant(glyph, 'Invalid glyph');
  }

  /**
   *
   * @param {RendererContext} ctx
   * @param {Number} x
   * @param {Number} y
   */
  render(ctx, x, y) {
    let outline = this.outline;

    // TODO: dynamic scale
    let scale = ctx.scale * SCALE;

    Outline.render(ctx.canvas, outline, x, y, scale);
  }

  _getFontGlyph(name) {
    let code = GlylphCode.getFromName(name);
    let font = Font.getDefault();
    return font.glyphs[code];
  }

  /**
   * Return a cached glyph
   *
   * @param {String} name - Glyph name
   * @return {Glyph} glyph
   */
  static create(name) {
    let glyph = cache[name];

    // Create glyph
    if (!glyph) {
      glyph = cache[name] = new Glyph(name);
    }

    return glyph;
  }
}
