/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mzm.score.test;

import com.mzm.score.bar.Bar;
import com.mzm.score.bar.Beat;
import com.mzm.score.DrawLog;
import com.mzm.score.RendererContext;
import com.mzm.score.cleff.TrebleCleff;
import com.mzm.score.bar.note.Key;
import com.mzm.score.bar.note.KeyName;
import com.mzm.score.bar.note.Note;

/**
 *
 * @author maycon.mellos
 */
public class BeatTest {
    public static void run() throws Exception {
        
        Beat beat = new Beat();
        //
        beat.addNote(Note.create(new Key[]{new Key(KeyName.B, 2),new Key(KeyName.E, 3)}, 16, 1));
        beat.addNote(Note.create(new Key[]{new Key(KeyName.B, 2),new Key(KeyName.E, 3)}, 16, 1));
        beat.addNote(Note.create(new Key[]{new Key(KeyName.B, 2),new Key(KeyName.E, 3)}, 16, 1));
        beat.addNote(Note.create(new Key[]{new Key(KeyName.B, 2),new Key(KeyName.E, 3)}, 16, 1));
        //bar.addNote(Note.create(new Key[]{new Key(KeyName.C, 3)}, 4));
        //bar.addNote(Note.create(new Key[]{new Key(KeyName.C, 3)}, 4));
        //bar.addNote(Note.create(new Key[]{new Key(KeyName.C, 3)}, 4));
        //
        
        Test.test(beat.duration == 1.0);
        //
    }
}
