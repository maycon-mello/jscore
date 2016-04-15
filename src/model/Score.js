/**
 * @package jscore.model
 */
import invariant from 'invariant';
import Staff from './Staff';
import Clef from './clef/Clef';

class Score {
  constructor (ctx) {
    this.ctx = ctx;
    this._staffList = [];

    ctx.observers.push(this);
  }
  /*
   *
   * @param {RendererContext} ctx
   */
  draw () {
    var ctx = this.ctx;
    this._staffList.forEach(function (staff) {
      staff.draw(ctx);
    });
  }
  /**
   *
   * @param {String} cleff
   * @return {Staff} createdStaff
   */
  createStaff (clefName) {
    let clef = Clef[clefName];
    invariant(clef, 'Invalid clef');

    let staff = new Staff(clef);

    this._staffList.push(staff);

    return staff;
  }
  /**
   *
   * @param {Number} idx - staff index
   * @return {Staff} staff
   */
  getStaff(idx) {
    return this._staffList[idx];
  }

  static Clef = Clef;
  static Staff = Staff;
}

export default Score;


/*
 <body>
 <div id="jScore1"></div>
 </body>

 var score = new jscore.create({
 container: document.getElementById("jScore1"),
 width: 600,
 height: 400
 });
 var staff1 = score.createStaff('trable');
 var staff2 = score.createStaff('bass');
 //
 staff1.addNote({
 heads: ['c2','e2','g2'],
 chord: 'CM7',
 modifiers: ['dot','accent','flam']
 duration: 4
 }).addRest({
 duration: 4
 });1;
 //
 staff2.addNote({
 heads: ['c#1','e1'],
 duration: 4
 }).addRest({
 duration: 4
 });
 */
