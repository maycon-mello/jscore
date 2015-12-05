var NoteUtil = {};

/**
 *
 * @private
 * @param {Array<Key>} keys
 * @param {Integer} duration
 */
NoteUtil.createHeads(keys, duration) {
    var heads = [];
    keys.forEach(function (key) {
        if (typeof key === 'string') {
            key = new Key(key);
        }
        heads.push(new Head(key, duration));
    });
    return heads;
}

NoteUtil.log = {
  rest: function (note, ctx) {
    var text = [
      "rest(duration:", note.duration,
      ", width: ", ctx.getScaledValue(note.getWidth()),
      ", x:", ctx.x,
      ", y:", ctx.y, ")"
    ].join("");
    //
    DrawLog.add(text).addLevel();
  },
  note: function (note, ctx) {
    var text = [
      "note(duration:", note.duration,
      ", width: ", ctx.getScaledValue(note.getWidth()),
      ", x:", ctx.x,
      ", y:", ctx.y,
      ")"
    ].join('');
    //
    DrawLog.add(text).addLevel();
  }
}

exports = NoteUtil;
