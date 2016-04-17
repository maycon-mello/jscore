let fakeContext = {
  quadraticCurveTo: () => {},
  bezierCurveTo: () => {},
  lineTo: () => {},
  moveTo: () => {},
  beginPath: () => {},
  fill: () => {},
  stroke: () => {},
  closePath: () => {},
  save: () => {},
  restore: () => {},
  fillRect: () => {},
};


/**
 *
 * @param (HTMLCanvasElement) element
 */
export default (element) => {
  if (element.getContext) {
    return element.getContext('2d');
  }
  return fakeContext;
};
