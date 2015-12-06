var Score= require('./model/Score.js');
import RendererContext from './RendererContext';
import Viewport from './ui/Viewport';
import Tickable from './model/Tickable';
import Glyph from './glyph/Glyph';

function jScore (args) {

  console.log(score);
  //
  let canvas = document.createElement('canvas');
  args.container.appendChild(canvas);
  //add a new argument in args object
  args.canvasElement = canvas;
  let ctx = new RendererContext(args);
      ctx.observers.push(score);

  let score = new Score(ctx);
  //
  //let viewport = new Viewport(ctx);
  //
  return score;
}

jScore.Glyph = Glyph;

window.jScore = jScore;
