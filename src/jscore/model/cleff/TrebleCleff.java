/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mzm.score.cleff;

import com.mzm.score.RendererContext;
import com.mzm.score.Tickable;
import com.mzm.score.bar.note.Key;
import com.mzm.score.bar.note.KeyName;

/**
 *
 * @author maycon.mellos
 */
public class TrebleCleff extends Tickable implements Cleff{
    /*          
        ------ F    4
               E    3
        ------ D    2
               C    1
        ------ B => 0
               A   -1
        ------ G   -2
               F   -3
        ------ E   -4       
     */
    public Key middle = new Key(KeyName.B, 2);
    
    @Override
    public int getKeyLocation(Key k) {
        int middleKey = middle.getKeyName().ordinal();
        int currentKey = k.getKeyName().ordinal();
        
        int middleOctave = middle.getOctave();
        int currentOctave = k.getOctave();
        int location = (currentOctave - middleOctave) * 7;
        
        return location + (currentKey - middleKey);
    }

    @Override
    public void draw(RendererContext ctx) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
