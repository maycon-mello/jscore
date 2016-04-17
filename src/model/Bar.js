import invariant from 'invariant';
import Drawable from './Drawable';
import DrawLog from '../util/DrawLog';
import Note from './bar/Note';

class Bar extends Drawable {

  /**
   *
   * @param {String} timeSignature
   */
  constructor(timeSignature) {
    super();

    invariant(timeSignature, 'Required parameter `{timeSignature}`');

    this._timeSignature = timeSignature;
    this._notes = [];
    this._steams = [];
    this._newLine = false;
  }

  draw(ctx) {
    this.beforeDraw(ctx);

    this._notes.forEach(note => {
      note.draw(ctx);
    });

    this._steams.forEach(steam => {
      steam.draw(ctx);
    })

    this.afterDraw(ctx);
  }

  drawTimeSignature() {

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
    var note = new Note(n);
    this._notes.push(note);
    return note;
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

    this._notes.forEach(function (note) {
        width += note.getWidth();
    });

    return width;
  }

  _createSteams() {
    this._steams = [];
    // if note getDuration
  }

}

export default Bar;
