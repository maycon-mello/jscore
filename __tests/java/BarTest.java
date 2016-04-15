/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mzm.score.test;

import com.mzm.score.bar.Bar;
import com.mzm.score.DrawLog;
import com.mzm.score.RendererContext;
import com.mzm.score.cleff.TrebleCleff;
import com.mzm.score.formatter.BarFormatter;
import com.mzm.score.bar.note.Key;
import com.mzm.score.bar.note.KeyName;
import com.mzm.score.bar.note.Note;

/**
 *
 * @author maycon.mellos
 */
public class BarTest {

    public static void run() throws Exception {
        RendererContext ctx = RendererContext.getInstance();
        ctx.setScale(1);
        ctx.x = 100;
        ctx.y = 100;
        ctx.cleff = new TrebleCleff();
        //crea a bar
        Bar bar = new Bar();
        //
        bar.addNote(Note.create(new Key[]{new Key(KeyName.B, 2)},
                Note.DURATION_EIGHT, Note.ORIENTATION_UP));
        bar.addNote(Note.create(new Key[]{new Key(KeyName.B, 2), new Key(KeyName.C, 3)},
                Note.DURATION_EIGHT, Note.ORIENTATION_UP));
        //bar.addNote(Note.create(new Key[]{new Key(KeyName.C, 3)}, 4));
        //bar.addNote(Note.create(new Key[]{new Key(KeyName.C, 3)}, 4));
        //bar.addNote(Note.create(new Key[]{new Key(KeyName.C, 3)}, 4));
        //

        //Test.test(bar.getNotes().size() == 4);
        //
        bar.draw(ctx);
        DrawLog.getInstance().print().clear();
    }

}
