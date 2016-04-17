import invariant from 'invariant';

import Score from './model/Score';
import RendererContext from './RendererContext';
import Viewport from './ui/Viewport';
import Drawable from './model/Drawable';

/**
 *
 * @param {HTMLElement} container
 * @return {Score} score
 */
function createScore ({container}) {
  invariant(container, 'Required parameter `{container}`');

  let canvasElement = document.createElement('canvas');
      canvasElement.setAttribute('width', '800');
      canvasElement.style.border = '1px solid';

  let ctx = new RendererContext({
    container,
    canvasElement
  });

  container.appendChild(canvasElement);

  let score = new Score(ctx);

  return score;
}

export default createScore;
