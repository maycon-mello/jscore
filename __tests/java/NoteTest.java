/****************************************/
package com.mzm.score.test;

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
public class NoteTest {
    
    public static void run() throws Exception{
        NoteTest test = new NoteTest();
        
        test.head();
        test.noteTest();
        
    }
    
    public void head() throws Exception{
        //C,D,E,F,G,A,B
        Test.test(KeyName.C.compareTo(KeyName.E) < 0);
        Test.test(KeyName.A.compareTo(KeyName.C) > 0);
        Test.test(KeyName.B.compareTo(KeyName.A) > 0);
        Test.test(KeyName.E.compareTo(KeyName.G) < 0);
        //##########  Key comparator
        Key c3 = new Key(KeyName.C, 3);
        Key e3 = new Key(KeyName.E, 3);
        Key g3 = new Key(KeyName.G, 3);

        Test.test(c3.compareTo(e3) < 0);
        Test.test(e3.compareTo(c3) > 0);
        Test.test(g3.compareTo(new Key(KeyName.G, 3)) == 0);
        //##########  Note head comparator
        Head h1 = new Head(c3, 4);
        Head h2 = new Head(e3, 4);

        Test.test(h1.compareTo(h2) < 0);
        Test.test(h2.compareTo(h1) > 0);
        Test.test(h2.compareTo(h2) == 0);
        //
        Test.test(h1.getKey().toString().equals("C3"));
        Test.test(h2.getKey().toString().equals("E3"));
        //
        Test.test(Beam.getBeamCount(8) == 1);
        Test.test(Beam.getBeamCount(12) == 1);
        Test.test(Beam.getBeamCount(16) == 2);
        Test.test(Beam.getBeamCount(20) == 2);
        Test.test(Beam.getBeamCount(32) == 3);
    }
    
    public void noteTest() throws Exception{
        List<Key> keyList = new ArrayList<>();
                  keyList.add(new Key(KeyName.G, 3));
                  keyList.add(new Key(KeyName.C, 3));
                  keyList.add(new Key(KeyName.E, 3));
                  
        //
        Note n = new Note(keyList, 16);
        //
        Test.test(n.getHeads().size() == 3);
        Test.test(n.getMaxKey().toString().equals("G3"));
        Test.test(n.getMinKey().toString().equals("C3"));
        Test.test(n.getHeads().get(2).getKey().toString().equals("G3"));
        //
        n.setDuration(8);
        Test.test(n.getDuration() == 8);
        //
        n = Note.create(new Key[]{
                            new Key(KeyName.C, 3),
                            new Key(KeyName.E, 3),
                            new Key(KeyName.G, 3)}, 16);
        //
        Test.test(n.getHeads().size() == 3);
        Test.test(n.getMaxKey().toString().equals("G3"));
        Test.test(n.getMinKey().toString().equals("C3"));
        //
        n.setDuration(8);
        Test.test(n.getDuration() == 8);
    }
}