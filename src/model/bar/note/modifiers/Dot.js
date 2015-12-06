/**
 * @package jscore.model.bar.note.modifiers
 */

import DrawLog from '../../../../util/DrawLog';

class Dot extends Tickable {
  /**
   *
   * @param {Integer} type can be SINGLE_DOT(1) or DOUBLE_DOT(2)
   */
  constructor (type) {
    super();
    this.type = type || 0;
  }
  /**
   *
   * @property {Integer} SINGLE_DOT
   */
  static get SINGLE_DOT () {
    return 1;
  }
  /**
   *
   * @property {Integer} DOUBLE_DOT
   */
  static get DOUBLE_DOT () {
    return 2;
  }
  /**
   *
   * @param {RendererContext} ctx
   */
  draw (ctx) {

  }
}

module.exports = Dot;
