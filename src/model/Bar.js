/**
 * @package jscore.model
 */
import invariant from 'invariant';
import Tickable from './Tickable';
import DrawLog from '../util/DrawLog';
import Beat from './bar/Beat';
import Note from './bar/Note';

class Bar extends Tickable {

  constructor (timeSignature) {
    super();

    invariant(timeSignature, 'Required parameter `{timeSignature}`');

    this.timeSignature = timeSignature;
    this.notes = [];
    this.newLine = false;
  }

  draw (ctx) {
    this.beforeDraw(ctx);
    let startX;
    let beatCount;
    let headHeight;
    //Calculate beams and bar height
    //BarFormatter.format(this);
    //
    startX = ctx.x;
    //draw vertical line
    //ctx.drawLine(c.x, c.getTopPosition(), c.x, c.getBottomPosition();
    //
    beatCount = 1;
    this.notes.forEach(function (note) {
      note.draw(ctx);
      //beatCount++;
      ctx.x += note.getWidth();
    });
    //draw vertical line
    //ctx.drawLine(c.x, c.y, c.x, c.y + c.getStaffHeight();
    //draw horizontal lines
    DrawLog.removeLevel();
    this.afterDraw(ctx);
  }
  /**
   *
   * @return {Boolean} isNewLine
   */
  isNewLine () {
    return newLine;
  }
  /**
   *
   * @param {Boolean} newLine
   */
  setNewLine (newLine) {
    this.newLine = newLine;
  }
  /**
   * Add a note in the bar. Automaticaly creates beats
   * @param {jscore.model.bar.Note} note
   */
  addNote (n) {
    /*var lastBeat = this.getLastBeat();
    if(lastBeat.duration === 1){
        this.beats.push(new Beat());
        lastBeat = this.getLastBeat();
    }
    lastBeat.addNote(note);*/
    var note = new Note(n);

    this.notes.push(note);

    return note;
  }
  /**
   * Returns the last beat
   * @returns {jscore.model.bar.Beat} the last beat
   */
  getLastBeat () {
    //return this.beats[this.beats.length - 1];
  }
  /**
   * Returns a list with all the bar beat notes
   * @returns {jscore.model.bar.Note[]} list with all the bar beat notes
   */
  getNotes () {
    return this.notes;
  }
  /**
   *
   * @returns {Number} width
   */
  getWidth () {
    var width = 0;

    this.notes.forEach(function (note) {
        width += note.getWidth();
    });

    return width;
  }

  getTimeSignature() {
    return this.timeSignature;
  }

}

module.exports = Bar;
