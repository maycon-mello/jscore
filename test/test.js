import jsdom from 'mocha-jsdom';
import { assert } from 'chai';

// Api
import createScore from '../src/createScore';
import DrawLog from '../src/util/DrawLog';
// model
import Score from '../src/model/Score';
import Clef from '../src/model/clef/Clef';

jsdom();

// Disable console log
DrawLog.setLogEnabled(false);

describe('Creating score', function() {

  let score;
  let staff;

  beforeEach(function() {
    score = createScore({
      container: document.createElement('div')
    });
    staff = score.createStaff('treble');
  })

  it('Score instance', () => {
    assert.instanceOf(score, Score);
    assert.instanceOf(staff.getClef(), Clef.treble);
  });

  it('Creating bar and note', () => {
    assert.equal(staff._barList.length, 0);
    // create bar
    let timeSignature = '4/4'
    let bar = staff.createBar(timeSignature);
    assert.equal(bar.getTimeSignature(), timeSignature);
    assert.equal(staff._barList.length, 1);

    // create note
    let noteOptions = {
      keys: ['c1', 'e1', 'f1'],
      duration: 1,
      orientation: 1,
      modifiers: [],
    }
    let note = staff.addNote(noteOptions);
  })

});
