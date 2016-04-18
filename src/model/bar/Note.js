import invariant from 'invariant';
import Drawable from '../Drawable';
import DrawLog from '../../util/DrawLog';
import Collections from '../../util/Collections';
import NoteUtil from './NoteUtil';
import Steam from './note/Steam';
import Flag from './note/Flag';
import Rest from './note/Rest';

import {
  NoteOrientation,
  NoteDuration,
  NoteModifier
} from '../../constants/Note';

import Glyph from '../../glyph/Glyph';

class Note extends Drawable {

  /**
   *
   * @param {String[]} keys ['c','e','f','b']
   * @param {Number} duration note duration
   * @param {Number} orientation 1 or -1
   * @param {String[]} modifiers ['dot','accent','flam']
   */
  constructor ({ keys, duration, orientation, modifiers }) {
    super('Note');

    invariant(keys, 'Required parameter `{keys}`');
    invariant(duration, 'Required parameter `{duration}`');

    this._steam = null;
    this._beam = null;
    this.setDuration(duration || 0);
    this.setOrientation(orientation || NoteOrientation.UP);
    this._heads = NoteUtil.createHeads(keys, this._duration);

    // TODO: use ES6 sort
    Collections.sort(this._heads);

    this._steam = Steam.create(this);
    this._flag = Flag.create(this);
    this._rest = Rest.create(this);
  }

  draw (ctx) {
    this.beforeDraw(ctx);
    // if (this.isRest()) {
    //   return;
    // }

    this._heads.forEach(function (head) {
      // After draw the head the x and y values will be updated
      head.draw(ctx);
    });

    // Draw steam
    if (this._steam != null) {
      // After draw the steam the x, y and height values will be updated
      this._steam.draw(ctx, this);
    }

    // Draw the flag
    if (this.hasFlag()) {
      this._flag.draw(ctx);
    }

    if (this._rest) {
      this._rest.draw(ctx);
    }
    // Draw the flag
    // if (this._beam === null && this._flagGlyph != null) {
    //   this._flagGlyph.paint(ctx, this._steam.p1.x, this._steam.p1.y);
    // }

    ctx.x += ctx.props.BAR_WIDTH / this._duration;

    this.afterDraw(ctx);
  }

  /**
   *
   * @return {Head[]} heads
   */
  getHeads () {
    return this._heads;
  }

  updateWidth(ctx) {
    //let width = ctx.getScaledValue(ctx.props.NOTE_HEAD_WIDTH + ctx.props.NOTE_RIGHT_PADDING);
    this.width = ctx.props.BAR_WIDTH / this._duration;
  }

  /**
   * @public
   * @param {Head[]} heads
   */
  setHeads (heads) {
    this._heads = heads;
  }

  /**
   * @public
   * @return {Integer} duration
   */
  getDuration () {
    return this._duration;
  }

  /**
   * @public
   * @param {Integer} duration
   */
  setDuration (duration) {
    invariant(duration, 'Invalid note duration');
    this._duration = duration;
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
    return this._heads[this._heads.length - 1].getKey();
  }

  /**
   *
   * @return {Key} key
   */
  getMinKey () {
    return this._heads[0].getKey();
  }

  /**
   *
   * @param {Beam} beam
   */
  setBeam (beam) {
    this._beam = beam;
  }

  /**
   *
   * @return {Boolean}
   */
  isRest () {
    return this._heads.length === 0;
  }

  /**
   *
   * @return {Boolean}
   */
  hasFlag () {
    return this._flag != null && this._beam == null;
  }

  /**
   *
   * @return {Integer}
   */
  getOrientation () {
    return this._orientation;
  }

  /**
   *
   * @param {Integer} orientation
   */
  setOrientation (orientation) {
    this._orientation = orientation;
  }

  /**
   *
   * @return {Steam}
   */
  getSteam () {
    return this._steam;
  }

  getFlagCount() {
    return NoteUtil.getFlagCount(this);
  }

  shouldHaveBeam(nextNote, prevNote) {
    let orientation = this._orientation;

    if (this.getFlagCount() === 0) {
      return false;
    }

    if (NoteUtil.shouldHaveBeam(this, nextNote)) {
      return true;
    }

    if (NoteUtil.shouldHaveBeam(this, prevNote)) {
      return true;
    }

    return false;
  }

}

export default Note;
