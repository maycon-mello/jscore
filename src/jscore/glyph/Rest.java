/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mzm.score.glyph;

import com.mzm.score.RendererContext;
import java.awt.Canvas;

/**
 *
 * @author maycon.mellos
 */
public class Rest extends Glyph{
    
    private int noteDuration = 0;
    
    public Rest(int duration){
        this.noteDuration = duration;
    }

    @Override
    public void paint(RendererContext context, int x, int y) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
