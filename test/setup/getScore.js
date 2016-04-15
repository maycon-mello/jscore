import createScore from '../../src/createScore';
import { SCORE } from './score';

export const getScore = () => {
  let score = createScore({
    container: document.createElement('div'),
  });

  SCORE.staffs.forEach(currentStaff => {
    let staff = score.createStaff(currentStaff.clef);

    currentStaff.bars.forEach(b => {
      staff.createBar(b.timeSignature);
      b.notes.forEach(note => staff.addNote(note));
    })
  })

  return score;
}
