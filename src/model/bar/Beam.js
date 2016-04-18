import Drawable from "../Drawable";

class Beam extends Drawable {

  /**
   *
   * @param {Note[]} notes
   */
  constructor (notes) {
    super('Beam');
    /**
     *
     * @private
     * @property {Note[]}  notes
     */
    this._notes = notes || [];
  }

  /**
   * @public
   * @param {Note} note
   */
  addNote (note) {
    note.setBeam(this);
    this._notes.push(note);
  };

 /**
  *  Draws the beam graphics
   * @public
   * @param {RendererContext} ctx
   */
  draw (ctx) {
    this.beforeDraw(ctx);
    console.log(this._notes);
    let steamI = this._notes[0].getSteam();
    let steamF = this._notes[this._notes.length - 1].getSteam();

    let width = steamF.p1.x;
    var canvas = ctx.canvas;
    canvas.save();
    canvas.beginPath();
    //canvas.moveTo(steamI.p1.x, steamI.p1.y);
    canvas.moveTo(steamI.p1.x, steamI.p1.y)
    canvas.lineTo(steamF.p1.x + 1, steamF.p1.y);
    canvas.lineWidth = 5;
    canvas.stroke();
    canvas.restore();

    //
    this.afterDraw(ctx);
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
