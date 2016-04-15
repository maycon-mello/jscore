import jsdom from 'mocha-jsdom';
import DrawLog from '../../src/util/DrawLog';
import { SCORE } from './score';
import { getScore } from './getScore';

jsdom();

// Disable console log
DrawLog.setLogEnabled(false);

module.exports = {
  getScore,
  SCORE,
};
