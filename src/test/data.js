import { NoteDuration } from '../constants/Note';

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
          duration: NoteDuration.HALF,
          orientation: 1,
          modifiers: [],
        },
        // Note
        {
          keys: ['c1', 'e1', 'f1'],
          duration: NoteDuration.QUARTER,
          orientation: 1,
          modifiers: [],
        },
        // Note
        {
          keys: ['c1', 'e1', 'f1'],
          duration: NoteDuration.QUARTER,
          orientation: 1,
          modifiers: [],
        }
      ],
    },
    {
      timeSignature: '4/4',
      notes: [
        // Note
        {
          keys: ['c1', 'e1', 'f1'],
          duration: NoteDuration.QUARTER,
          orientation: 1,
          modifiers: [],
        },
        // Note
        {
          keys: ['c1', 'e1', 'f1'],
          duration: NoteDuration.QUARTER,
          orientation: 1,
          modifiers: [],
        },
        // Note
        {
          keys: ['c1', 'e1', 'f1'],
          duration: NoteDuration.EIGHT,
          orientation: 1,
          modifiers: [],
        },
        {
          keys: ['c1', 'e1', 'f1'],
          duration: NoteDuration.QUARTER,
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
