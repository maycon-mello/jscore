/*
 * @require jscore.model.Score
 * @require jscore.RendererContext
 */
//var Score = require("model/Score.js");
jscore.create = (function () {
    var Score = jscore.model.Score;
    var RendererContext = jscore.RendererContext;
    var Viewport = jscore.ui.Viewport;
    //
    function create(args) {
        var score = new Score();
        //
        var canvas = document.createElement("canvas");
        args.container.appendChild(canvas);
        //add a new argument in args object
        args.canvasElement = canvas;
        var ctx = new RendererContext(args);
            ctx.observers.push(score);
        //
        var viewport = new Viewport(ctx);
        //
        return score;
    }

    return create;
})();