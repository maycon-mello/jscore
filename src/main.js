import createScore from './createScore';
import { SCORE }  from './test/data';

import DrawLog from './util/DrawLog';

DrawLog.setLogEnabled(true);

let container = document.getElementById('root');
let score = createScore({container});


score.setData(SCORE);
score.render();

console.log(score);
console.log('oo');
console.log('56');
