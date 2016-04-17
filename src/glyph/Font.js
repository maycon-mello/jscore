import gonville from '../font/gonville';

// TODO: let user choose another font

class Font {

  constructor() {
    this.glyphs = [];
    this.familyName = '';
  }

  static getDefault() {
    return gonville;
  }
}

export default Font;
