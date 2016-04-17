import jsdom from 'mocha-jsdom';
import DrawLog from '../../src/util/DrawLog';
import Logger from '../../src/util/Logger';

import { SCORE } from '../../src/test/data';
import { getScore } from './getScore';

jsdom();

//fill content

// Disable console log
DrawLog.setLogEnabled(false);
Logger.setLogEnabled(false);


module.exports = {
  getScore,
  SCORE,
};
