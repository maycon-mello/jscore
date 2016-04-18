import { NoteDuration } from '../constants/Note';

const stafa2 = {
  clef: 'treble',
  bars: [
    // Bar
    {
      timeSignature: '4/4',
      notes: [
        // Note
        {
          keys: ['a2'],
          duration: NoteDuration.QUARTER,
          orientation: 1,
          modifiers: [],
        },
        {
          keys: ['g2'],
          duration: NoteDuration.QUARTER,
          orientation: 1,
          modifiers: [],
        },
        // Note
        {
          keys: ['c2'],
          duration: NoteDuration.QUARTER,
          orientation: 1,
          modifiers: [],
        },
        // Note
        {
          keys: ['c2'],
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
          keys: ['b2'],
          duration: NoteDuration.QUARTER,
          orientation: 1,
          modifiers: [],
        },
        // Note
        {
          keys: ['a2'],
          duration: NoteDuration.SIXTEENTH,
          orientation: 1,
          modifiers: [],
        },
        {
          keys: ['a2'],
          duration: NoteDuration.SIXTEENTH,
          orientation: 1,
          modifiers: [],
        },
        {
          keys: ['a2'],
          duration: NoteDuration.SIXTEENTH,
          orientation: 1,
          modifiers: [],
        },
        {
          keys: ['a2'],
          duration: NoteDuration.SIXTEENTH,
          orientation: 1,
          modifiers: [],
        },
        // Note
        {
          keys: ['e2'],
          duration: NoteDuration.EIGHT,
          orientation: 1,
          modifiers: [],
        },
        {
          keys: ['g2'],
          duration: NoteDuration.EIGHT,
          orientation: 1,
          modifiers: [],
        },
        {
          keys: [], // Rest
          duration: NoteDuration.EIGHT,
          orientation: 1,
          modifiers: [],
        },
        {
          keys: ['c2'],
          duration: NoteDuration.EIGHT,
          orientation: 1,
          modifiers: [],
        },
      ],
    },
    // Bar...
  ],
}

export const SCORE = {
  staffs: [stafa2],
}
