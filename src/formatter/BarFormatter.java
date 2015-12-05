/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mzm.score.formatter;

import com.mzm.score.bar.Bar;
import com.mzm.score.Staff;
import com.mzm.score.bar.note.Key;
import com.mzm.score.bar.note.Note;

/**
 *
 * @author maycon.mellos
 */
public class BarFormatter {
    
    public static void format(Bar bar){
        //get min and max note key
        Key minKey, maxKey;
        //
        
        //
        BarFormatter.setBarWidth(bar);
    }
    
    public static void setBarWidth(Bar bar){
        int width = 0;
        /*
        for(Note n: bar.getNotes()){
            NoteFormatter.format(n);
            width += n.getWidth();
        }*/
        //
        //bar.setWidth(width);
        //bar.set
    }
}
