/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mzm.score.glyph;

import com.mzm.score.DrawLog;
import com.mzm.score.RendererContext;
import java.awt.Canvas;

/**
 *
 * @author maycon.mellos
 */
public class Flag extends Glyph{
    
    private int noteDuration = 0;
    private int orientation = 0;
    
    public Flag(int duration, int orientation){
        this.noteDuration = duration;
        this.orientation = orientation;
    }

    @Override
    public void paint(RendererContext context, int x, int y) {
        DrawLog.getInstance().add(String.format("flag(x:%d, y:%d, orientation: %d)", x, y, orientation));
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
