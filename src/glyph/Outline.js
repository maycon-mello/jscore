export default class Outline {

  static render(ctx, outline, x, y, scale) {
    let outlineLength = outline.length;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let i = 0; i < outlineLength;) {
      let action = outline[i++];
      switch(action) {
        case 'm':
          ctx.moveTo(x + outline[i++] * scale,
                     y + outline[i++] * -scale);
          break;
        case 'l':
          ctx.lineTo(x + outline[i++] * scale,
                     y + outline[i++] * -scale);
          break;

        case 'q':
          var cpx = x + outline[i++] * scale;
          var cpy = y + outline[i++] * -scale;

          ctx.quadraticCurveTo(
              x + outline[i++] * scale,
              y + outline[i++] * -scale, cpx, cpy);
          break;

        case 'b':
          var xx = x + outline[i++] * scale;
          var yy = y + outline[i++] * -scale;

          ctx.bezierCurveTo(
              x + outline[i++] * scale, y + outline[i++] * -scale,
              x + outline[i++] * scale, y + outline[i++] * -scale,
              xx, yy);
          break;
      }
    }

    ctx.fill();
  }
}
