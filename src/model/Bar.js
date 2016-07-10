import invariant from 'invariant';
import Drawable from './Drawable';
import DrawLog from '../util/DrawLog';
import Beat from './bar/Beat';
import Note from './bar/Note';
import TimeSignature from './bar/TimeSignature';

class Bar extends Drawable {

  /**
   *
   * @param {String} timeSignature
   */
  constructor(timeSignature) {
    super();

    invariant(timeSignature, 'Required parameter `{timeSignature}`');
    this._timeSignature = new TimeSignature(timeSignature);
    this._beats = [];
    this._newLine = false;
  }

  draw(ctx) {
    this.beforeDraw(ctx);

    this._beats.forEach(beat => {
      beat.draw(ctx);
    });

    this.afterDraw(ctx);
  }

  /**
   *
   * @return {Boolean} isNewLine
   */
  isNewLine() {
    return newLine;
  }

  /**
   *
   * @param {Boolean} newLine
   */
  setNewLine(newLine) {
    this._newLine = newLine;
  }

  /**
   * Add a note in the bar. Automaticaly creates beats
   * @param {Note} note
   */
  addNote(n) {
    let note = new Note(n);
    let beat = this._getCurrentBeat();

    if (beat.isFull()) {
      beat = this._createNewBeat();
    }

    beat.addNote(note);
    return this;
  }

  /**
   * Returns a list with all the bar beat notes
   * @returns {Note[]} list with all the bar beat notes
   */
  getNotes() {
    return this._notes;
  }

  /**
   *
   * @returns {Number} width
   */
  getWidth() {
    var width = 0;

    // this._notes.forEach(function (note) {
    //     width += note.getWidth();
    // });

    return width;
  }

  _getCurrentBeat() {
    if (this._beats.length === 0) {
      this._createNewBeat();
    }
    // Return the last beat;
    return this._beats[this._beats.length - 1];
  }

  _createNewBeat() {
    let beat = new Beat(this._timeSignature);
    this._beats.push(beat);
    return beat;
  }

  getBeats() {
    // const BEAT_DURATION = 4;
    // let beatList = [];
    // let beat = [];
    // let duration = 0;
    //
    // this._notes.forEach((note, idx) => {
    //   beat.push(note);
    //
    //   duration += BEAT_DURATION / note.getDuration();
    //
    //   // If beat is full, push it on list
    //   if (duration >= 1) {
    //     beatList.push(beat);
    //     beat = [];
    //     duration = 0;
    //   }
    // });

    return this._beats;
  }

  getTimeSignature() {
    return this._timeSignature;
  }

}

export default Bar;
