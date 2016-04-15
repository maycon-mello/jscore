import Duration from '../../src/constants/NoteDuration'

const staff1 = {
  clef: 'treble',
  bars: [
    // Bar
    {
      timeSignature: '4/4',
      notes: [
        // Note
        {
          keys: ['c1', 'e1', 'f1'],
          duration: Duration.HALF,
          orientation: 1,
          modifiers: [],
        },
        // Note
        {
          keys: ['c1', 'e1', 'f1'],
          duration: Duration.QUARTER,
          orientation: 1,
          modifiers: [],
        },
        // Note
        {
          keys: ['c1', 'e1', 'f1'],
          duration: Duration.QUARTER,
          orientation: 1,
          modifiers: [],
        },
      ],
    },
    // Bar...
  ],
}

export const SCORE = {
  staffs: [staff1],
}
