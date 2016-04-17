import invariant from 'invariant';
import Staff from './Staff';

class Score {

  /**
   *
   * @param {RendererContext} ctx
   */
  constructor (ctx) {
    this._ctx = ctx;
    this._staffList = [];

    ctx.observers.push(this);
  }

  /*
   *
   * @param {RendererContext} ctx
   */
  draw () {
    var ctx = this._ctx;

    // TODO: draw titles
    ctx.y = 50;
    this._staffList.forEach(staff => {
      staff.draw(ctx);
    });

  }

  render() {
    this.draw();
  }

  /**
   *
   * @param {String} cleff
   * @return {Staff} createdStaff
   */
  createStaff (clefName) {
    invariant(clefName, 'Invalid clef');

    let staff = new Staff(clefName);
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

  setData(data) {
    let score = this;
    data.staffs.forEach(currentStaff => {
      let staff = score.createStaff(currentStaff.clef);

      currentStaff.bars.forEach(b => {
        staff.createBar(b.timeSignature);
        b.notes.forEach(note => staff.addNote(note));
      })
    });
  }
}

export default Score;
