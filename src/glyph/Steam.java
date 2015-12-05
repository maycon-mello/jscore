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
public class Steam extends Glyph{

    private int noteDuration = 0;
    
    public Steam(int duration){
        this.noteDuration = duration;
    }
    
    @Override
    public void paint(RendererContext context, int x, int y) {
        DrawLog.getInstance().add(String.format("Steam(x:%d, y:%d)",  x, y));
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
