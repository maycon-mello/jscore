import Comparable from '../util/Comparable'
/**
 * @package jscore.model
 */

class Tickable extends Comparable {

  constructor () {
    super();
    //protected Padding
    this.padding = {};
    //protected int
    this.width = 0;
    //protected int
    this.height = 0;
    //protected List<Modifier>
    this.modifiers = [];
    //protected Glyph
    this.glyph = null;
    //protected int
    this.y = 0;
    //protected int
    this.x = 0;

  }

  /**
   *
   * @returns {Object} padding
   */
  getPadding () {
    return this.padding;
  };

  /**
   *
   * @param {Object} padding
   */
  setPadding (padding) {
    this.padding = padding;
  };

  /**
   *
   * @returns {Integer} width
   */
  getWidth () {
    return this.glyph.getWidth();
  };

  /**
   *
   *
   */
  getHeight () {
    return height;
  };

  //public int
  getX () {
    return this.x;
  };

  //public int
  getY () {
    return this.y;
  };

  /**
   *
   * @param {jscore.model.bar.note.Key} ctx
   */
  draw (ctx) {

  };
}

export default Tickable;
