module("Score tests");
/*
 * Prepare objects
 */
var score = jScore({
    container:  document.getElementById("jscore-container")
});

var staff = score.createStaff();
var bar = staff.createBar('4/4');
var note = bar.addNote({
  keys: ['c3'],
  duration: 1,
  orientation: 1
});
console.log(score);
console.log(staff);
console.log(bar);

score.draw();

/*
 * Tests
 */
test("score object", function () {
    //ok(score._staffList.length === 1, "score staff list length");
    //
});
