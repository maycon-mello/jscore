module("Score tests");
/*
 * Prepare objects
 */
var score = jscore.create({
    container:  document.getElementById("jscore-container")
});
/*
 * Tests
 */
test("score object", function () {
    ok(score instanceof jscore.model.Score, "score is a jscore.model.Score instance");
});
