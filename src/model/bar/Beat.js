/**
 * @package jscore.model.bar
 */

import Beam from './note/Beam';

class Beat {

  constructor () {
    /**
     *
     * @private
     * @property {jscore.model.bar.Note[]}
     */
    this.notes = [];
    /**
     *
     * @private
     * @property {Number}
     */
    this.duration = 0;
    /**
     *
     * @private
     * @property {jscore.model.bar.note.Beam}
     */
    this.beam = null;
  }

  /**
   *
   * @param {jscore.model.bar.Note} n
   */
  addNote (n) {
      this.duration += 4 / parseFloat(n.getDuration());
      this.notes.push(n);
      this.format();
  };
  /**
   * Draw beat notes
   * @param ctx
   */
  draw  (ctx) {
      this.notes.forEach(function(note) {
          note.draw(ctx);
          ctx.x += ctx.getScaledValue(note.getWidth());
      });

      if(this.beam !== null){
          this.beam.draw(ctx);
      }
  };
  /**
   * Format beat notes and create a beam if it needs
   */
  format () {
      var currentNote,
          nextNote,
          lastNote,
          flagedNotes = 0,
          _this = this;;
      //
      _this.beam = null;
      //
      this.notes.forEach(function(note) {
          if(note.hasFlag()){
              flagedNotes++;
          }
      });
      //
      if(flagedNotes > 1){
          _this.beam = new Beam();
          this.notes.forEach(function(note) {
              _this.beam.addNote(note);
          });
      }
  };
  /**
   *
   * @returns {Number}
   */
  getWidth () {
      var width = 0;
      this.notes.forEach(function (note) {
          width += note.getWidth();
      });
      return width;
  };
}

exports = Beat;
