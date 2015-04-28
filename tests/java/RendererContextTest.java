/**
 * *************************************
 */
package com.mzm.score.test;

import com.mzm.score.RendererContext;
import com.mzm.score.bar.note.Beam;
import com.mzm.score.bar.note.Head;
import com.mzm.score.bar.note.Key;
import com.mzm.score.bar.note.KeyName;
import com.mzm.score.bar.note.Note;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author maycon.mellos
 */
public class RendererContextTest {

    public static void run() throws Exception {
        RendererContext ctx = RendererContext.getInstance();
        //scale = 1
        Test.test(ctx.getProperty(RendererContext.Property.NOTE_HEAD_HEIGHT) == 10);
        Test.test(ctx.getProperty(RendererContext.Property.NOTE_HEAD_WIDTH) == 15);
        ctx.setScale(2);
        Test.test(ctx.getProperty(RendererContext.Property.NOTE_HEAD_HEIGHT) == 20);
        Test.test(ctx.getProperty(RendererContext.Property.NOTE_HEAD_WIDTH) == 30);
        ctx.setScale(0.5);
        Test.test(ctx.getProperty(RendererContext.Property.NOTE_HEAD_HEIGHT) == 5);
        Test.test(ctx.getProperty(RendererContext.Property.NOTE_HEAD_WIDTH) == 15/2);
        ctx.setScale(1);
    }
}
