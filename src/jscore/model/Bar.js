import Tickable from "./";
import DrawLog from "../util";
import Beat from "./bar"

class Bar extends Tickable {

  constructor () {
    /**
     * 
     * @private
     * @property {jscore.model.bar.Note[]} beats
     */
    this.notes = [];
    /**
     * 
     * @private
     * @property {Boolean} newLine 
     */
    this.newLine = false;
  }

  draw (ctx) {
    var startX, beatCount, y, headHeight, i;
    //Calculate beams and bar height
    //BarFormatter.format(this);
    //
    startX = ctx.x;
    DrawLog.add("bar").addLevel();
    //draw vertical line
    //ctx.drawLine(c.x, c.getTopPosition(), c.x, c.getBottomPosition();
    //
    beatCount = 1;
    this.notes.forEach(function (note) {
      //DrawLog.add(String.format("beat " + beatCount)).addLevel();
      note.draw(ctx);
      DrawLog.removeLevel();
      //beatCount++;
    });
    //draw vertical line
    //ctx.drawLine(c.x, c.y, c.x, c.y + c.getStaffHeight();
    //draw horizontal lines
    y = ctx.y;
    headHeight = ctx.getProperty(RendererContext.Property.NOTE_HEAD_HEIGHT);
    //
    for(i = 0; i < 5; i++){
      //ctx.drawLine(startX, y, c.x, y);
      y += headHeight;
    }
    DrawLog.removeLevel();
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
  addNote (note) {
    /*var lastBeat = this.getLastBeat();
    if(lastBeat.duration === 1){
        this.beats.push(new Beat());
        lastBeat = this.getLastBeat();
    }
    lastBeat.addNote(note);*/
    this.notes.push(note);
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
}

exports = Bar;