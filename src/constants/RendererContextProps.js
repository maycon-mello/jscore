const defaultProps = {
  NOTE_HEAD_HEIGHT: 10,
  NOTE_HEAD_WIDTH: 15,
  STEAM_HEIGHT: 40,
  STAFF_HEIGHT:  40, // NOTE_HEAD_HEIGHT * 4
  NOTE_RIGHT_PADDING: 50,
  BAR_WIDTH: 100,
};


export const getProps = (scale) => {
  let props = {};

  Object.keys(defaultProps).forEach(key => {
    let value = parseFloat(defaultProps[key]);
    props[key] = value * scale;
  });

  return props;
}
