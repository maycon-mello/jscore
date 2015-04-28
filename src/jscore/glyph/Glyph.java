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
public abstract class Glyph {
    
    protected int width;
    protected int height;

    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }

    public abstract void paint(RendererContext context, int x, int y);
   
}
