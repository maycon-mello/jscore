const NOTE_HEAD_HEIGHT = 11;


const defaultProps = {
  NOTE_HEAD_HEIGHT,
  NOTE_HEAD_WIDTH: 15,
  NOTE_RIGHT_PADDING: 50,
  NOTE_STEAM_HEIGHT: 35,
  NOTE_BEAM_HEIGHT: 4,

  // STEAM
  STAFF_HEIGHT:  NOTE_HEAD_HEIGHT * 4, // NOTE_HEAD_HEIGHT * 4

  // BAR
  BAR_WIDTH: 250,

  // Default Padding
  PADDING: 10,
};


export const getProps = (scale) => {
  let props = {};

  Object.keys(defaultProps).forEach(key => {
    let value = parseFloat(defaultProps[key]);
    props[key] = value * scale;
  });

  return props;
}
