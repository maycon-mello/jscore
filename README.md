JScore is a music notation rendering API written in JavaScript.

## Example:
```javascript
  import JScore from 'jscore';

  const score = JScore.create('#myScore');

  // Create staff
  const staff = score.createStaff('drumset');

  // Create bars
  const bar1 = staff.createBar('4/4');
  const bar2 = staff.createBar('4/4');

  // Kick, Snare and hihat variables
  let hihat = {
    keys: ['hihat'],
    duration: 8,
    orientation: 1,
    layer: 0,
  });

  let kick = {
    keys: ['kick'],
    duration: 8,
    orientation: -1,
    layer: 1,
  }

  let snare = {
    keys: ['snare'],
    duration: 4,
    orientation: -1,
    layer: 1,
  }

  // Create Hihats
  for (let i = 0; i < 8; i++) {
    bar1.addNote(hihat);
    bar2.addNote(hihat);
  }

  // First bar
  bar1.addNote(kick)
      .addNote(kick)
      .addNote(snare)
      .addNote(kick)
      .addNote(kick)
      .addNote({
        ...snare,
        duration: 8,
      })
      .addNote(kick)

  // Second bar
  bar2.addNote({
        ...kick,
        rest: true,
      })
      .addNote(kick)
      .addNote(snare)
      .addNote(kick)
      .addNote(kick)
      .addNote(snare);

```

![Output](/tools/output.jpg)
