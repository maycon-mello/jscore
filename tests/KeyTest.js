module("Key tests");

var Key = jscore.model.bar.note.Key;
/*
 * Tests
 */
/*
test("KeyName test", function () {
    ok(KeyName.C.value === 0, 'KeyName.C.value');
    ok(KeyName.C.name === 'C', 'KeyName.C.name');
    ok(KeyName.B.value === 6, 'KeyName.B.value');
    ok(KeyName.B.name === 'B', 'KeyName.B.name');
    //
    ok(KeyName.C.compareTo(KeyName.B) === -1, 'KeyName.compareTo result -1');
    ok(KeyName.C.compareTo(KeyName.C) === 0, 'KeyName.compareTo result 0');
    ok(KeyName.D.compareTo(KeyName.C) === 1, 'KeyName.compareTo result 1');
    //
    ok(KeyName.C.toString() === 'C', 'KeyName.toString');
});*/

test("Key test", function () {
    var key = new Key('C', 3);
    ok(key.getKeyName().value === 0, ' key.getKeyName()');
    ok(key.getOctave() === 3, ' getOctave()');
    //setKeyName
    key.setKeyName('D');
    ok(key.getKeyName().value === 2, ' setKeyName()');
    //Set octave
    key.setOctave(2);
    ok(key.getOctave() === 2, ' setOctave()');
    //
    var key2 = new Key('D',3);
    //
    ok(key2.compareTo(key) === 1, 'compareTo');
    ok(key.compareTo(key2) === -1, 'compareTo');
    ok(key.compareTo(key) === 0, 'compareTo');
});