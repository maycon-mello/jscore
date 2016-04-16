import createScore from '../../src/createScore';
import { SCORE } from '../../src/test/data';

export const getScore = () => {
  let score = createScore({
    container: document.createElement('div'),
  });

  score.setData(SCORE);

  return score;
}
