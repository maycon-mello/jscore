
import DrawLog from '../../../util/DrawLog';
import Drawable from '../../Drawable';
import Glyph from '../../../glyph/Glyph';


export default class Flag extends Drawable {

  /**
   * @param {Key} key
   * @param {Number} duration
   */
  constructor(duration) {
    super();
    this.glyph = Glyph.get('FLAG_EIGHT_UP');
  }

  draw(ctx) {

  }
}
