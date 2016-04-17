import invariant from 'invariant';
import Beam from './Beam';
import Drawable from '../Drawable';

class Beat extends Drawable {

  constructor(timeSignature) {
    super('');
    this._notes = [];
    this._beam = null;
    this._duration = 0;
    this._size = timeSignature.getBeatDuration() || 4;
  }

  /**
   *
   * @param {Note} n
   */
  addNote(n) {
    invariant(!this.isFull(), 'Invalid note insertion, beat is full');

    this._duration += this._size / parseFloat(n.getDuration());
    this._notes.push(n);
    this._createBeams();
  };

  /**
   * Draw beat notes
   * @param {RendererContext}
   */
  draw(ctx) {
    this.beforeDraw(ctx);

    // Set rest position

    this._notes.forEach(function(note) {
        note.draw(ctx);
    });

    if(this._beam !== null) {
      this._beam.draw(ctx);
    }

    this.afterDraw(ctx);
  };

  /**
   * Format beat notes and create a beam if it needs
   */
  _createBeams() {
    var currentNote,
        nextNote,
        lastNote,
        flagedNotes = 0,
        _this = this;

    _this.beam = null;

    this._notes.forEach((note) => {
      if (note.hasFlag()) {
        flagedNotes++;
      }
    });

    if (flagedNotes > 1) {
      _this._beam = new Beam();
      this._notes.forEach((note) => {
        _this._beam.addNote(note);
      });
    }
  };

  getDuration() {
    return this._duration;
  }

  isFull() {
    return this._duration >= 1;
  }

  /**
   *
   * @returns {Number}
   */
  getWidth() {
    var width = 0;
    this.notes.forEach(function(note) {
        width += note.getWidth();
    });
    return width;
  };
}

export default Beat;
