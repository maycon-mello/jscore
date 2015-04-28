module("Note tests");
/*
 * Prepare objects
 */
var Note = jscore.model.bar.Note;
var NoteDuration = jscore.model.bar.note.NoteDuration;
var Key = jscore.model.bar.note.Key;
var KeyName = jscore.model.bar.note.KeyName;
var Bar = jscore.model.Bar;


//test("Quarter note test", function () {
    var bar = new Bar();
        bar.addNote(new Note({
            keys: ['c3'],
            duration: Note.Duration.QUARTER
        }));
        bar.addNote(new Note({
            keys: ['c3'],
            duration: Note.Duration.QUARTER
        }));
        bar.addNote(new Note({
            keys: ['c3'],
            duration: Note.Duration.QUARTER
        }));
    console.log(bar.notes);
    //
//});



    
