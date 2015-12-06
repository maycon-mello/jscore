import RendererContext from '../../../RendererContext';
import DrawLog from '../../../util/DrawLog';
import Tickable from "../../Tickable";

class Beam extends Tickable {

  /**
   *
   * @param {jscore.model.bar.Note[]} notes
   */
  constructor (notes) {
    super();
    /**
     *
     * @private
     * @property {jscore.model.bar.Note[]}  notes
     */
    this.notes = notes || [];
  }
  /**
   * @public
   * @param {jscore.model.bar.Note} note
   */
  addNote (note) {
    note.setBeam(this);
    this.notes.push(note);
  };
 /**
  *  Draws the beam graphics
   * @public
   * @param {jscore.RendererContext} ctx
   */
  draw (ctx) {
    var steamI = this.notes[0].getSteam();
    var steamF = this.notes[this.notes.length - 1].getSteam();
    DrawLog.add("beam(x0:" + steamI.p0.x + ", y0:" + steamI.p0.y + ")");
  };
  /**
   * @public
   * @param {Integer} duration
   * @return {Integer} beam count
   */
  getBeamCount (duration) {
    var beams = 0;
    if(duration >= 8){
        beams = 1;
    }
    if(duration >= 16){
        beams = 2;
    }
    if(duration >= 32){
        beams = 3;
    }
    if(duration >= 64){
        beams = 4;
    }
    return beams;
  }

}

module.exports = Beam;
