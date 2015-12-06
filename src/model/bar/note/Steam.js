import RendererContext from '../../../RendererContext';
import DrawLog from '../../../util/DrawLog';
import Tickable from "../../Tickable";

class Steam extends Tickable {

  /**
   *
   * @param {String} key name
   * @param {Integer} oct
   */
  constructor (n) {
    super();
    /**
     *
     * @private
     * @property {Note} note
     */
    this.note = n || null;
    /**
     *
     * @property {Position} p0
     */
    this.p0 = {};
    /**
     *
     * @property {Position} p1
     */
    this.p1 = {};
    /**
     *
     * @property {Integer} height
     */
    this.height = 0;

     //this.glyph = GlyphFactory.createGlyph(GlyphType.STEAM, 0);
  }

  /**
   *
   * @param {RendererContext} ctx
   */
  draw (ctx, note) {
    let heads = this.note.getHeads();
    /**
     *@type {Head}
     */
    let minHead = heads[0];
    /**
     *@type {Head}
     */
    let maxHead = heads[heads.length - 1];

    this.p0.x = ctx.x + (note.getOrientation() * ctx.getScaledValue(minHead.getWidth() / 2));
    this.p1.x = this.p0.x;

    if (this.note.getOrientation() > 0) {
        this.p0.y = minHead.getY();
        this.p1.y = maxHead.getY() - ctx.getProperty(RendererContext.Property.STEAM_HEIGHT);
        //this.height = minHead.getY() - maxHead.getY() + ctx.getProperty(RendererContext.Property.STEAM_HEIGHT);
    } else {
        this.p0.y = maxHead.getY();
        this.p1.y = minHead.getY() + ctx.getProperty(RendererContext.Property.STEAM_HEIGHT);
        //this.height = minHead.getY() - maxHead.getY() + ctx.getProperty(RendererContext.Property.STEAM_HEIGHT);
    }
    //this.glyph.paint(c.canvas, c.x, c.y);
    DrawLog.getInstance().add([
        'steam(x:', this.p0.x,
        ', y0:', this.p0.y,
        ', y1:', this.p1.y,
        ', orientation:', this.note.getOrientation(), ')'
    ].join(""));
  }
}

module.exports = Steam;
