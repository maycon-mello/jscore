import RendererContext from '../../../RendererContext';
import DrawLog from '../../../util/DrawLog';
import Tickable from '../../Tickable';
import getHeadGlyph from './getHeadGlyph';

class Head extends Tickable {

  /**
   * @param {Key} key
   * @param {Number} duration
   */
  constructor(key, duration) {
    super();

    this.key = key;
    this.duration = duration;
    this.glyph = getHeadGlyph(duration);
  }

  draw(ctx) {
    let headHeight = ctx.props.NOTE_HEAD_HEIGHT;
    let keyLocation = ctx.clef.getKeyLocation(this.key);
    let y = ctx.y - headHeight * keyLocation;

    this.y = y;
    this.x = ctx.x;

    DrawLog.add('head(key: ' + this.key.toString() + ')').addLevel();

    this.glyph.render({ ctx, x: ctx.x, y});

    DrawLog.removeLevel();
  }

  /**
   *
   * @return {jscore.model.bar.note.Key} key
   */
  getKey() {
    return this.key;
  }

  /**
   *
   * @param {Head} head
   * @return {Number} compare result
   */
  compareTo(head) {
    return this.getKey().compareTo(head.getKey());
  }

}

export default Head;
