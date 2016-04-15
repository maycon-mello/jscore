import invariant from 'invariant';

import Score from './model/Score';
import RendererContext from './RendererContext';
import Viewport from './ui/Viewport';
import Tickable from './model/Tickable';
import Glyph from './glyph/Glyph';

/**
 *
 * @param {HTMLElement} container
 * @return {Score} score
 */
function createScore ({container}) {
  invariant(container, 'Required parameter `{container}`');

  let canvasElement = document.createElement('canvas');
  let ctx = new RendererContext({
    container,
    canvasElement
  });

  let score = new Score(ctx);

  return score;
}

export default createScore;
