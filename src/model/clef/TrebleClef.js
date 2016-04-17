import Drawable from '../Drawable';
import Key from '../bar/note/Key';
import Glyph from '../../glyph/Glyph';

class TrebleClef extends Drawable {
  /*
    ------ F    4
           E    3
    ------ D    2
           C    1
    ------ B => 0
           A   -1
    ------ G   -2
           F   -3
    ------ E   -4
 */
  constructor() {
    super();
    this.middle = new Key('B2');
    this.glyph = Glyph.create('CLEF_TREBLE');
    this.width = this.glyph.width;
  }

  getWidth() {

  }

  toString() {
    return 'treble';
  }

  getKeyLocation (k) {
    // int middleKey = middle.getKeyName().ordinal();
    // int currentKey = k.getKeyName().ordinal();
    //
    // int middleOctave = middle.getOctave();
    // int currentOctave = k.getOctave();
    // int location = (currentOctave - middleOctave) * 7;
    //
    // return location + (currentKey - middleKey);
    return -3;
  }

  draw (ctx) {
    //this.beforeRender(ctx);

    ctx.addXPadding();
    this.glyph.render(ctx, ctx.x, ctx.y + 30);
    ctx.addX(this.width);
    ctx.addXPadding();
    this.afterDraw(ctx);
  }

}

export default TrebleClef;
