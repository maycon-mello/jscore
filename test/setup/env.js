import jsdom from 'mocha-jsdom';
import DrawLog from '../../src/util/DrawLog';
import { SCORE } from '../../src/test/data';
import { getScore } from './getScore';

jsdom();

//fill content

// Disable console log
DrawLog.setLogEnabled(false);

module.exports = {
  getScore,
  SCORE,
};
