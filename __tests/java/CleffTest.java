/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mzm.score.test;

import com.mzm.score.cleff.Cleff;
import com.mzm.score.cleff.TrebleCleff;
import com.mzm.score.bar.note.Key;
import com.mzm.score.bar.note.KeyName;

/**
 *
 * @author maycon.mellos
 */
public class CleffTest {

    public static void run() throws Exception {
        CleffTest test = new CleffTest();

        test.treble();
    }
    /*
       G  A  B  C  D  E  F  G  A  B  C  D  E  F  G  A  B  C  D
      -9 -8 -7 -6 -5 -4 -3 -2 -1  0 +1 +2 +3 +4 +4 +6 +7 +8 +9
    */
    public void treble() throws Exception {

        Cleff c = new TrebleCleff();
        
        Test.test(c.getKeyLocation(new Key(KeyName.B, 2)) == 0);
        Test.test(c.getKeyLocation(new Key(KeyName.C, 3)) == 1);
        Test.test(c.getKeyLocation(new Key(KeyName.A, 2)) == -1);
        Test.test(c.getKeyLocation(new Key(KeyName.G, 2)) == -2);
        Test.test(c.getKeyLocation(new Key(KeyName.B, 1)) == -7);
        Test.test(c.getKeyLocation(new Key(KeyName.D, 4)) == 9);
        Test.test(c.getKeyLocation(new Key(KeyName.D, 2)) == -5);
    }
}
