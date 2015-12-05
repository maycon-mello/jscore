import Score from './model/Score';
import RendererContext from './RendererContext';
import Viewport from './ui/Viewport';
import Tickable from './model/Tickable';

function jScore (args) {
  var score = new Score();
  //
  var canvas = document.createElement('canvas');
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
var tick = new Tickable(500, 400);
console.log(tick);

window.jScore = jScore;
