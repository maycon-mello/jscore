import invariant from 'invariant';
import getFont from './getFont';
import renderGlyph from './renderGlyph';

class Glyph {

  constructor(code) {
    let glyph = getFont().glyphs[code];
    invariant(glyph, 'Invalid glyph');

    this.width = glyph.x_max - glyph.x_min;
    this.height = glyph.ha;
    this.outline = glyph.o.split(' ');
  }
  /**
   *
   * @param {RendererContext} ctx
   * @param {Number} x
   * @param {Number} y
   */
  render({ctx, x, y}) {
    invariant(y, 'Invalid y value');
    let options = {
      ctx: ctx.canvas,
      glyph: this,
      x,
      y,
      scale: ctx.scale * 0.03, // TODO: dynamic scale
    }
    renderGlyph(options)
  }
}
export default (code) => new Glyph(code);
