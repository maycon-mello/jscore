/*
 * Key name enum
 *
 */

class KeyName {

  constructor(name, value) {
    this.value = value;
    this.name = name;
  }

  toString() {
    return this.name;
  }
}

let KEY_NAME = {};
let nameList = [];

[
  ['C'],
  ['C#', 'Db'],
  ['D'],
  ['D#', 'Eb'],
  ['E'],
  ['F'],
  ['F#', 'Gb'],
  ['G'],
  ['G#', 'Ab'],
  ['A'],
  ['A#', 'Bb'],
  ['B'],
].forEach((name, idx) => {
  name.forEach(n => {
    nameList.push(n);
    KEY_NAME[n] = new KeyName(n, idx);
  });
});

export const KeyNameList = nameList;
export default KEY_NAME;
