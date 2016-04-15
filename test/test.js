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

    // Create a Whole note Chord
    let noteOptions = {
      keys: ['c1', 'e1', 'f1'],
      duration: 1, // WHOLE NOTE
      orientation: 1,
      modifiers: [],
    }

    staff.addNote(noteOptions);

    let note = bar.notes[0];
    assert.equal(note.heads.length, 3);
    assert.equal(note.beam, null);
    assert.equal(note.steam, null);
  })

});
