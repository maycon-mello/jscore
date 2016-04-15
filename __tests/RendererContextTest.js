module("Renderer context tests");
//
var canvasElement = document.createElement('canvas');
var RendererContext = jscore.RendererContext;
var ctx = new RendererContext({
    canvasElement: canvasElement
});
//
test("Renderer context scale", function () {
    //scale = 1
    ok(ctx.getProperty('NOTE_HEAD_HEIGHT') === 10, 'NOTE_HEAD_HEIGHT (scale = 1)');
    ok(ctx.getProperty('NOTE_HEAD_WIDTH') === 15, 'NOTE_HEAD_WIDTH (scale = 1)');
    ctx.setScale(2);
    ok(ctx.getProperty('NOTE_HEAD_HEIGHT') === 20, 'NOTE_HEAD_HEIGHT (scale = 2)');
    ok(ctx.getProperty('NOTE_HEAD_WIDTH') === 30, 'NOTE_HEAD_WIDTH (scale = 2)');
    ctx.setScale(0.5);
    ok(ctx.getProperty('NOTE_HEAD_HEIGHT') === 5, 'NOTE_HEAD_HEIGHT (scale = 0.5)');
    ok(ctx.getProperty('NOTE_HEAD_WIDTH') === parseInt(15/2), 'NOTE_HEAD_WIDTH (scale = 0.5)');
    ctx.setScale(1);
});