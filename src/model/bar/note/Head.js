import RendererContext from '../../../RendererContext';
import DrawLog from '../../../util/DrawLog';
import Tickable from '../../Tickable';
import Glyph from '../../../glyph/Glyph';

class Head extends Tickable {
  /**
   * @param {jscore.model.bar.note.Key} key
   * @param {Integer} duration
   */
  constructor (key, duration) {
    super();
    console.log(Glyph);
    this.key = key;
    switch (duration) {
      case 1: {
        this.glyph = new Glyph(Glyph.NOTE_HEAD.WHOLE);
      }
      case 2: {
        this.glyph = new Glyph(Glyph.NOTE_HEAD.HALF);
      }
      default: {
        this.glyph = new Glyph(Glyph.NOTE_HEAD.DEFAULT);
      }
    }
  }
  draw (ctx) {
    let y = ctx.y - ctx.getProperty(ctx.properties.NOTE_HEAD_HEIGHT) * ctx.clef.getKeyLocation(this.key);
    this.y = y;
    this.x = ctx.x;
    DrawLog.add('head(key: ' + this.key.toString() + ')').addLevel();
    //
    this.glyph.draw(ctx, ctx.x, y);
    //
    DrawLog.removeLevel();
  }
  /**
   *
   * @return {jscore.model.bar.note.Key} key
   */
  getKey () {
    return this.key;
  }

  /**
   *
   * @param {jscore.model.bar.note.Head} h
   * @return {Number} compare result
   */
  compareTo (h) {
    return this.getKey().compareTo(h.getKey());
  }
}

module.exports = Head;
