/*
 * @require jscore.model.Score
 * @require jscore.RendererContext
 */
var Score = require("model/Score.js");
var RendererContext = require("RendererContext.js");
var Viewport = require("ui/Viewport.js");
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

