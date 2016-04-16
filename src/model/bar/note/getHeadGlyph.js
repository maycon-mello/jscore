import getGlyph from '../../../glyph/getGlyph';
import HeadGlyph from '../../../constants/glyphs/NoteHead';

export default (duration) => {
  switch (duration) {
    case 1: {
      return getGlyph(HeadGlyph.WHOLE);
    }
    case 2: {
      return getGlyph(HeadGlyph.HALF);
    }
    default: {
      return getGlyph(HeadGlyph.DEFAULT);
    }
  }
}
