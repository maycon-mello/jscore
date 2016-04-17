const GLYPH_NAME = {
  // Clef
  CLEF_BASS: 'v79',
  CLEF_TREBLE: 'v83',
  CLEF_PERCUSSION: 'v59',

  // Note head
  NOTE_HEAD_WHOLE: 'v53',
  NOTE_HEAD_HALF: 'v81',
  NOTE_HEAD_DEFAULT: 'vb',

  // Flag
  FLAG_EIGHT_UP: 'v54',
  FLAG_EIGHT_DOWN: 'v9a',
  FLAG_SIXTEENTH_UP: 'v3f',
  FLAG_SIXTEENTH_DOWN: 'v8f',
  FLAG_THIRTY_SECOND_UP: 'v47',
  FLAG_THIRTY_SECOND_DOWN: 'v2a',

  // Rest
  REST_WHOLE: '',
  REST_HALF: 'v89',
  REST_QUARTER: 'v7c',
  REST_EIGHT: 'va5',
  REST_SIXTEENTH: 'v3c',
  REST_THIRTY_SECOND: 'v55',

  // Symbols
  ACCENT: 'v42',
  FLAT: 'v85',
  FLAT_FLAT: 'va4',
  SHARP: 'v18',
}

export default class GlyphCode {

  static getFromName(name) {
    return GLYPH_NAME[name];
  }
}
