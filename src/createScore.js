import invariant from 'invariant';

import Score from './model/Score';
import RendererContext from './RendererContext';
import Viewport from './ui/Viewport';
import Tickable from './model/Tickable';

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

  container.appendChild(canvasElement);

  let score = new Score(ctx);

  return score;
}

export default createScore;
