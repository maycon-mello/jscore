import invariant from 'invariant';
import Tickable from '../Tickable';
import DrawLog from '../../util/DrawLog';
import Collections from '../../util/Collections';
import Steam from './note/Steam';
import NoteUtil from './NoteUtil';
import {
  NoteOrientation,
  NoteDuration,
  NoteModifier
} from '../../constants/Note';

class Note extends Tickable {

  /**
   *
   * @param {String[]} keys ['c','e','f','b']
   * @param {Number} duration note duration
   * @param {Number} orientation 1 or -1
   * @param {String[]} modifiers ['dot','accent','flam']
   */
  constructor ({ keys, duration, orientation, modifiers }) {
    super();

    invariant(keys, 'Required parameter `{keys}`');
    invariant(duration, 'Required parameter `{duration}`');

    this.steam = null;
    this.flagGlyph = null;
    this.beam = null;
    this.duration = 0;
    this.orientation = 1;
    this.setDuration(duration || 0);
    this.setOrientation(orientation || NoteOrientation.UP);
    this.heads = NoteUtil.createHeads(keys, this.duration);

    // TODO: use ES6 sort
    Collections.sort(this.heads);

    // create a steam
    if (this.duration > NoteDuration.WHOLE) {
      this.steam = new Steam(this);
    }

    //create a flag
    if (!this.isRest() && this.duration >= NoteDuration.EIGHT) {
      this.flagGlyph = jscore.glyph.Flag;
    }
  }

  draw (ctx) {
    this.beforeDraw(ctx);
    if (this.isRest()) {
      NoteUtil.log.rest(this, ctx);
      return;
    }

    NoteUtil.log.note(this, ctx);

    this.heads.forEach(function (head) {
      //After draw the head the x and y values will be updated
      head.draw(ctx);
    });

    //Draw steam
    if (this.steam != null) {
      //After draw the steam the x, y and height values will be updated
      this.steam.draw(ctx, this);
    }

    //Draw the flag
    if (this.beam === null && this.flagGlyph != null) {
      this.flagGlyph.paint(ctx, this.steam.p1.x, this.steam.p1.y);
    }

    this.updateWidth(ctx);

    DrawLog.add("").removeLevel();
    this.afterDraw(ctx);
  }

  /**
   *
   * @return {Head[]} heads
   */
  getHeads () {
    return this.heads;
  }

  updateWidth(ctx) {
    //let width = ctx.getScaledValue(ctx.props.NOTE_HEAD_WIDTH + ctx.props.NOTE_RIGHT_PADDING);
    let width = ctx.props.BAR_WIDTH / this.duration;
    this.width = ctx.getScaledValue(width);
  }

  /**
   * @public
   * @param {Head[]} heads
   */
  setHeads (heads) {
    this.heads = heads;
  }

  /**
   * @public
   * @return {Integer} duration
   */
  getDuration () {
    return this.duration;
  }

  /**
   * @public
   * @param {Integer} duration
   */
  setDuration (duration) {
    invariant(duration, 'Invalid note duration');
    this.duration = duration;
  }

  /**
   *
   * @return {Integer} width
   */
  getWidth () {
    return this.width;
  }

  /**
   *
   * @return {Key} key
   */
  getMaxKey () {
    return this.heads[this.heads.length - 1].getKey();
  }

  /**
   *
   * @return {Key} key
   */
  getMinKey () {
    return this.heads[0].getKey();
  }

  /**
   *
   * @param {Beam} beam
   */
  setBeam (beam) {
    this.beam = beam;
  }

  /**
   *
   * @return {Boolean}
   */
  isRest () {
    return this.heads.length === 0;
  }

  /**
   *
   * @return {Boolean}
   */
  hasFlag () {
    return this.flagGlyph != null;
  }

  /**
   *
   * @return {Integer}
   */
  getOrientation () {
    return this.orientation;
  }

  /**
   *
   * @param {Integer} orientation
   */
  setOrientation (orientation) {
    // invariant(
    //   orientation !== NoteOrientation.DOWN &&
    //   orientation !== NoteOrientation.UP,
    // 'invalid note orientation');

    this.orientation = orientation;
  }

  /**
   *
   * @return {Steam}
   */
  getSteam () {
    return this.steam;
  }

}

export default Note;
