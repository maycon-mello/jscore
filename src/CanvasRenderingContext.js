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

const get2DContext = (element) => {
  if (element.getContext) {
    return element.getContext('2d');
  }
  return fakeContext;
}


export default get2DContext;
