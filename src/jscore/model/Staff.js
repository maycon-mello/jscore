/*
 * @require jscore.model.Bar
 * @requires jscore.model.cleff.TrebleCleff
 */
jscore.model.Staff = (function () {
   
    /**
     * @exports jscore.model.Staff
     * @constructor
     * @param {String} cleffName
     */
    var Staff = function (cleffName) {
        //this.cleff = TrebleCleff.create(cleffName);
    };
    /**
     * @private
     * @property {Array<Bar>}
     */
    Staff.prototype._barList = [];
    /**
     * @private
     * @property {Cleff}
     */
    Staff.prototype._cleff = null;
    /**
     * @param {RenderingContext} ctx
     */
    Staff.prototype.draw = function (ctx) {
        var startX = ctx.x;
        this.cleff.draw(ctx);
        this.bars.forEach(function (bar) {
            ctx.x = startX;
            //ctx.y += this.getHeight();
            bar.draw(ctx);
        });
    };
    /**
     * 
     * @param {String} timeSignature ex.: 2/4, 3/4, 12/8 ...
     * @returns {Bar} created bar
     */
    Staff.prototype.createBar = function (timeSignature) {
        //if a timeSignature is not defined the last staff bar timeSignature will be used
        //if the staff has no bars, so '4/4' will be assumed as timeSignature
        if (!timeSignature) {
            var lastBar = this._getLastBar();
            timeSignature = lastBar ? lastBar.timeSignature : '4/4';
        }
        var bar = new Bar(timeSignature);
        this._barList.push(bar);
        return bar;
    };
    /**
     * 
     * @param {Object} args 
     * @returns {Staff} this
     */
    Staff.prototype.addNote = function (args) {
        var bar = this._getLastBar();
        if (!bar){
            bar = this.createBar();
        }
        bar.addNote(args);
        return this;
    };
    /**
     * 
     * @param {Object} args 
     * @returns {Staff} this
     */
    Staff.prototype.addRest = function (args) {
        var bar = this._getLastBar();
        if (!bar){
            bar = this.createBar();
        }
        bar.addRest(args);
        return this;
    };
    /**
     * @private
     * @returns {Bar} last staff bar
     */
    Staff.prototype._getLastBar = function () {
        if (this._barList.length > 0){
            return this._barList[this._barList.length - 1];
        } else {
            return null;
        }
    };
    /**
     * @return {Cleff} cleff 
     */
    Staff.prototype.getCleff = function () {
        return this._cleff;
    };
    /**
     * @param {Cleff} cleff
     */
    Staff.prototype.setCleff = function (cleff) {
        this._cleff = cleff;
    };

    return Staff;
})();