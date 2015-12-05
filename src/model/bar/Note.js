/**
 * @package jscore.model.bar.note;
 */

import RendererContext from '../../../RendererContext';
import Tickable from '../../Tickable';
import Key from './note/Key';
import DrawLog from '../../../util/DrawLog';
import Collections from '../../../util/Collections';
import Head from './note/Head';
import Steam from './note/Steam';
import NoteUtil from './NoteUtil';


class Note extends Tickable {
  /**
   *
   * @param {Object} obj
   * @param {String[]} obj.keys ['c','e','f','b']
   * @param {jscore.model.bar.Note.Duration} obj.duration note duration
   * @param {jscore.model.bar.Note.Orientation} obj.orientation 1 or -1
   * @param {String[]} obj.modifiers ['dot','accent','flam']
   * @param {String} obj.chord chord name 'CM7'
   */
  constructor Note(obj) {
    /**
     *
     * @private
     * @property {jscore.model.bar.note.Head[]}
     */
    this.heads = [];
    /**
     *
     * @private
     * @property {jscore.model.bar.note.Steam}
     */
    this.steam = null;
    /**
     *
     * @private
     * @property {jscore.model.glyph.FlagGlyph}
     */
    this.flagGlyph = null;
    /**
     *
     * @private
     * @property {jscore.model.bar.note.Beam}
     */
    this.beam = null;
    /**
     *
     * @private
     * @property {Integer}
     */
    this.duration = 0;
    /**
     *
     * @private
     * @property {Integer}
     */
    this.orientation = 1;

    //
    this.setDuration(obj.duration || 0);
    this.setOrientation(obj.orientation || Note.Orientation.UP);
    this.heads = NoteUtil.createHeads(obj.keys, this.duration);
    //
    Collections.sort(this.heads);
    //create a steam
    if (this.duration > Note.Duration.WHOLE) {
      this.steam = new Steam();
    }
    //create a flag
    if (!this.isRest() && this.duration >= Note.Duration.EIGHT) {
      this.flagGlyph = jscore.glyph.Flag;
    }
  }
  /**
   * Enum for note orientation
   * @readonly
   * @static
   * @enum {Number}
   */
  static get Orientation () {
      UP: 1,
      DOWN: -1
  }
  /**
   * Enum for note duration
   * @readonly
   * @static
   * @enum {Number}
   */
  static get Duration () {
      WHOLE: 1,
      HALF: 2,
      QUARTER: 4,
      EIGHT: 8,
      SIXTEENTH: 16,
      THIRTY: 32
  }
  //
  draw (ctx) {
      if (this.isRest()) {
          NoteUtil.log.rest(this, ctx);
          return;
      }
      NoteUtil.log.note(this, ctx);
      //
      this.heads.forEach(function (head) {
          //After draw the head the x and y values will be updated
          head.draw(ctx);
      });
      //Draw steam
      if (this.steam != null) {
          //After draw the steam the x, y and height values will be updated
          this.steam.draw(ctx);
      }
      //Draw the flag
      if (this.beam === null && this.flagGlyph != null) {
          this.flagGlyph.paint(ctx, this.steam.p1.x, this.steam.p1.y);
      }
      DrawLog.add("").removeLevel();
  }
  /**
   * @public
   * @return jscore.model.bar.note.Head[]} heads
   */
  getHeads () {
      return this.heads;
  }
  /**
   * @public
   * @param {jscore.model.bar.note.Head[]} heads
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
      if (typeof duration !== 'number') {
          throw new jscore.RuntimeError('BadArguments', 'invalid note duration');
      }
      //
      this.duration = duration;
  }
  /**
   * @public
   * @return {Integer} width
   */
  getWidth () {
      return 400 / this.duration;
  }
  /**
   * @public
   * @return {jscore.model.bar.note.Key} key
   */
   getMaxKey () {
      return this.heads[this.heads.length - 1].getKey();
  }
  /**
   * @public
   * @return {jscore.model.bar.note.Key} key
   */
  getMinKey () {
      return this.heads[0].getKey();
  }
  //
  /**
   *
   * @param {jscore.model.bar.note.Beam} beam
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
      if (orientation !== Note.Orientation.DOWN && orientation !== Note.Orientation.UP) {
          throw new jscore.RuntimeError('BadArguments', 'invalid note orientation');
      }
      this.orientation = orientation;
  }
  /**
   *
   * @return {jscore.model.bar.note.Steam}
   */
  getSteam () {
      return this.steam;
  }

}

exports = Note;
