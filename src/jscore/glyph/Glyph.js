/**
 * @constructor
 */
jscore.glyph.Glyph = (function () {
    var Glyph = {};
    //Cached glyphs
    var glyphs = {};
    //
    function createGlyph (code) {
        var glyph = jscore.font.Gonville.glyphs[code];
        if (!glyph){
            //error
        }    
        //
        if (glyph.o) {
            return {
                width: glyph.x_max - glyph.x_min,
                height: glyph.ha, // height
                outline: glyph.o.split(' ')
            };
        } else {
            //error
        }
    };
    //
    Glyph.getGlyph = function (code) {
        if (!glyphs[code]) {
            glyphs[code] = createGlyph(code);
        }
        return glyphs[code];
    };
    /**
     * 
     * @param {type} ctx
     * @param {type} glyph
     * @param {type} x
     * @param {type} y
     * @param {type} scale
     * @returns {undefined}
     */
    Glyph.render = function (ctx, glyphCode, x_pos, y_pos, scale) {
        var glyph = Glyph.getGlyph(glyphCode);
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
    };
    return Glyph;
}());