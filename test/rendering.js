import { assert } from 'chai';
import { getScore, SCORE } from './setup/env';

import Clef from '../src/model/clef/Clef';


describe('Render score', function() {

  let score;

  beforeEach(() => {
    score = getScore();
  });

  it('call', () => {
    score.render();
  });

});
