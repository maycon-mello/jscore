module("Note tests");
/*
 * Prepare objects
 */
var Note = jscore.model.bar.Note;
var NoteDuration = jscore.model.bar.note.NoteDuration;
var Key = jscore.model.bar.note.Key;
var KeyName = jscore.model.bar.note.KeyName;
/*
 * Tests
 */
test("Note static members", function () {
    ok(Note.Orientation.UP === 1, 'Note.Orientation.UP');
    ok(Note.Orientation.DOWN === -1, 'Note.Orientation.DOWN');
    //ok(NoteDuration.WHOLE === 1, 'Note.DURATION_WHOLE');
    ok(Note.Duration.HALF === 2, 'Note.Duration.HALF');
    ok(Note.Duration.QUARTER === 4, 'Note.Duration.QUARTER');
    ok(Note.Duration.EIGHT === 8, 'Note.Duration.EIGHT');
    ok(Note.Duration.SIXTEENTH === 16, 'Note.Duration.SIXTEENTH');
    ok(Note.Duration.THIRTY === 32, 'Note.Duration.THIRTY');
});

test("Quarter note test", function () {
    var n = new Note({
        keys: ['c3','e3','f3'],
        duration: Note.Duration.QUARTER
    });
    //
    ok(n.getHeads().length === 3, 'heads count');
    ok(n.getDuration() === Note.Duration.QUARTER, 'getDuration()');
    //
    n.setOrientation(Note.Orientation.DOWN);
    ok(n.getOrientation() === Note.Orientation.DOWN, 'set/getOrientation()');
    //
    ok(n.getMaxKey().toString() === 'F3', 'getMaxKey()');
    ok(n.getMinKey().toString() === 'C3', 'getMinKey()');
    ok(n.isRest() === false, 'isRest()');
    ok(n.getSteam() instanceof jscore.model.bar.note.Steam, 'getSteam() instanceof Steam');
    ok(n.hasFlag() === false, 'hasFlag');
    //
});
test("Eight note test", function () {
    var n = new Note({
        keys: ['c3','e3'],
        duration: Note.Duration.EIGHT
    });
    //
    ok(n.getHeads().length === 2, 'heads count');
    ok(n.getDuration() === Note.Duration.EIGHT, 'getDuration()');
    ok(n.isRest() === false, 'isRest()');
    ok(n.getSteam() instanceof jscore.model.bar.note.Steam, 'getSteam() instanceof Steam');
    ok(n.hasFlag() === true, 'hasFlag');
    ok(n.flagGlyph === jscore.glyph.Flag , 'flagGlyph == jscore.glyph.Flag');
    //
});


    
