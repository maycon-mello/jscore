import Font from '../font/gonville';

//cached glyphs
var glyphs = {};

class Glyph {

  /**
   * Note head values
   *
   */
   constructor (code) {
     this.code = code;
   }

   draw (ctx, x, y) {
     //console.log(ctx);
     //console.log(this.code);
     Glyph.render(ctx.canvas, this.code, x, y, 1);
   }

  static createGlyph (code) {
    let glyph = Font.glyphs[code];
    if (!glyph){
      //error
    }
    //
    if (glyph.o) {
      return {
        width: glyph.x_max - glyph.x_min,
        height: glyph.ha, // height
        outline: glyph.o.split(' ')
      }
    } else {
      // throw error
      return false;
    }
  }

  static getGlyph (code) {
    if (!glyphs[code]) {
      glyphs[code] = this.createGlyph(code);
    }
    return glyphs[code];
  }
  /**
   *
   * @param {type} ctx
   * @param {type} glyph
   * @param {type} x
   * @param {type} y
   * @param {type} scale
   * @returns {undefined}
   */
  static render (ctx, glyphCode, x_pos, y_pos, scale) {
    var glyph = this.getGlyph(glyphCode);
    var outline = glyph.outline;
    //
    var outlineLength = outline.length;
    ctx.beginPath();

    ctx.moveTo(x_pos, y_pos);

    for (var i = 0; i < outlineLength; ) {
      var action = outline[i++];

      switch(action) {
        case 'm':
          ctx.moveTo(x_pos + outline[i++] * scale,
                     y_pos + outline[i++] * -scale);
          break;
        case 'l':
          ctx.lineTo(x_pos + outline[i++] * scale,
                     y_pos + outline[i++] * -scale);
          break;

        case 'q':
          var cpx = x_pos + outline[i++] * scale;
          var cpy = y_pos + outline[i++] * -scale;

          ctx.quadraticCurveTo(
              x_pos + outline[i++] * scale,
              y_pos + outline[i++] * -scale, cpx, cpy);
          break;

        case 'b':
          var x = x_pos + outline[i++] * scale;
          var y = y_pos + outline[i++] * -scale;

          ctx.bezierCurveTo(
              x_pos + outline[i++] * scale, y_pos + outline[i++] * -scale,
              x_pos + outline[i++] * scale, y_pos + outline[i++] * -scale,
              x, y);
          break;
      }
    }
    ctx.fill();
  }
}

Glyph.NOTE_HEAD = {
  WHOLE: 'v53',
  HALF: 'v1d',
  DEFAULT: 'vb'
}
Glyph.CLEF = {
  BASS: 'v79',
  TREBLE: 'v83',
  PERCUSSION: 'v59'
}
// Glyph.REST = {
//   WHOLE: 'v53',
//   HALF: 'v1d',
//   QUARTER: 'vb',
//
// }


Glyph.Font = Font;

module.exports = Glyph;
