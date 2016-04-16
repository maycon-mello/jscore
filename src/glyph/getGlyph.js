import createGlyph from './createGlyph';

// Cached glyphs
let glyph_cache = {};

export default (code) => {
  if (!glyph_cache[code]) {
    glyph_cache[code] = createGlyph(code);
  }

  return glyph_cache[code];
}
