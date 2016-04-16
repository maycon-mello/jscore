import Tickable from '../Tickable';
import Key from '../bar/note/Key';


class TrebleClef extends Tickable {
    /*
      ------ F    4
             E    3
      ------ D    2
             C    1
      ------ B => 0
             A   -1
      ------ G   -2
             F   -3
      ------ E   -4
   */
    constructor() {
      super();
      this.middle = new Key('B2');
    }

    toString() {
      return 'treble';
    }

    getKeyLocation (k) {
        // int middleKey = middle.getKeyName().ordinal();
        // int currentKey = k.getKeyName().ordinal();
        //
        // int middleOctave = middle.getOctave();
        // int currentOctave = k.getOctave();
        // int location = (currentOctave - middleOctave) * 7;
        //
        // return location + (currentKey - middleKey);
        return -3;
    }

    draw (ctx) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}

export default TrebleClef;
