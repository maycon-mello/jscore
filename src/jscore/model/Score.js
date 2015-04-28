/*
 *
 * @require jscore.model.Staff;
 */
jscore.model.Score = (function () {
    /**
     * @exports jscore.Score 
     * @constructor
     */
    function Score() {

    }
    /**
     * @private
     * @property {Staff} staffList
     */
    Score.prototype._staffList = [];
    /*
     * 
     * @param {RendererContext} ctx
     */
    Score.prototype.update = function (ctx) {
        this._staffList.forEach(function (staff) {
            staff.draw(ctx);
        });
    };
    /**
     * 
     * @param {String} cleff
     * @return {Staff} createdStaff
     */
    Score.prototype.createStaff = function (cleff) {
        var staff = new Staff(cleff);
        this._staffList.push(staff);
        return staff;
    };


    return Score;
})();
/*
 <body>
 <div id="jScore1"></div>
 </body>
 
 var score = new jscore.create({
 container: document.getElementById("jScore1"),
 width: 600,
 height: 400
 });
 var staff1 = score.createStaff('trable');
 var staff2 = score.createStaff('bass');
 //
 staff1.addNote({
 heads: ['c2','e2','g2'],
 chord: 'CM7',
 modifiers: ['dot','accent','flam']
 duration: 4
 }).addRest({
 duration: 4
 });1;
 //
 staff2.addNote({
 heads: ['c#1','e1'],
 duration: 4
 }).addRest({
 duration: 4
 });
 */